 // Seleccionar elementos por su clase getElementsByClassName
 // Cada vez menos común pero todavía se usa

const header = document.getElementsByClassName('header');
console.log(header);


const hero = document.getElementsByClassName('hero');
console.log(hero);

// Si las clases existen más de 1 vez
const contenedores = document.getElementsByClassName('contenedor');
console.log(contenedores);


// Si una clase no existe
// No retorna nada, antes retornaba el HTMLCollection vacío
const noExiste = documento.getElementsByClassName('no-existe');
console.log(noExiste);

