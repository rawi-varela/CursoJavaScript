// .findIndex
// Para encontrar índice en un arreglo


const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio'];

const carrito = [
    { nombre: 'Monitor 27 Pulgadas', precio: 500 },
    { nombre: 'Televisión', precio: 200 },
    { nombre: 'Tablet', precio: 100 },
    { nombre: 'Audifonos', precio: 100 },
    { nombre: 'Teclado', precio: 400 },
    { nombre: 'Celular', precio: 700 },
]

meses.forEach( (mes,i) => {
    if(mes === 'Abril') {
        console.log(`Mes encontrando en el índice: ${i}`)
    }
});

// findIndex
const indice = meses.findIndex( mes => mes === 'Mayos');
console.log(indice);
// Retorna -1 si no lo encuentra
// if( indice > 0) { }


// Para arreglo de objetos es igual
const indiceObjeto = carrito.findIndex( producto => producto.precio === 100);
console.log(indiceObjeto);
// Retorna solo el primer índice aunque otro también cumpla la condición

