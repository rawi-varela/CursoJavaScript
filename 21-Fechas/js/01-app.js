
const diaHoy = new Date();
// const diaHoy = new Date('1-12-2000');

let valor;

valor = diaHoy;
valor = diaHoy.getFullYear(); 
valor = diaHoy.getMonth();
valor = diaHoy.getMinutes();
valor = diaHoy.getHours();
valor = diaHoy.getTime(); //Milisegundos desde 1970
valor = diaHoy.setFullYear('2010');

// console.log(typeof valor); // es del tipo Object
console.log( diaHoy); 

// get para estraer el valor
// set para modificar el valor

//Validar fechas con el servidor no con JS