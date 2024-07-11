// Sellar un Objeto (Seal) permite modificar

// Exige que se cumplan ciertas reglas
"use strict"

const producto = {
    nombre: "Monitor 20 pulgadas",
    precio: 30,
    disponible: true
}

Object.seal( producto );

// SÍ se puede modificar
producto.disponible = false;

// // No se puede agregar o eliminar
// producto.imagen = 'imagen.png';
// delete producto.precio;

console.log(producto);
console.log(Object.isSealed(producto));

// La diferencia con freeze es que aquí sí se puede modificar las propiedades

