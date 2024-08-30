// Hoisting
// Se refiere a cómo funcionas los contextos de ejecución en JS 

// Fase de creación (registra todas las variables/funciones)
// Fase de ejecución (se ejecutan)

// Es la razón de porque Function Exressión no se puede usar antes de declararze

declaration();
function declaration() {
    console.log('Ejecutando Function Declaration');
}

// expression(); // Error
const expression = function() {
    console.log('Ejecutando Function Expression');
}
expression();