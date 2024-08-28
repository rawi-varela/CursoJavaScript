// Partials y Currying

// Currying es dividir una función que toma más de un paramétro en arguemntos de forma parcial

// const suma = (a,b,c) => a + b + c;

// const parcial = a => (b,c) => suma(a,b,c);

// const primerNumero = parcial(5); // a 
// const resultado = primerNumero(4,3); // (b,c)
// console.log(resultado);


const suma = (a,b,c) => a + b + c;

const parcial = a => b => c => suma(a,b,c);

const primerNumero = parcial(5); // a 
const segundoNumero = primerNumero(4); // b
const resultado = segundoNumero(3); // c
console.log(resultado);

// Más corto es
const resultadoParcial = parcial(5)(4)(3);
console.log(resultadoParcial);

// No se ve mucho, más común en entrevistas

// Partial Application crea una nueva función con algunos argumentos ya establecidos.
// Currying transforma una función que toma varios argumentos en una serie de funciones que toman UN SOLO argumento.