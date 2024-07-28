// For in

let pendientes = ['Tarea', 'Comer', 'Proyecto', 'Estudiar JavaScript'];

for(let pendiente in pendientes) {
    console.log(pendiente);
}
// Parece que imprime solo los índices (1,2,3,4)
// For In itera sobre Objectos. For Of iteraba sobre arreglos


const automovil = {
    modelo: 'Camaro',
    precio: 300,
    estado: 'nuevo',
    año: 2020
}


// for(let propiedad in automovil) {
//     console.log(`${automovil[propiedad]}`);
// }

// Forma moderna de iterar objetos
for(let [key, value] of Object.entries(automovil)){
    console.log(`${key}: ${value}`);
}



// En eñ 12-ArrayMethods se ven métodos que ayudan a evitar tener que usar siempre iteradores

