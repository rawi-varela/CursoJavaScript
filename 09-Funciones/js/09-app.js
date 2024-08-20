// Añadir funciones en un Objeto 
// Métodos de propiedad - Son funciones con una sintaxis que al utilizarla es lo mismo que un método, 
// llegan a ser muy comunes porque es un objeto grande que contiene todas las funciones


const reproductor = {
    reproducir: function(id) {
        console.log(`Reproduciendo canción id ${id}`);
    },
    pausar: function() {
        console.log('pausando...');
    },
    borrar: function(id) {
        console.log(`Borrando canción con id: ${id}`);
    },
    crearPlaylist: function(nombre) {
        console.log(`Creando la Playlist ${nombre}`);
    },
    reproducirPlaylist: function(nombre) {
        console.log(`Reproduciendo la Playlist ${nombre}`);
    }
}
reproductor.reproducir(30);
reproductor.pausar();

// Tambien los métodos pueden declararse por fuera
// reproductor.borrar = function(id) {
    
// }
reproductor.borrar(20);
reproductor.crearPlaylist('Heavy Metal');
reproductor.reproducirPlaylist('Heavy Metal');


// Si se escribe "reproductor" en la consola se pueden ver todas las propiedades/funciones, es una ventaja de estos "métodos de propiedad"
