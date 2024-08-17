//

const ciudades = ['Londres', 'New York', 'Madrid', 'Paris'];
const ordenes = new Set([123, 231, 131, 102]);
const datos = new Map();

datos.set('nombre', 'Juan');
datos.set('profesion', 'Desarrollador Web');

// Dafault
for(let ciudad of ciudades) { // Array trae values
    console.log(ciudad);
}

for(let orden of ordenes) { //Set, tare values
    console.log(orden);
}

for(let dato of datos) { //Map, trae key value
    console.log(dato);
}

// // Entries iterador
// // entries a las ciudades Array
// // retorna llave y valor
// for( let entry of ciudades.entries() ){
//     console.log(entry);
// }

// // entries a las ordenes Set
// // retorna llave y valo iguales ya que set no tiene llaves
// for( let entry of ordenes.entries() ){
//     console.log(entry);
// }

// // entries a datos Map
// // retorna llave y valor
// for( let entry of datos.entries() ){
//     console.log(entry);
// }


// // Values iterator
// for(let value of ciudades.values()) {
//     console.log(value);
// }

// for( let value of ordenes.values() ){
//     console.log(value);
// }

// for( let value of datos.values() ){
//     console.log(value);
// }



// // Keys iterator
// for(let keys of ciudades.keys() ) {
//     console.log(keys);
// }

// for( let keys of ordenes.keys()  ){
//     console.log(keys);
// }

// for( let keys of datos.keys()  ){
//     console.log(keys);
// }
