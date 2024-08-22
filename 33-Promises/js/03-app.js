// Promise, .then y .catch

// resolve que se cumplió el promise, reject: eror en promise
const aplicarDescuento = new Promise( (resolve, reject) => {

    const descuento = true;

    if(descuento) {
        resolve('Descuento Aplicado');
    } else {
        reject('No se pudo aplicarr el decuento');
    }
});

// se hace lo mismo con Fetch API
aplicarDescuento
    .then( resultado => descuento(resultado)) // Acceder a resolve
    .catch( error => console.log(error)); // Acceder a reject

function descuento(mensaje) {
    console.log(mensaje);
}


// console.log(aplicarDescuento);
// Hay 3 valores posibles...
// fulfilled - El promise se cumplió
// rejected - El promise no se cumplió
// pending - No se ha cumplido y tampoco fue rechazado
