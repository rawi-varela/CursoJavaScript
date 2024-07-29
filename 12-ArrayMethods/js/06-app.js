// .every
// Retorna true si todos los elementos del arreglo cumplen la condición

const carrito = [
    { nombre: 'Monitor 27 Pulgadas', precio: 500 },
    { nombre: 'Televisión', precio: 200 },
    { nombre: 'Tablet', precio: 100 },
    { nombre: 'Audifonos', precio: 500 },
    { nombre: 'Teclado', precio: 300 },
    { nombre: 'Celular', precio: 700 },
]

// Todos cumplen la codnición
const resultado = carrito.every( producto => producto.precio < 1000 );
console.log(resultado);

// Al menos uno cumple la condición
const resulado2 = carrito.some( producto => producto.precio < 200 );
console.log(resulado2);
