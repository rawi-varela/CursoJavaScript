// Callback Hell
// Es un problema que puede pasar (es exagerado en realidad)

const paises = [];

function nuevoPais(pais, callback) {
    paises.push(pais);
    console.log(`Agregado: ${pais}`);
    callback();
}

function mostrarPaises() {
    console.log(paises);
}


// Se puede llegar a tener un código así, que no es lo ideal, pero casi nunca pasa
function iniciarCallbackHell() {
    setTimeout(() => {
        nuevoPais('Alemania', mostrarPaises);
        setTimeout(() => {
            nuevoPais('Argentina', mostrarPaises);
            setTimeout(() => {
                nuevoPais('Perú', mostrarPaises);
            }, 2000);
        }, 2000);
    }, 2000);
}


iniciarCallbackHell();

