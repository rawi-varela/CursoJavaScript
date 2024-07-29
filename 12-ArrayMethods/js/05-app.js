// .find
// Retorna el primer elemento que cumple con la condición especificada. Si ningún elemento cumple, retorna undefined.

const carrito = [
    { nombre: 'Monitor 27 Pulgadas', precio: 500 },
    { nombre: 'Televisión', precio: 200 },
    { nombre: 'Tablet', precio: 100 },
    { nombre: 'Audifonos', precio: 500 },
    { nombre: 'Teclado', precio: 300 },
    { nombre: 'Celular', precio: 700 },
]

let resultado = '';
carrito.forEach( (producto, i) => {
    if(producto.nombre === 'Tablet') {
        resultado = carrito[i];
    }
});
console.log(resultado);

// .find
const resultado2 = carrito.find( producto => producto.precio === 100);
console.log(resultado2);


// Solo retorna el primer elemento que cumple la condición
