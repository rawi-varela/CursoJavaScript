// Evento submit del formualrio

const formulario = document.querySelector('#formulario');

formulario.addEventListener('submit', enviar);
// No es necesesario "pasar el evento" porque el listener ya sabe que tiene que buscar una función
function enviar(e) {
    e.preventDefault();

    console.log('buscando...');
    console.log(e.target.action);
}

// Se suele prevenir la acción or default para consumir APIS

// target es propiedad de eventos, corresponde al elemento que disparó el evento