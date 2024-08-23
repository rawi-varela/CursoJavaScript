// Fetch API
// Consultar txt de un archivo

const cargarTxtBtn = document.querySelector('#cargarTxt');
cargarTxtBtn.addEventListener('click', obtenerDatos);

function obtenerDatos() {
    const url = 'data/datos.txt';

    // Ya tiene el resolve y reject
    fetch(url)
        .then( respuesta => {
            console.log(respuesta);
            console.log(respuesta.status);
            console.log(respuesta.statusText);
            console.log(respuesta.url);
            console.log(respuesta.type);
            
            return respuesta.text(); //.json()
        })
        .then( datos => {
            console.log(datos);
        })
        .catch( error => {
            console.log(error);
        });
}



// Fetch API solo lee texto plano