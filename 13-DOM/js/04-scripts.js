// query selector
// Solo retorna uno pero también permite id y clases

const card = document.querySelector('.card');
console.log(card);

// Podemos tener selectores específicos como en CSS

// .info es "hijo" de .premiun, es importante el espacio, sin espacio es como si quisieramos seleccionar un elemento con dos clases
const info = document.querySelector('.premium .info');
console.log(info);

// Seleccionar el segundo card de la seccion hospedaje
const segundoCard = document.querySelector('section.hospedaje .card:nth-child(2)');
console.log(segundoCard);

// Seleccionar el formulario (id)
const formulario = document.querySelector('.contenido-hero #formulario');
console.log(formulario);

// Seleccionar elementos HTML
const navegacion = document.querySelector('nav');
console.log(navegacion);


