// Event Loop o Loop de Eventos en JS

// El Código en JavaScript es como se dice, de un solo hilo, es decir, se ejecuta una linea, solo sucede una cosa a la vez y  cada que se va completando una, se manda llamar la otra, eso es el loop de eventos, piensa en el, como un while, que va ejcutando tareas mientras haya tareas disponibles

// while (queue.waitForMessage()) {
//     queue.processNextMessage();
//   }


// Hay eventos que tienen más prioridad que otros..

console.log("Primero");

setTimeout(function() {
    console.log("Segundo");
}, 0);

console.log("Tercero"); 

setTimeout(function() {
    console.log("Cuarto ");
}, 0);

new Promise(function(resolve) {
    resolve("Promise ")
}).then(console.log);

console.log("Quinto");

function hola() {
    console.log('Hola Función');
}
hola();

// El Event Loop esta revisando siempre por funciones que ejecutar, esas funciones pasan al stack, y una vez que se ejecutan, entonces comienza ir al queueue y comienza a ejecutar esas funciones...
 

// Primeros los console
// Función
// Promise
// SetTime ¿out

// https://developer.mozilla.org/es/docs/Web/JavaScript/Event_loop