// Destructuring de Arreglos

// Cómo acceder a valores de Objeto y asignarlos a una variable
const producto = { 
    nombre: "Monitor 20 pulgadas", 
    precio: 30,
    disponible: true
}

// Object Destructuring es extraer del objeto y crear la variable en un mismo paso
const { nombre, precio } = producto;
console.log(nombre);


// Destructuring con Arreglos
const numeros =  [10,20,30,40,50];

// El valor está dado por la posición
// Usar , para "saltar" ese valor si no se requiere
const [ primero, , ...tercero ] = numeros; // Sintaxis similar en React

console.log(tercero);


