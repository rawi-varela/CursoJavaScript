// Eliminar de localStorage

localStorage.removeItem('nombre'); 

// Actualizar un registro
// Se debe obtener, transformar si es necesario, modificar, y subir otra vez
const mesesArray = JSON.parse(localStorage.getItem('meses'));
console.log(mesesArray);
mesesArray.push('Nuevo mes');
console.log(mesesArray);
localStorage.setItem('meses', JSON.stringify(mesesArray));

// Limpiar el localStorage
localStorage.clear();
