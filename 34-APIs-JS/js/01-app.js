// Notification API

const notificarBtn = document.querySelector('#notificar');

// Pedir permiso de notificación
notificarBtn.addEventListener('click', () => {
    Notification
        .requestPermission()
        .then( resultado => {
            console.log('El resultado es ', resultado);
    })
});


const verNotificacion  = document.querySelector('#verNotificacion');
verNotificacion.addEventListener('click', () => {
    if(Notification.permission === 'granted') {
        const notificacion = new Notification('Esta es la notificación', {
            icon: 'img/ccj.png',
            body: 'Código con Alejandro'
        }); // Object con las propiedades de la notificación

        notificacion.onclick = function() {
            window.open('https://www.youtube.com/watch?v=D9G1VOjN_84')
        }
    }
});




