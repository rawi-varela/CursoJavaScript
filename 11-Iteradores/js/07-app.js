// For of
// Versión simplificada (de for) para ejecutar un arreglo
// Este ejecuta mientras haya elementos por iterrar como puede ser un arreglo

let pendientes = ['Tarea', 'Comer', 'Proyecto', 'Estudiar JavaScript'];

const carrito = [
    { nombre: 'Monitor 20 Pulgadas', precio: 500},
    { nombre: 'Televisión 50 Pulgadas', precio: 700},
    { nombre: 'Tablet ', precio: 300, descuento: true},
    { nombre: 'Audifonos', precio: 200},
    { nombre: 'Teclado', precio: 50, descuento: true},
    { nombre: 'Celular', precio: 500},
]

for(let pendiente of pendientes) {
    console.log(pendiente);
}

for(let producto of carrito) {
    console.log(producto);
}

// Se la da un "alias" a cada elemento del array
