// break y continue en un for loop

// break va a cortar la ejecución del for loop
// continue nos permite "intercepar" un elemento identificarlo y continuar la ejecución

// break rompe la ejecución
// for(let i = 0; i <= 10; i++) {
//     if(i === 5) {
//         console.log('Cinco');
//         break;
//     }
//     console.log(`Número ${i}`);
// }


// continue "rompe" el ciclo pero continua la ejecución
// for(let i = 0; i <= 10; i++) {
//     if(i === 5) {
//         console.log('Cinco');
//         continue; 
//     }
//     console.log(`Número ${i}`); //No se ejecuta para 5 por continue
// }


const carrito = [
    { nombre: 'Monitor 20 Pulgadas', precio: 500},
    { nombre: 'Televisión 50 Pulgadas', precio: 700},
    { nombre: 'Tablet ', precio: 300, descuento: true},
    { nombre: 'Audifonos', precio: 200},
    { nombre: 'Teclado', precio: 50, descuento: true},
    { nombre: 'Celular', precio: 500},
]

for(let i = 0; i < carrito.length; i++) {
    if(carrito[i].descuento) {
        console.log(`El articulo ${carrito[i].nombre} Tiene descuento... `);
        continue;
    }
    console.log(carrito[i].nombre);
}

 