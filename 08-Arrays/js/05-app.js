// Añadir al Inicio o Fin con Methods (push/unshift) 

const carrito = [];

const producto = {
    nombre: 'Monitor 20 Pulgadas', 
    precio: 500
}

const producto2 = {
    nombre: 'Celular', 
    precio: 800
}

// Añadir al Final del Arreglo
carrito.push(producto);
carrito.push(producto2);


const producto3 =  { 
    nombre: 'Teclado', 
    precio: 50
}

// Añadir al Inicio del Arreglo
carrito.unshift(producto3);


console.table(carrito);


// Forma Imperativa, se trabaja sobre la misma variable, se reescribe

