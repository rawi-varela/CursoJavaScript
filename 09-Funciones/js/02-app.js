// Diferencia entre Function Expression y Function Declaration

// Function Declaration
sumar();
function sumar() {
    console.log(2 + 2);
}
// sumar();

// Function Expression
sumar2(); // Error
const sumar2 = function() {
    console.log(3 + 3);
}
// sumar2();


// Eso pasa porque JavaScript se ejecuta digamos en 2 vueltas - Eso se le conoce como Hoisting , la primer vuelta registra todas las funciones y determina las variables, esta etapa se le llama de creación, 

// la segunda pasada es la que executa el código, se llama de ejecución.

// Por lo tanto el primer código (Function Declaration) funciona porque function se registra primero y después se ejecuta el código.

// el segundo  (Funtion Expression) no funciona porque si bien es una función no es declarada como tal, lo ve más bien como una variable...

// Esto se le conoce como hosting que basicamente son esas 2 etapas (creación y ejecución)

