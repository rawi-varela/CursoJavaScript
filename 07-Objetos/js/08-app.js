// Congelar un Obeto para no poderlo modificar

// Exige que se cumplan ciertas reglas
"use strict"

const producto = {
    nombre: "Monitor 20 pulgadas",
    precio: 30,
    disponible: true
}

Object.freeze( producto );

// No se puede modificar, agregar o elimina propiedes con freeze
// producto.disponible = false;
// producto.imagen = 'imagen.png';
// delete producto.precio;

console.log(producto);

// Revisa si un Objeto está congelado
console.log(Object.isFrozen(producto));


// Lo mas seguro es que se tenga que clonar el objeto para poder modificarlo
// en 09 hay un method similar que es Seal