// Cachear
const nombreCache = 'apv-v10';
const archivos = [
    './',
    './index.html',
    './error.html',
    './css/bootstrap.css',
    './css/styles.css',
    './js/app.js',
    './js/apv.js',
];

// Cuando se instala el service Worker - Es un buen lugar para cachear ciertos archivos
self.addEventListener('install', e => {
    console.log('Instalando el Service Worker'); // Sólo se ejecuta una vez 

    // Cachear
    e.waitUntil(
         caches.open(nombreCache)
         .then( cache => { // Esta función es asincrona...
             console.log('cacheando...');
             cache.addAll(archivos); // addAll para array, si fuera uno solo sería add
         })
    ) 
});

// Activar el Service Worker - Es un buen lugar para nuevas versiones de la PWA
self.addEventListener('activate', e => {
    console.log('Service Worker Activado');
    console.log(e);

    // Actualizar la PWA //
    e.waitUntil(
        caches.keys()
            .then(keys => {
                // console.log(keys); // muestras las versiones del cache storage

                return Promise.all(keys
                        .filter(key => key !== nombreCache) // Mantener versión actual
                        .map(key => caches.delete(key)) // borrar los demas
                    )
            })
    )
});
// Se dió click en skipWaiting en navegador

// Para isnatalr una PWA
// 1. Manifest válido
// 2. Dominio https o del localhost 
// 3. Tener registrado e leventListener de fecth

// Evento fecth para descargar archivos estáticos
self.addEventListener('fetch', e => {
    console.log('fetch...', e);

    e.respondWith(
        caches.match(e.request) // Revisar el tipo de request ...
            .then( respuestaCache => {
                return respuestaCache
            })
            .catch( () => caches.match('./error.html'))
            // ... en caso de que sea igual a lo que tenemos en cache, entonces cargamos el cache
    )

    
});