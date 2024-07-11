// Destructuring en Objetos anidados

const producto = {
    nombre: "Monitor 20 pulgadas",
    precio: 30,
    disponible: true,
    informacion : {
        medidas: {
            peso: '1kg',
            medida: '1m'
        },
        fabricacion: {
            pais: 'China',
            estado: 'Pekin'
        }
    }
}

// const { nombre, informacion, informacion: { fabricacion } } = producto;
const { nombre, informacion, informacion: { fabricacion, fabricacion: { pais } } } = producto;


// console.log(nombre);
// console.log(informacion);
console.log(fabricacion);
console.log(pais); // China
