// Acceder a los valores de un Array

const numeros = [10,20,30,40,50, [1, 2, 3], { precio:20, disponible: true } ];

console.log(numeros);
console.table(numeros);


// Se accede a un valor del arreglo por el indice

console.log(numeros[0]);
console.log(numeros[5][2]);
console.log(numeros[6].disponible);


