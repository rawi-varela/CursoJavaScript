// Acceder a los valores de ub objeto

const producto = { 
    nombre: "Monitor 20 pulgadas", // La , es importante, sin ella tendriamos un error
    precio: 30,
    disponible: true
}

// Los objetos utilizan la sintaxis de .
console.log(producto);
console.log(producto.nombre);

// Otra forma
console.log(producto['nombre']);

