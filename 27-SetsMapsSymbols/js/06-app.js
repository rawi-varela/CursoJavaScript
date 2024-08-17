// Iteradores en JS

function crearIterador(carrito) {
    let i = 0;

    return {
        siguiente: () => {
            let fin = (i >= carrito.length);
            let valor = !fin ? carrito[i++] : undefined;

            return {
                fin, //fin: fin,
                valor, // valor: valor
            };
        }
    };
}
const carrito = ['Producto 1', 'Producto 2', 'Producto 3', 'Producto 4'];

const recorrerCarrito = crearIterador(carrito);
// Se usa así porque la función retorna una función
console.log(recorrerCarrito.siguiente() );
console.log(recorrerCarrito.siguiente() );
console.log(recorrerCarrito.siguiente() );
console.log(recorrerCarrito.siguiente() );
console.log(recorrerCarrito.siguiente() );


