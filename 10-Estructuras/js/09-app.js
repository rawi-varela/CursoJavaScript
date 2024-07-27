// Operador Ternario

const autenticado = true;
const puedePagar = true;

// console.log(autenticado || puedePagar ? 'Sí puede pagar' : 'No puede pagar');


// Ternario anidado (poco común)
console.log(autenticado ? puedePagar ? 'Sí puede pagar' : 'Sí auth pero no puede pagar' : 'No está auth');
