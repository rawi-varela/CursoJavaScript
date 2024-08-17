// Symbols
// Nunca un symbos es igual a otro
// No son iterables
const sym = Symbol('1');
const sym2 = Symbol('1');

// console.log( Symbol() === Symbol()); // false

const nombre = Symbol();
const apellido = Symbol();

const persona = {};

// Agregar nombre y apellido ocmo llaves del objeto
persona[nombre] = 'Juan';
persona[apellido] = 'Garcia';
persona.tipoCliente = 'Premium';
persona.saldo = 300;

console.log(persona);
// Se debe usar esta sintaxis para accede, la sintaxis de punto marca undefined
// console.log(persona[nombre]); 

// Las propiedades que utilizan un symbol no son iterables
for(let i in persona) { // persona[i]) Para iterar values
    console.log(i); // No muestra nombre ni apellido
}

// Definir una descripción del Symbol
const nombreCliente = Symbol('Nombre del Cleinte');
const cliente = {};

cliente[nombreCliente] = 'Pedro';

console.log(cliente);
console.log(cliente[nombreCliente]);
console.log(nombreCliente); // La descripción


// Los Symbols se utilizan frecuentemente para crear propiedades de objetos que no colisionen con otras propiedades. Esto es útil en casos donde necesitas asegurarte de que una propiedad es única y no se sobrescriba accidentalmente.