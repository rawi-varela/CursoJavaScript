// Eventos con el Mouse

const nav = document.querySelector('.navegacion');

// registrar un evento
nav.addEventListener('dblclick', () => {
    console.log('entrando en nav');
    nav.style.backgroundColor = 'white';
});

nav.addEventListener('mouseout', () => {
    console.log('saliendo en nav');
    nav.style.backgroundColor = 'transparent'; 
});

// mouseenter posicionarse
// mouseout desposicionarse
// mousedown como click
// mouseup al soltar el click
// dblclick doble click

