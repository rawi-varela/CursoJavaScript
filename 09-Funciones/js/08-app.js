// Ejemplo de Funciones que se pasan valores

function sumar( a, b) {
    // console.log(a+b);
    return a + b;
}

// sumar(2, 3);
// En una función que retorna algo, debemos tener una variable a la que se asigne
const resultado = sumar(2, 3);
console.log(resultado);

// Ejemplo más avanzado....
let total = 0;
function agregarCarrito(precio) {
    return total += precio;
}

function calcularImpuesto(total) {
    return 1.15 * total;
}

total = agregarCarrito(200);
total = agregarCarrito(300);
total = agregarCarrito(400);

console.log(total);

const totalPagar = calcularImpuesto(total);

console.log(`El total a pagar es de ${totalPagar}`);

// Un paradigma muy utilizado; crear una sola variable y funciones que retornen valor y al final tener un resultado