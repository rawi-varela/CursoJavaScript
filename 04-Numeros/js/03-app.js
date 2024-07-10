// E l objeto Math
// Math es parte de la ventana global de JavaScript, tiene una serie de operaciones que pueden ser muy útiles

let resultado; 

resultado = Math.PI;

// redondeo
resultado = Math.round(2.6);

// redondeo arriba
resultado = Math.ceil(2.2);

// redondeo abajo
resultado = Math.floor(2.2);

// Raiz cuadrada
resultado = Math.sqrt(144);

// Abssoluto
resultado = Math.abs(-300);
// Potencia
resultado = Math.pow(8, 3);
// Minimo
resultado = Math.min(3, 5, 1, 2, 9, 4, 2, -3);
// Max
resultado = Math.max(4, 1, 21, 4, 15, 5, 11, 5);
// Aleatorio
resultado = Math.random();
// Aleatorio dentro de un rango (0-30):
resultado =  Math.floor( Math.random() * 30 );


console.log(resultado);