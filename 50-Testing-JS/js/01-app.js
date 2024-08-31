// Testing

// End to End - Interactivo, simula algunos clicks, llena forms y asegurarse de que se muestre en pantalla lo deseado
// Integración - Revisar que múltiples partes del proyecto funcionen bien
// Unit - Revisar que cada parte por si sola funcione bien
// Static - Revisar por errores en el código mientras vas escribiendo

// Jest, tiene versiones para VueJS, Angular, TypeScript, Node, React, etc. (Necesario Node.js)
// Cypress para testings End to End

// Mini Framework para Testing
function suma(a, b) {
    return a + b;
}

function restar(a,b) {
    return a - b;
}

let resultado = suma(2, 2); 
let esperado = 3;

if(resultado !== esperado) {
    console.error(`El ${resultado} es diferente a lo esperado; la prueba no pasó`);
} else {
    console.log('La prueba paso correctamente');
}

resultado = restar(10, 5);
esperado = 5;

if(resultado !== esperado) {
    console.error(`El ${resultado} es diferente a lo esperado; la prueba no pasó`);
} else {
    console.log('La prueba paso correctamente');
}