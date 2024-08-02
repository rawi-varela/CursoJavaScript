// Eliminar elementos del DOM

// Eliminar el elemento por si mismo o desde el padre

// Por si mismo con remove()
const primerEnlace = document.querySelector('a');
primerEnlace.remove();
console.log(primerEnlace);

// Desde el padre
const navegacion = document.querySelector('.navegacion');
console.log(navegacion.children); // Para identificar
navegacion.removeChild(navegacion.children[2]);


