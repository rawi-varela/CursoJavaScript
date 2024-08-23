// Detectar cuando estamos viendo la página actual
// API VisibilityState
// Por ejemplo si estas viendo un video, pausarlo si se va a otra pestaña

document.addEventListener('visibilitychange', () => {
    // console.log(document.visibilityState);
    if(document.visibilityState === 'visible') {
        console.log('Ejecutar función para reprodcir el video');
    } else {
        console.log('Pausar el video');
    }
});

// Existen muchas otras APIs nuevas, Geolocalización, Fetch API (la más popular, en el siguiente capítulo)
