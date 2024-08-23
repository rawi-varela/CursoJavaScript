// Fetch API
// Consultar JSON Array de Objectos

// Para ejecutarlo directamente
// document.addEventListener('DOMContentLoaded', obtenerDatos);

const cargarJSONArrayBtn = document.querySelector('#cargarJSONArray');
cargarJSONArrayBtn.addEventListener('click', obtenerDatos);


function obtenerDatos() {
    const url = 'data/empleados.json';
    fetch(url) 
        .then( respuesta => respuesta.json()) 
        .then(resultado => mostrarHTML(resultado))
}

function mostrarHTML(empleados) {
    const contenido = document.querySelector('#contenido');

    let html = '';

    empleados.forEach( empleado => {
        const { id, nombre, empresa, trabajo} = empleado;

        html += `
            <p>Empleado: ${nombre} </p>
            <p>ID: ${id} </p>
            <p>Empresa: ${empresa} </p>
            <p>Trabajo: ${trabajo} </p>
        `
    });

    contenido.innerHTML = html;
    
}

// Consumiendo el array, iterar y mostrando el contenido, eso se hace mucho en programación