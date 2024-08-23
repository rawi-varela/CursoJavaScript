// Detectar si hay conexión a internet

console.log('agregando addEventListener');

window.addEventListener('online', actualizarEstado);
window.addEventListener('offline', actualizarEstado);

function actualizarEstado() {
    if(navigator.onLine) {
        console.log('Si estás Conectado');
    } else {
        console.log('No estás Conectado');
    }
    console.log('desde actualizarEstado');
}

// No funcionó en local, probar en línea