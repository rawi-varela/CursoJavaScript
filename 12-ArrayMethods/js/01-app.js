// .some

const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio'];

const carrito = [
    { nombre: 'Monitor 27 Pulgadas', precio: 500 },
    { nombre: 'Televisión', precio: 100 },
    { nombre: 'Tablet', precio: 200 },
    { nombre: 'Audifonos', precio: 300 },
    { nombre: 'Teclado', precio: 400 },
    { nombre: 'Celular', precio: 700 },
]

// Comprobar si un valor existe en un arreglo
meses.forEach( mes => {
    if(mes === 'Enero') {
        console.log('Sí existe Enero');
    }
});

// Con un array method
const resultado = meses.includes('Abril');
console.log(resultado);

// Pero en un Arreglo de objetos includes no servirá
// En su lugar se utiliza .some
const existe = carrito.some( producto => producto.nombre === 'Tablet');
console.log(existe);

// .some también sirve para el arreglo tradicional de índices
const tradicional = meses.some( mes => mes === 'Diciembre');
console.log(tradicional);

