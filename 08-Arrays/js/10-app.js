// .map para iterar array (diferencias con forEach)

const carrito = [
    { nombre: 'Monitor 20 Pulgadas', precio: 500},
    { nombre: 'Televisión 50 Pulgadas', precio: 700},
    { nombre: 'Tablet ', precio: 300},
    { nombre: 'Audifonos', precio: 200},
    { nombre: 'Teclado', precio: 50},
    { nombre: 'Celular', precio: 500},
]

// ForEach (Array Method)
 const nuevoArreglo = carrito.forEach( function(producto) {
    return  `Articulo: ${producto.nombre} - Precio: $${producto.precio} ` ;
})

// map (Array Method)
// Va a llenar una variable con un arreglo nuevo (forEach no)
 const nuevoArreglo2 = carrito.map( function(producto) {
    return  `Articulo: ${producto.nombre} - Precio: $${producto.precio} ` ;
})

console.log(nuevoArreglo); // Undefined
console.log(nuevoArreglo2);

// Hay casos en los que se quiere crear un nuevo arreglo por eso es util .map
