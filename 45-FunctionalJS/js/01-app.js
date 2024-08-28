// Functional JS (Como Programación Funcional)

// No se permite la modificación de datos, (mejor crear otro array)
// Sintaxis tipo matemáticas

// Inmutabilidad- los datos no deben modificarse (usar const casi siempre)
// Separar funciones de datos (utilizar funcioens qe retornan un nuevo dato o Array Method)
// First-class Fuctions - Poder crear funciones que parezcan cualquier variable como lo es fuction expression


const suma = function(a , b) {
    return a + b;
}

const resultado = suma;

console.log(resultado(10, 30));


