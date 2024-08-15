// Variables y selectores
const formulario = document.querySelector('#agregar-gasto');
const gastoListado = document.querySelector('#gastos ul');

// Eventos
eventListeners();
function eventListeners() {
    document.addEventListener('DOMContentLoaded', preguntarPresupuesto);;

    formulario.addEventListener('submit', agregarGasto);
}

// Classes
class Presupuesto {
    constructor(presupuesto) {
        this.presupuesto = Number(presupuesto);
        this.restante = Number(presupuesto);
        this.gastos = [];
    }

    nuevoGasto(gasto) {
        this.gastos = [...this.gastos, gasto];
         this.calcularRestante();
    }

    calcularRestante() {
        const gastado = this.gastos.reduce( (total, gasto) => total + gasto.cantidad, 0);
        this.restante = this.presupuesto - gastado;
        // console.log(this.restante);
    }

    eliminarGasto(id) {
        this.gastos = this.gastos.filter( gasto => gasto.id !== id);
        this.calcularRestante();
    }
}

class UI {
    insertarPresupuesto(cantidad){
        // Extrayendo los valores
        const { presupuesto, restante } = cantidad;
        // Asignando al HTML
        document.querySelector('#total').textContent = presupuesto;
        document.querySelector('#restante').textContent = restante;
    }

    deleteAlert() {
        const alert = document.querySelector('.primario .alert-danger') || document.querySelector('.primario .alert-success');
        if(alert) {
            alert.remove();
        }
    }

    showAlert(mensaje, tipo) {
        this.deleteAlert();
        
        const divMensaje = document.createElement('div');
        divMensaje.classList.add('text-center', 'alert');

        if(tipo === 'error') {
            divMensaje.classList.add('alert-danger');
        } else {
            divMensaje.classList.add('alert-success');
        }

        divMensaje.textContent = mensaje; // Mensaje de error
        document.querySelector('.primario').insertBefore(divMensaje, formulario); // Insertar en HTML
        
        setTimeout(() => {
            divMensaje.remove();
        }, 2000);
    }

    mostrarGastos(gastos) {
        this.limpiarHTML();
        
        // Iterar sobre los gastos 
        gastos.forEach(gasto => {
            const {nombre, cantidad, id } = gasto;

            // Crear un LI
            const nuevoGasto = document.createElement('li');
            nuevoGasto.className = 'list-group-item d-flex justify-content-between align-items-center';
            nuevoGasto.dataset.id = id; // Lo agrega como data-id
            // nuevoGasto.setAttribute('data-id', id); // Vieja forma

            // Agregar el HTML del gasto
            nuevoGasto.innerHTML = `
                ${nombre} <span class="badge badge-primary badge-pill">$ ${cantidad}</span>
            `;

            // boton borrar gasto
            const btnBorrar = document.createElement('button');
            btnBorrar.classList.add('btn', 'btn-danger', 'borrar-gasto');
            // btnBorrar.textContent = 'Borrar';
            btnBorrar.innerHTML = 'Borrar &times';
            btnBorrar.onclick = () => {
                eliminarGasto(id);
            }
            nuevoGasto.appendChild(btnBorrar);

            // Insertar al HTML
            gastoListado.appendChild(nuevoGasto);
        });
    }

    limpiarHTML(){
        while (gastoListado.firstChild) {
            gastoListado.firstChild.remove();
            // gastoListado.removeChild(gastoListado.firstChild);
        }
    }

    actualizarRestante(restante){
        document.querySelector('#restante').textContent = restante;
    }
    
    comprobarPresupuesto(presupuestObj) {
        const {presupuesto, restante} = presupuestObj; 

        const restanteDiv = document.querySelector('.restante');

        if( (presupuesto / 4) > restante) {
            restanteDiv.classList.remove('alert-success', 'alert-warning');
            restanteDiv.classList.add('alert-danger');
        } else if( (presupuesto / 2) > restante) {
            restanteDiv.classList.remove('alert-success', 'alert-danger');
            restanteDiv.classList.add('alert-warning');
        } else { // Reembolso
            restanteDiv.classList.remove('alert-danger', 'alert-warning');
            restanteDiv.classList.add('alert-success');
        }

        formulario.querySelector('button[type="submit"]').disabled = false;

        // Si el total es 0 o menor
        if(restante <= 0) {
            ui.showAlert('El presupuesto se ha agotado', 'error');
            formulario.querySelector('button[type="submit"]').disabled = true;
        }
    }
}

// Normalmente se instancia globalmente
const ui = new UI();
let presupuesto;

// Funciones
function preguntarPresupuesto() {
    const presupuestoUsuario = prompt('¿Cuál es tu presupuesto?');

    if(presupuestoUsuario === '' || presupuestoUsuario === null || isNaN(presupuestoUsuario) || presupuestoUsuario <= 0) { //isNaN retorna true si trata de convertir a num y resulta Nan
        window.location.reload();
    }

    // Presupuesto válido
    presupuesto = new Presupuesto(presupuestoUsuario);
    // console.log(presupuesto);

    ui.insertarPresupuesto(presupuesto);
}

 
function agregarGasto(e) {
    e.preventDefault();

    // Leer los datos del form
    const nombre = document.querySelector('#gasto').value;
    const cantidad = Number(document.querySelector('#cantidad').value);

    if(nombre === '' || cantidad === '') {
        ui.showAlert('Todos los campos son obligatorios','error');
        return;
    } else if(cantidad <= 0 || isNaN(cantidad)) {
        ui.showAlert('Cantidad no válida','error');
        return;
    }

    // Generar un Object con el gasto
    const gasto = {nombre, cantidad, id: Date.now()} // Contrario a destructuring
    // Añade nuevo gasto
    presupuesto.nuevoGasto(gasto);
    ui.showAlert('Gasto agregado correctamente');

    // Imprimir los gastos en HTML
    const {gastos, restante} = presupuesto;
    ui.mostrarGastos(gastos);
    // Actualizar en HTML el restante
    ui.actualizarRestante(restante);
    // Actualiar el color
    ui.comprobarPresupuesto(presupuesto);

    formulario.reset(); // Reinciia el form (limpia)
}

function eliminarGasto(id) {
    // Elimina del objeto
    presupuesto.eliminarGasto(id);

    // Elimina los gastos del HTML
    const { gastos, restante } = presupuesto;
    ui.mostrarGastos(gastos); // Actualiza la lista en HTML
    ui.actualizarRestante(restante); // Actualiza el restante en HTML
    ui.comprobarPresupuesto(presupuesto); // Cambia la clase de color
}

