// Obtener datos del localStorage

const nombre = localStorage.getItem('nombre');
console.log(nombre);

// JSON.parse convierte el string a Obejct/Array si tiene la forma adecuada
const productoJSON = localStorage.getItem('producto');
console.log(JSON.parse(productoJSON));

const mesesJSON = localStorage.getItem('meses');
console.log(JSON.parse(mesesJSON));

 