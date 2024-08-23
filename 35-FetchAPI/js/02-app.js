// Fetch API
// Consultar JSON

const cargarJSONBtn = document.querySelector('#cargarJSON');
cargarJSONBtn.addEventListener('click', obtenerDatos);


function obtenerDatos() {
    const url = 'data/empleado.json';
    fetch(url) 
        .then( respuesta => respuesta.json()) 
        .then(resultado => mostrarHTML(resultado));// console.log(resultado))
}

// Destructuring al objeto
function mostrarHTML({empresa,  id, nombre, trabajo}) {
    const contenido = document.querySelector('#contenido');

    contenido.innerHTML = `
        <p>Empleado: ${nombre} </p>
        <p>ID: ${id} </p>
        <p>Empresa: ${empresa} </p>
        <p>Trabajo: ${trabajo} </p>
    `
}

// Más moderno es Rest API se verá más adelante
