// Crear un nuevo arreglo con el Spread Operator

const carrito = [];

const producto = {
    nombre: 'Monitor 20 Pulgadas', 
    precio: 500
}

const producto2 = {
    nombre: 'Celular', 
    precio: 800
}

const producto3 = {
    nombre: 'Teclado', 
    precio: 300
}

let resultado;

resultado = [...carrito, producto, producto2];
resultado = [producto3, ...resultado];

console.table(resultado);

// Forma Declarativa, no modifica la variable original
