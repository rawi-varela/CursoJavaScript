// Ejemplo más avanzado

const btnFlotante = document.querySelector('.btn-flotante');
const footer = document.querySelector('footer');

btnFlotante.addEventListener('click', mostrarOcultarFooter);

function mostrarOcultarFooter() {
    footer.classList.toggle('activo'); 
    this.classList.toggle('activo');
    this.textContent = footer.classList.contains('activo') ? "X Cerrar" : "Idioma y Moneda";
}

// contains se usa en nodos del DOM
// includes en arrays y strings


// if( footer.classList.contains('activo') ) {
//     footer.classList.remove('activo');
//     this.classList.remove('activo');
//     this.textContent = 'Idioma y Moneda';
// } else {
//     footer.classList.add('activo');
//     this.classList.add('activo');
//     this.textContent = 'X Cerrar';
// }

// this porque hace referencia a lo que mandó a llamar esa función, el btnFlotante