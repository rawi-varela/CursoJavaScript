// Generar HTML con JS

const enlace = document.createElement('A'); // minus o mayus

// Agregando el texto
enlace.textContent = 'Nuevo Enlace';

// Añadiendo href
enlace.href = '/nuevo-enlace';

console.log(enlace); // Para revisar

enlace.target = "_blank";
enlace.setAttribute('data-enlace', 'nuevo-enlace');
enlace.classList.add('alguna-clase');
// enlace.onclick = miFuncion;
// function miFuncion() {
//     alert('Diste Click');
// }

// Seleccionar la nevagción
const navegacion = document.querySelector('.navegacion');
// navegacion.appendChild(enlace); // agregar hijo (lo coloca al final)

// insertBefore para tener más control
console.log(navegacion.children);
// primer argumento el nodo y segundo antes de cual
navegacion.insertBefore(enlace, navegacion.children[1]);


// Crear un CARD
// AsÍ lo hacen los frameworks, consumir APIs o librerías

const parrafo1 = document.createElement('P');
parrafo1.textContent = 'Concierto';
parrafo1.classList.add('categoria', 'concierto');

const parrafo2 = document.createElement('P');
parrafo2.textContent = 'Concierto de Rock';
parrafo2.classList.add('titulo');

const parrafo3 = document.createElement('P');
parrafo3.textContent = '$800 por persona';
parrafo3.classList.add('precio');

// Crear div con la clase de info
const info = document.createElement('DIV');
info.classList.add('info');
info.appendChild(parrafo1);
info.appendChild(parrafo2);
info.appendChild(parrafo3);

// Crear la imagen
imagen = document.createElement('img');
imagen.src = 'img/hacer2.jpg';

// Crear el card
const card = document.createElement('DIV');
card.classList.add('card');

// Añadir la imagen e info al card
card.appendChild(imagen);
card.appendChild(info);

// Insertar en el HTML al medio del contenedor-cards
const contenedor = document.querySelector('.hacer .contenedor-cards'); // Se refiere al hijo de hacer que es el div contenedor-cardss
// contenedor.appendChild(card); // Agrega al final
contenedor.insertBefore(card, contenedor.children[2]);
