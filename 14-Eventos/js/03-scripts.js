// Eventos sobre los inputs

const busqueda = document.querySelector('.busqueda');

busqueda.addEventListener('input', (e) => {
    console.log(e.target.value); // Lo que se está escribiendo
});




// keydown al presionar tecla
// keyup al presionar pero soltar la tecla
// blur cuando estas en un input y das click en otro lado, te sales del input
// copy cuando seleccionamos el texto y copiamos ctr + c
// paste cuando pegamos algo
// cut al cortar ctr + x
// input escucha todos los anteriores menos blur y al parecer copy


