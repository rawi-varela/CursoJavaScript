// WeakMaps
// Los menos utilizados
// Sirve para manetner datos "privados"
// Key debe se Object, value cualquier tipo
// No funciona el size y tampoco se iteran

const producto = {
    idProducto: 10
}

const weakmap = new WeakMap();

weakmap.set(producto, 'Monitor');

console.log(weakmap.has(producto));
console.log(weakmap.get(producto)); // No muestra el valor
// console.log(weakmap.delete(producto));

console.log(weakmap);