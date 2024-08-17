//  Generadores
// Es uan función que retorna un iterador
// Pueden pausar su ejecución y luego reanudarla mantiendo el estado 

// yield pausa la ejecución y devuelve un valor. Cada vez que se llama al método next(), la función generadora se reanuda desde donde se quedó, ejecuta hasta encontrar la próxima declaración yield, y devuelve el valor de esta.
function *crearGenerador() {
    yield 5;
    yield 'juan';
    yield 3+3;
    yield true;
}

const iterador = crearGenerador();

console.log(iterador);
console.log(iterador.next().value);
console.log(iterador.next());
console.log(iterador.next().value);
console.log(iterador.next()); // Este es el 4 y último
console.log(iterador.next()); // Fin value undefined y donde = true


// Generadr para carrito
function *generadorCarrito(carrito) {
    for(let i = 0; i < carrito.length; i++) {
        yield carrito[i];
    }
}

const carrito = ['Producto 1', 'Producto 2', 'Producto 3'];

const iterar = generadorCarrito(carrito);

console.log(iterar.next());
console.log(iterar.next());
console.log(iterar.next()); // último
console.log(iterar.next()); // Fin value undefined y donde = true



