// WeakSet
// Solo se le pasan/agregan Objetos
// No son iterables (no ForEach)
// No funcioonse size para saber cuantos elementos tiene

const weakset = new WeakSet();

const cliente = {
    nombre: 'Juan',
    saldo: 200
}

const nombre = 'Alejandro';

weakset.add(cliente);
// weakset.add(nombre); // Error

console.log(weakset.has(cliente)); // True si Object existe, false si no
// console.log(weakset.delete(cliente)); // Lo elimina

console.log(weakset);


