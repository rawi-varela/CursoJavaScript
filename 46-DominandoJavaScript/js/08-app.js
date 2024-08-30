// Self

// También se refiere a la ventana global como Windows, pero se usa más en Service Workers

// self.onload = () => {
//     console.log('Ventana Lista');
// }

// window.onload = () => {
//     console.log('Ventana lista');
// }

// Ahora muchas personas utilizan self de la sig forma...
const producto = {
    nombre: "Monitor 20 pulgadas",
    precio: 30,
    disponible: true,
    mostrarInfo: function() {
        const self = this;
        return `El Producto: ${self.nombre}  tiene un precio de ${self.precio}`;
    }
}

console.log(producto.mostrarInfo());

