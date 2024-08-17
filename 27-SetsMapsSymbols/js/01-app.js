// Sets
// Permite crear una lista de valores sin duplicados
// Se le puede pasar cualquier valor, objetos, números,  booleans, etc
// la mayoria prefiere crear arreglos, iterar...

const carrito = new Set();

carrito.add('Camisa');
carrito.add('Perro');
carrito.add('Bolsa');
carrito.add('Gato');
carrito.add('Gato'); // No lo agrega
carrito.add(false);
carrito.add(10);
carrito.add(20);
carrito.add(10);
carrito.add({nombre: 'alejandro', saldo: 500});

console.log(carrito.delete('Bolsa')); 
console.log(carrito.has('Perro')); // True si existe, false si no
console.log(carrito.size); // Tamaño del set, cuantos elementos tiene
// carrito.clear(); // Vacía el set
// Los Sets son iterables
carrito.forEach( (producto, index, pertenece) => {
    console.log(producto);
    // console.log(index); // El índice es el value en realidad
    // console.log(pertenece); // Retorna el set completo, no se para qué sirve
});

console.log(carrito);


// Del siguiente arreglo eliminar los duplicados
const numeros = [10,20,30,30,20,10,40,50,50];

const noDuplicados = new Set(numeros);
console.log(noDuplicados);

