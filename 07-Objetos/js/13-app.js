// Objects .keys, .values y .entries

const producto = {
    nombre: "Monitor 20 pulgadas",
    precio: 30,
    disponible: true
}

// .keys retorna un arreglo con los keys del objeto (izquierda)
// Sirve para saber si un objeto está vacio, saber si la consulta a BD fue exitosa

console.log( Object.keys(producto) );

// .value retorna los valores (derecha)
console.log( Object.values(producto) );

// .entries retorna todo en pares como arreglo
console.log(Object.entries(producto));