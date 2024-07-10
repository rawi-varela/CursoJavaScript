// Convertir Strings a números

const numero1 = "20";
const numero2 = "20.2";
const numero3 = "Uno";
const numero4 = 20;

console.log(numero1);

// Number es un objeto al igual que Math

console.log(Number.parseInt(numero1)); // Convertir de String a Número
console.log(Number.parseFloat(numero2)); // Convertir a número con decimales 
console.log(Number.parseInt(numero3)); 

// Revisar si un número es entero
console.log(Number.isInteger(numero4) ); // Revisar si un número es entero o no
console.log(Number.isInteger(numero3) ); //

// Convertir String a numero
console.log(numero4.toString());