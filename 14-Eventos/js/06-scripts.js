// Event Bubbling

// Cuando presionamos en un evento pero ese evento se propaga por muchos otros lugares, dando resultados que no son los esperados

const carDiv = document.querySelector('.card');
const infoDiv = document.querySelector('.info');
const titulo = document.querySelector('.titulo');
 
carDiv.addEventListener('click', e => {
    e.stopPropagation();
    console.log('click en card');
});

infoDiv.addEventListener('click', e => {
    e.stopPropagation();
    console.log('click en info');
});

titulo.addEventListener('click', e => {
    e.stopPropagation();
    console.log('click en titulo');
});


// Con el stopPropagation() se detiene el event bubbling

// En el siguiente está el ejemplo con delegation


