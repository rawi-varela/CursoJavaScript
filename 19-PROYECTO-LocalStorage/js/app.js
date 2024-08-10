// Variables
const formulario = document.querySelector('#formulario');
const listaTweets = document.querySelector('#lista-tweets');
let tweets = [];

// Event Listenners
eventListeners();

function eventListeners() {
    formulario.addEventListener('submit', agregarTweet); // Cuando se agregue un nuevo tweet
    document.addEventListener('DOMContentLoaded', () => {
        tweets = JSON.parse(localStorage.getItem('tweets')) || []; // Si lo marca null, asignar vacio
        // console.log(tweets);
        crearHTML();
    });
}

// Funciones
function agregarTweet(e) {
    e.preventDefault();
    
    // Textarea donde se escribe
    const tweet = document.querySelector('#tweet').value;

    if(tweet === '') {
        mostrarError('Un mensaje no puede ir vacío');
        return; // Evitar que se ejecuten más líneas
    }

    const tweetObj = {
        id: Date.now(),
        tweet // key y value iguales
    }
    // Añadir al arreglo de tweets
    tweets = [...tweets, tweetObj];
    crearHTML();

    // Reiniciar el formulario
    formulario.reset();
}

function mostrarError(error) {
    limpiarAlerta();

    const mensajeError = document.createElement('P');
    mensajeError.textContent = error;
    mensajeError.classList.add('error');

    // Insertarlo en HTML
    const contenido = document.querySelector('#contenido');
    contenido.appendChild(mensajeError);

    setTimeout(()=> {
        mensajeError.remove();
    }, 2000);
}

function limpiarAlerta() {
    const alerta = document.querySelector('.error');
    if (alerta) {
        alerta.remove();
    }
}

// Mostrar listado de tweets
function crearHTML() {
    limpiarHTML();

    if(tweets.length > 0) {
        tweets.forEach( tweet => {
            // Agregar botón de eliminar
            const btnEliminar = document.createElement('a');
            btnEliminar.classList.add('borrar-tweet');
            btnEliminar.innerText = 'X';
            // Función de eliminar
            btnEliminar.onclick = () => {
                borrarTweet(tweet.id);
            }

            const li = document.createElement('li');
            li.innerText = tweet.tweet;
            li.appendChild(btnEliminar);
            listaTweets.appendChild(li);
        });
    }

    sincronizarStorage();
}

function sincronizarStorage() {
    localStorage.setItem('tweets', JSON.stringify(tweets));
}

function borrarTweet(id) {
    tweets = tweets.filter( tweet => tweet.id !== id);
    crearHTML();
}

function limpiarHTML() {
    while(listaTweets.firstChild) {
        listaTweets.removeChild(listaTweets.firstChild);
    }
}