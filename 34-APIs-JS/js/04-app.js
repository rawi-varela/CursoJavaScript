// Ejecutar pantalla completa en JS

const abrirBtn = document.querySelector('#abrir-pantalla-completa');
const salirBtn = document.querySelector('#salir-pantalla-completa');

abrirBtn.addEventListener('click', pantallaCompleta);
salirBtn.addEventListener('click', cerrarPantallaCompleta);

function pantallaCompleta() {
    // El elemento que queremos en pantalla completa
    document.documentElement.requestFullscreen();
}

function cerrarPantallaCompleta() {
    // Elemento anterior
    document.exitFullscreen();
}

