// Carrito de compras

// Variables
const carrito = document.querySelector('#carrito');
const contenedorCarrito = document.querySelector('#lista-carrito tbody');
const vaciarCarritoBtn = document.querySelector('#vaciar-carrito');
const listaCursos = document.querySelector('#lista-cursos');
const notificacionCarrito = document.querySelector('#notificacion-carrito'); // Para notificacción de cantidad
let articulosCarrito = [];

// Function para registrar todos los eventListener
cargarEventListeners();
function cargarEventListeners() {
    // Cuando agregas un curso "Agregar al Carrito"
    listaCursos.addEventListener('click', agregarCurso);

    // Eliminar cursos del carrito
    carrito.addEventListener('click', eliminarCurso);

    // Vaciar el carrito
    vaciarCarritoBtn.addEventListener('click', () => {
        articulosCarrito = []; // Resetear el arreglo
        limpiarHTML(); // Eliminar todo el HTML
        actualizarNotificacion(); // Resetear notificación
    });
}


// Functions
function agregarCurso(e) {
    e.preventDefault();
    if(e.target.classList.contains('agregar-carrito')) {
        const cursoSeleccionado = e.target.parentElement.parentElement;
        leerDatosCurso(cursoSeleccionado);
    }
}

function actualizarNotificacion() {
    const cantidad = articulosCarrito.length;
    if (cantidad > 0) {
        notificacionCarrito.dataset.cantidadnotificacion = cantidad; //valor del atributo data-cantidadnotificacion = cantidad
        notificacionCarrito.classList.add('notificacion-carrito--visible');
    } else {
        notificacionCarrito.classList.remove('notificacion-carrito--visible');
    }
    // dataset es propiedad del DOM, permite acceder y manipular los atributos de datos personalizados (data attributes) de un elemento
}

// Elimina un curso del carrito
function eliminarCurso(e) {
    if(e.target.classList.contains('borrar-curso')) {
        const cursoId = e.target.getAttribute('data-id');

        // Buscamos el curso en el carrito
        const curso = articulosCarrito.find(curso => curso.id === cursoId);

        // Verificar si la cantidad es mayor a 1
        if(curso.cantidad > 1) {
            curso.cantidad--;
            // return curso; // No necesario porque con .find se obtiene una referencia al objeto que está en el array articulosCarrito
            // Esto significa que curso no es una copia del objeto en articulosCarrito, sino una referencia al mismo objeto en memoria. Cualquier cambio a curso se reflejará automáticamente en articulosCarrito porque ambos apuntan al mismo lugar en memoria.
        } else {
            // Elimina del arreglo de articulosCarrito por el data-id
            articulosCarrito = articulosCarrito.filter( curso  => curso.id !== cursoId);
        }
        carritoHTML(); // Iterar sobre el carrito y mostrar su HTML
    }
}
// // Elimina un curso del carrito
// function eliminarCurso(e) {
//     if(e.target.classList.contains('borrar-curso')) {
//         const cursoId = e.target.getAttribute('data-id');
//         // console.log(e.target);

//         // Elimina del arreglo de articulosCarrito por el data-id
//         articulosCarrito = articulosCarrito.filter( curso  => curso.id !== cursoId);

//         carritoHTML(); // Iterar sobre el carrito y mostrar su HTML
//     }
// }

// Leer el contenido del HTML al que le dimos cick y extraer la info
function leerDatosCurso(curso) {
    // console.log(curso); 

    // Crear un objeto con el contenido del curso actual
    const infoCurso = {
        imagen: curso.querySelector('img').src,
        titulo: curso.querySelector('h4').textContent,
        precio: curso.querySelector('.precio span').textContent,
        id: curso.querySelector('a').getAttribute('data-id'),
        cantidad: 1
    }

    // Revisar si un elemento ya existe en el carrito para sumar cantidad
    const existe = articulosCarrito.some( curso => curso.id === infoCurso.id ); // Si alguno es igual al que tratamos de agregar
    if(existe) {
        // Actualizar cantidad
        const cursos = articulosCarrito.map( curso => {
            if( curso.id === infoCurso.id) {
                curso.cantidad++;
                return curso; // Retorna el objeto actualizado
            } else {
                return curso; // Retorna los objetos que no son los duplicados
            }
        });
        articulosCarrito = [...cursos]; // Agregamos el duplicado
    } else {
        // Agregar elementos al arreglo de carrito
        articulosCarrito = [...articulosCarrito, infoCurso];
    }

    carritoHTML();
}


// Muestra el Carrito de compras en el HTML
function carritoHTML() {

    // Limpiar el HTML
    limpiarHTML();

    // Recorre el carrito y genera el HTML
    articulosCarrito.forEach( curso => {
        const { imagen, titulo, precio, cantidad, id } = curso; // Destructuring
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>
                <img src="${imagen}" width="100">
            </td>
            <td> ${titulo} </td>
            <td> ${precio} </td>
            <td> ${cantidad} </td>
            <td> 
                <a href="#" class="borrar-curso" data-id="${id}" > X </a> 
            </td>
        `;

        // Agregar el HTML del carrito en el tbody
        contenedorCarrito.appendChild(row);
    });
    actualizarNotificacion();
}
 

// Elimina los cursos del tbody
function limpiarHTML() {
    // contenedorCarrito.innerHTML = ''; // Forma lenta

    // Mejor forma, más rápida
    while(contenedorCarrito.firstChild) {
        contenedorCarrito.removeChild(contenedorCarrito.firstChild);
    }
    // Básicamente mientras el contenedor tenga un "hijo" va a eliminar un hijo hasta que ya no tenga
}


