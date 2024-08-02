// Cambiando el CSS con JavaScript

// Ecnontramos las mismas propiedades que en CSS, las de dos palabras backgound-color se elimina el guion y la segundo inicia con mayuscula
// const encabezado = document.querySelector('h1');
// encabezado.style.backgroundColor = 'red';

// Lo mejor es agregar o quitar clases con JS en lugar de asignar estilos, eso se hace en CSS

const card = document.querySelector('.card');
card.classList.add('segundaClase', 'terceraClase');
card.classList.remove('segundaClase');
console.log(card.classList); 

//classList trae todas las clases como arreglo
//className trae la calse como string