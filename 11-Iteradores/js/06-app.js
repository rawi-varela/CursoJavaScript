// .forEach y .map

// forEach ideal para ejecutar arreglos, si en el arreglo hay 20 elementos se va a ejecuatr 20 veces

let pendientes = ['Tarea', 'Comer', 'Proyecto', 'Estudiar JavaScript'];

// Se pasa por defecto el índice
pendientes.forEach( (pendiente, index) =>  {
    console.log(`${index} : ${pendiente}`);
})


// Recorrer arreglo de objetos
const carrito = [
    {id: 1, nombre: 'Libro', precio: 300},
    {id: 2, nombre: 'Camisa', precio: 500},
    {id: 3, nombre: 'Disco', precio: 800},
];

// carrito.forEach( producto =>  console.log(producto.nombre));
// carrito.map( producto =>  console.log(producto.precio));

// Recordar que .map crea un arreglo nuevo y foreach no

nuevoArreglo = carrito.forEach( producto => producto.nombre);
console.log(nuevoArreglo); // undefined

nuevoArreglo2 = carrito.map( (producto) => producto);
console.log(nuevoArreglo2);

