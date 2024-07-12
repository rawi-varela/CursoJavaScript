// forEach para iterar un array

const carrito = [
    { nombre: 'Monitor 20 Pulgadas', precio: 500},
    { nombre: 'Televisión 50 Pulgadas', precio: 700},
    { nombre: 'Tablet ', precio: 300},
    { nombre: 'Audifonos', precio: 200},
    { nombre: 'Teclado', precio: 50},
    { nombre: 'Celular', precio: 500},
]

// Recorrer un arreglo de la forma tradicional y mostrar su contenido
for(let i = 0; i < carrito.length; i++ ){
    console.log( `Articulo: ${carrito[i].nombre} - Precio: $${carrito[i].precio} ` );
}

// ForEach (Array Method)
carrito.forEach( function(producto) {
    console.log( `Articulo: ${producto.nombre} - Precio: $${producto.precio} ` );
})
