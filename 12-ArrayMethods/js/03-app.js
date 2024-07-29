// .reduce
// Es tomar una gran cantidad de datos, unirlos y entregar un resultado
 
const carrito = [
    { nombre: 'Monitor 27 Pulgadas', precio: 500 },
    { nombre: 'Televisión', precio: 100 },
    { nombre: 'Tablet', precio: 200 },
    { nombre: 'Audifonos', precio: 300 },
    { nombre: 'Teclado', precio: 400 },
    { nombre: 'Celular', precio: 700 },
]

let total = 0;
carrito.forEach( producto => total += producto.precio);
console.log(total);


// Con .reduce
let resultado = carrito.reduce( (total, producto) => total + producto.precio, 0); // El último valor es en con cuanto inicia
console.log(resultado);
// Es un poco raro, pero necesita dos valores, primero el valor previo y después el valor actual (el objeto)
