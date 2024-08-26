// Async Await hacia una API con Fetch

const url = 'https://picsum.photos/list';

document.addEventListener('DOMContentLoaded', obtenerDatos);

// Promises
// function obtenerDatos() {
//     fetch(url)
//         .then(respuesta =>respuesta.json())
//         .then(resultado => console.log(resultado))
//         .catch(error => console.log(error));
// }

// Async Await
// El más utilizado
async function obtenerDatos() {
    try {
        // Necesario doble await, porque el resultado debe esperar la respuesta
        const respuesta = await fetch(url);
        const resultado = await respuesta.json();
        console.log(resultado);
    } catch (error) {
        console.log(error);
    }
}


