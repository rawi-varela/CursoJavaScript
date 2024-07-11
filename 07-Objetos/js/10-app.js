// Unir dos Objetos

const producto = {
    nombre: "Monitor 20 pulgadas",
    precio: 30,
    disponible: true
}

const medidas = {
    peso: '1kg',
    medida: '1m'
}

console.log(producto);
console.log(medidas);

const resultado = Object.assign(producto, medidas);
console.log(resultado);

// Otra forma igual pero más utilizada es
const resultado2 = { ...producto, ...medidas } // Los puntos quiere decir que haga una copia del objeto
console.log(resultado2);

