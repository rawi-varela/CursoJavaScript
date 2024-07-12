// Eliminar elementos con Splice (Imperativa)

const carrito = [];

const producto = {
    nombre: 'Monitor 20 Pulgadas', 
    precio: 500
}
const producto2 = {
    nombre: 'Celular', 
    precio: 800
}
const producto3 =  { 
    nombre: 'Teclado', 
    precio: 50
}
const producto4 =  { 
    nombre: 'Celular', 
    precio: 900
}
const producto5 =  { 
    nombre: 'Tablet', 
    precio: 400
}


carrito.push(producto);
carrito.push(producto2);
carrito.unshift(producto3);
carrito.unshift(producto4);
carrito.unshift(producto5);

// Eliminar último elemento
carrito.pop();

// Elimina el inicio del arreglo
carrito.shift();

// Eliminar de enmedio (posicion inicio - cantidad que elimina)
carrito.splice(1, 1);


console.table(carrito);


