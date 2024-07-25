// Arrow Functions en forEach y map

const carrito = [
    { nombre: 'Monitor 20 Pulgadas', precio: 500},
    { nombre: 'Televisión 50 Pulgadas', precio: 700},
    { nombre: 'Tablet ', precio: 300},
    { nombre: 'Audifonos', precio: 200},
    { nombre: 'Teclado', precio: 50},
    { nombre: 'Celular', precio: 500},
]

// recordar que map va a llenar una variable con un arreglo nuevo (forEach no lo hace)
const nuevoArray = carrito.map(  producto => `Articulo: ${producto.nombre} Precio: ${producto.precio}} `)

carrito.forEach( producto => console.log( `Articulo: ${producto.nombre} Precio: ${producto.precio} `));

console.log(nuevoArray);





