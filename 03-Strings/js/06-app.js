// String Methods - Repeat y Split

// .repeat permite repetir una cadena de texto
const producto = 'Monitor 24 pulgadas ';
const texto = 'en Promoción '.repeat(3)
console.log(producto.repeat(3));
console.log(producto.repeat(2.2)); // va a redondear a entero
console.log(`${producto} ${texto} !!!`);
 


// Split permite dividir un string en un arreglo
const actividad = 'Estoy aprendiendo Javascript Moderno';
console.log(actividad.split(" ")); // va a divir por "espacios"

const hobbies = 'Leer, caminar, escuchar musica, escribir, aprender a programar';
console.log(hobbies.split(", ")); // va a dividir por ","



