// Traversing the DOM - Recorrer el DOM 
// Se refiere a recorrer sobre los diferentes nodos/elementos HTML

const navegacion = document.querySelector('.navegacion');

console.log(navegacion.firstElementChild);
console.log(navegacion.lastElementChild);
// console.log(navegacion.childNodes); // Los saltos de línea los considera elementos
// console.log(navegacion.children); // Lista los elementos reales

// console.log(navegacion.children[1].nodeName); // sería la etiqueta de enlace a
// console.log(navegacion.children[1].nodeType); // node del tipo elemento



const card = document.querySelector('.card');

// console.log(card.children); // Elementos hijos del .card
// card.children[1].children[1].textContent = 'Nuevo Heading desde traversing the DOM';
// console.log(card.children[1].children[1].textContent); 


// También se puede de hijo a padre
// console.log(card.parentNode); // Toma en cuenta espacios en blanco
console.log(card.parentElement.parentElement.parentElement); // Es mejor
// Children recorre los hijos
// parenElement recorre al padre

// // Traversing the DOM entre "hermanos"
// console.log(card);
// console.log(card.nextElementSibling).nextElementSibling;

const lastCard = document.querySelector('.card:nth-child(4');
console.log(lastCard.previousElementSibling);

