// Module Pattern - Para organizar

// colocar type="module" en el <script> en HTML

const mostrarCliente = nombre => {
    console.log(nombre);
}

export default mostrarCliente;

// Vieja forma antes del ECMA6
const module1 = (function() {
    const nombre = 'Leclerc';

    function hola() {
        console.log('Hola');
    }

    return {
        nombre,
        hola
    }
})();

// En otro archivo se usaba
// module1.hola();
// module1.nombre