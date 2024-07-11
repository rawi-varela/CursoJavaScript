// Agregar o eliminar Propiedades de un Objeto

const producto = { 
    nombre: "Monitor 20 pulgadas", // La , es importante, sin ella tendriamos un error
    precio: 30,
    disponible: true
}

// Agregar
producto.imagen = 'imagen.png'

// Eliminar
delete producto.disponible;


console.log(producto);