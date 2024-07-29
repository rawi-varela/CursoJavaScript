// Más ejemplos con Spread Operator / Rest Operator

const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio'];

const carrito = [
    { nombre: 'Monitor 27 Pulgadas', precio: 500 },
    { nombre: 'Televisión', precio: 100 },
    { nombre: 'Tablet', precio: 200 },
    { nombre: 'Audifonos', precio: 300 },
    { nombre: 'Teclado', precio: 400 },
    { nombre: 'Celular', precio: 700 },
]

// Spread Operator en un arreglo tradiciona lde índices
const meses2 = [...meses, 'Agosto'];
console.log(meses2);

// Spread Operator en arreglo de objetos
const producto = { nombre: 'Escritorio', precio: 800 };
const carrito2 = [ producto, ...carrito ];
console.log(carrito2);

