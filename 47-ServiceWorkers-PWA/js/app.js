
// PWA - Progressive Web Application
// Rápida - cargan la info en -5 seg
// Instalable - Se peuden navegar o instalar en navegador o móvil como una app nátiva
// Soporte Offline - Pueden funcionar sin internet

// Service Workers
// Son la base de PWA , funcionan offline, no tiene acceso al DOM, cargan de forma instantanea
// Pueden sincronizar datos detrás de escena o sin interferir en la navegación

// Funciones No disponivles en Service Workers
// window (utiliza self)
// document (utiliza caches)
// localStorage (utiliza fetch, puede ser similar al qeu ya conocemos, pero tiene casos específicos para PWA)

// Registarndo un Service Worker, se creó un archivo (sw.js) en la raíz
if('serviceWorker' in navigator) {
    navigator.serviceWorker.register('./sw.js')
        .then( registrado => console.log('Se instaló correctamente', registrado) )
        .catch( error => console.log('Falló la instaalción', error) );
} else {
    console.log('Service Worker no soportado');
}


