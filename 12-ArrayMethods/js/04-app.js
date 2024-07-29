// .filter
// Crea un nuevo arreglo basado en el parámetro que es evaluado

const carrito = [
    { nombre: 'Monitor 27 Pulgadas', precio: 500 },
    { nombre: 'Televisión', precio: 200 },
    { nombre: 'Tablet', precio: 100 },
    { nombre: 'Audifonos', precio: 500 },
    { nombre: 'Teclado', precio: 300 },
    { nombre: 'Celular', precio: 700 },
]

let resultado;
resultado = carrito.filter( producto => producto.precio > 400 );
resultado = carrito.filter( producto => producto.precio < 600 );
// Quitar Televisión
resultado = carrito.filter( producto => producto.nombre !== 'Televisión');

console.log(resultado);



// Es de los más usados al igual que a .reduce