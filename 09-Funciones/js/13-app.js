// => en "Métodos de propiedad"


const reproductor = {
    cancion: '',
    reproducir: id => console.log(`Reproduciendo canción id ${id}`),
    pausar: () => console.log('pausando...'),
    borrar: id => console.log(`Borrando canción con id: ${id}`),
    crearPlaylist: nombre => console.log(`Creando la Playlist ${nombre}`),
    reproducirPlaylist: (nombre, edad) => console.log(`Reproduciendo la Playlist ${nombre}`),

    // set / get son muy utilizados
    set nuevaCancion(cancion) {
        this.cancion = cancion;
        console.log(`Añadiendo ${cancion}`);
    },
    get obtenerCancion() {
        console.log(`${this.cancion}`);
    }
    // Aquí, this dentro del set y get se refiere al objeto reproductor. It's OK. Si usara this en las anteriores estaría mal

}
// Evita usar this dentro de funciones flecha si necesitas referenciar el objeto que las contiene, a menos que el comportamiento deseado sea heredar this del contexto exterior.

reproductor.nuevaCancion = 'Wake Up';
reproductor.obtenerCancion;


reproductor.reproducir(30);
reproductor.pausar();
reproductor.borrar(2);
reproductor.crearPlaylist('playa');


//NOTA
//En arrow functions, el valor de "this" es enlazado al contexto del objeto que lo contiene. En otras palabras, el "this" en una arrow function no se puede reasignar.

//el arrow function al momento de insertar el this hace referencia a la ventana global (window) es por ello que no hace referencia directa a la instancia del objeto