// Modificar textos o imagenes en JS

const encabezado = document.querySelector('.contenido-hero h1').textContent; // Chaining, encadenarselo
console.log(encabezado);

// console.log(encabezado.innerText); // si hay en CSS visibility: hidden; no lo va a encontrar, en consola sale <empty string>
// console.log(encabezado.textContent); // Sí lo va a encontrar
// console.log(encabezado.innerHTML); // Se trae HTML

// Modificar el HTML
// const newHeading = 'Nuevo Heading';
// document.querySelector('.contenido-hero h1').textContent = newHeading;

// const imagen = document.querySelector('.card img');
// console.log(imagen);

// imagen.src = 'img/hacer2.jpg';

