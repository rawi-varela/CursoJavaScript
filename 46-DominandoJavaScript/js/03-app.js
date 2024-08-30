// Coerción
// Es la conversión automática o implícita de valores de un tipo dado a otro

const numero1 = 20;
const numero2 = "40";

// Coreción implícita 2040
console.log(numero1 + numero2); 

// Coerción explícita (usar función)
console.log(Number(numero2));
console.log(numero1.toString());

const pedido = [1,2,3,4,5];
console.log(pedido.toString());
console.log(JSON.stringify(pedido));