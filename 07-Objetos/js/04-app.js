// Destructuring de Objetos (Object Destructuring)

// Cómo acceder a valores de Objeto y asignarlos a una variable

const producto = { 
    nombre: "Monitor 20 pulgadas", // La , es importante, sin ella tendriamos un error
    precio: 30,
    disponible: true
}

// // Forma antigua
// const nombre = producto.nombre;
// console.log(nombre);


// Object Destructuring es extraer del objeto y crear la variable en un mismo paso
const { nombre, precio } = producto;
console.log(nombre);
console.log(precio);