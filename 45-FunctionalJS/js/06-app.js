// Pure Functions - Funciones Puras (Común en React)
// Funciones que retornan un dato pero no modifican los valores de la varable
// si hay una variable globa, no van a modificar ese valor, retornan uno nuevo
// Si toman una entrada de datos, deben retornar la misma cantidad de datos

const numero1 = 20;
const duplicar = numero => numero * 2;


const resultado = duplicar(numero1);

console.log(resultado);
console.log(numero1);

  
