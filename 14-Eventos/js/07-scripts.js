// Prevenir Event Bubbling con Delegation

const carDiv = document.querySelector('.card');

carDiv.addEventListener('click', e => {
    if(e.target.classList.contains('titulo')) {
        console.log('Click en titulo');
    }
    if(e.target.classList.contains('precio')) {
        console.log('Click en precio');
    }
    if(e.target.classList.contains('card')) {
        console.log('Click en card');
    }
});


// Es una muy buena forma, en el siguiente otro ejemplo con un método

