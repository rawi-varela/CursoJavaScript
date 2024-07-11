// Funciones en Objeto y acceder a sus valores (this)

const producto = {
    nombre: "Monitor 20 pulgadas",
    precio: 30,
    disponible: true,
    mostrarInfo: function() {
        console.log(`El Producto: ${this.nombre} tiene un precio de ${this.precio}`)
    }
}

const producto2 = {
    nombre: "Tablet",
    precio: 500,
    disponible: true,
    mostrarInfo: function() {
        console.log(`El Producto: ${this.nombre} tiene un precio de ${this.precio}`)
    }
}


producto.mostrarInfo();
producto2.mostrarInfo();



