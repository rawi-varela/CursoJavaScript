let DB; // Para obtener referencia global de la BD de Indexed
// Selectores
const pacienteInput = document.querySelector('#paciente');
const propietarioInput = document.querySelector('#propietario');
const emailInput = document.querySelector('#email');
const fechaInput = document.querySelector('#fecha');
const sintomasInput = document.querySelector('#sintomas');

const formulario = document.querySelector('#formulario-cita');
const formularioInput = document.querySelector('#formulario-cita input[type="submit"]'); // Para cambiar su value Reg/Act
const contenedorCitas = document.querySelector('#citas');

window.onload = () => {
    crearDB();
}
// Eventos
pacienteInput.addEventListener('change', datosCita);
propietarioInput.addEventListener('change', datosCita);
emailInput.addEventListener('change', datosCita);
fechaInput.addEventListener('change', datosCita);
sintomasInput.addEventListener('change', datosCita);

formulario.addEventListener('submit', submitCita);

let editando = false; // Para validar si es un new registro o se está editando uno que existe

// Objeto de Cita
const citaObj = {
    id: generarId(), //Para dalr un ID único
    paciente: '',
    propietario: '',
    email: '',
    fecha: '',
    sintomas: ''
}

class Notificacion {
    constructor({texto, tipo}) {
        this.texto = texto;
        this.tipo = tipo;
        // Llamar la función al instanciar
        this.mostrar();
    }

    mostrar() {
        // Crear la notificacion
        const alerta = document.createElement('DIV');
        alerta.classList.add('text-center', 'w-full', 'p-3', 'text-white', 'my-5', 'alert', 'uppercase', 'font-bold', 'text-sm');

        // Eliminar alertas duplicadas Forma vieja
        // const alertaPrevia = document.querySelector('.alert');
        // if(alertaPrevia) {
        //     alertaPrevia.remove();
        // }
        
        // Forma nueva "Optional Chaining" Si existe el elemento entonces
        const alertaPrevia = document.querySelector('.alert');
        alertaPrevia?.remove(); 
        
        // Si es de tipo error, agrega una clase
        this.tipo === 'error' ? alerta.classList.add('bg-red-500') : alerta.classList.add('bg-green-500');

        // Mensaje de error
        alerta.textContent = this.texto;

        // Insertar en el DOM
        formulario.parentElement.insertBefore(alerta, formulario);

        // Quitar después de 3 segundos
        setTimeout(() => {
            alerta.remove();
        }, 3000);
    }
}

class AdminCitas{
    constructor() {
        this.citas = [];
    }

    agregar(cita) {
        this.citas = [...this.citas, cita];
        this.mostrar();
    }

    editar(citaActualizada) {
        // SI, le pasamos la citaActualizada sino retornamos la cita que ya tenemos
        this.citas = this.citas.map( cita => cita.id === citaActualizada.id ? citaActualizada : cita);
        this.mostrar();
    }

    eliminar(id) {
        const transaction = DB.transaction(['citas'], 'readwrite');
        const objectStore = transaction.objectStore('citas');

        objectStore.delete(id);

        transaction.oncomplete = () => {
            console.log(`Cita ${id} eliminada`);
            this.mostrar();
        }

        transaction.onerror = () => {
            console.log('Error al eliminar');
        }
        // this.citas = this.citas.filter( cita => cita.id !== id);
        // this.mostrar();
    }

    mostrar() {
        // Limpiar el HTML
        while(contenedorCitas.firstChild) {
            contenedorCitas.removeChild(contenedorCitas.firstChild);
        }

        // // Si no hay citas
        // if(this.citas.length === 0) {
        //     contenedorCitas.innerHTML = '<p class="text-xl mt-5 mb-10 text-center">No Hay Pacientes</p>';
        //     return;
        // }
        

        // Leer el contenido de la BD
        const objectStore = DB.transaction('citas').objectStore('citas'); // Obtenemos los registros

        // Si no hay citas
        const total = objectStore.count();
        total.onsuccess = function() {
            if(total.result === 0) {
                contenedorCitas.innerHTML = '<p class="text-xl mt-5 mb-10 text-center">No Hay Pacientes</p>';
                return;
            }
        }

        // Con openCursor iteramos sobre ellos
        objectStore.openCursor().onsuccess = function(e) {
            const cursor = e.target.result;

            if(cursor) {
                const { paciente, propietario, email, fecha, sintomas, id } = cursor.value;
                const divCita = document.createElement('div');
                divCita.classList.add('mx-5', 'my-10', 'bg-white', 'shadow-md', 'px-5', 'py-10' ,'rounded-xl', 'p-3');
            
                const pacienteParrafo = document.createElement('p');
                pacienteParrafo.classList.add('font-normal', 'mb-3', 'text-gray-700', 'normal-case');
                pacienteParrafo.innerHTML = `<span class="font-bold uppercase">Paciente: </span> ${paciente}`;
            
                const propietarioParrafo = document.createElement('p');
                propietarioParrafo.classList.add('font-normal', 'mb-3', 'text-gray-700', 'normal-case');
                propietarioParrafo.innerHTML = `<span class="font-bold uppercase">Propietario: </span> ${propietario}`;
            
                const emailParrafo = document.createElement('p');
                emailParrafo.classList.add('font-normal', 'mb-3', 'text-gray-700', 'normal-case');
                emailParrafo.innerHTML = `<span class="font-bold uppercase">E-mail: </span> ${email}`;
            
                const fechaParrafo = document.createElement('p');
                fechaParrafo.classList.add('font-normal', 'mb-3', 'text-gray-700', 'normal-case');
                fechaParrafo.innerHTML = `<span class="font-bold uppercase">Fecha: </span> ${fecha}`;
            
                const sintomasParrafo = document.createElement('p');
                sintomasParrafo.classList.add('font-normal', 'mb-3', 'text-gray-700', 'normal-case');
                sintomasParrafo.innerHTML = `<span class="font-bold uppercase">Síntomas: </span> ${sintomas}`;
            
                // Botones Eliminar y Editar
                const btnEditar = document.createElement('button');
                btnEditar.classList.add('py-2', 'px-10', 'bg-indigo-600', 'hover:bg-indigo-700', 'text-white', 'font-bold', 'uppercase', 'rounded-lg', 'flex', 'items-center', 'gap-2');
                btnEditar.innerHTML = 'Editar <svg fill="none" class="h-5 w-5" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="currentColor"><path d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"></path></svg>';
                // const clone = {...cita};
                const clone = structuredClone(cursor.value); //Toma una copia completa de un Objecto
                btnEditar.onclick = () => cargarEdicion(clone);

                const btnEliminar = document.createElement('button');
                btnEliminar.classList.add('py-2', 'px-10', 'bg-red-600', 'hover:bg-red-700', 'text-white', 'font-bold', 'uppercase', 'rounded-lg', 'flex', 'items-center', 'gap-2');
                btnEliminar.innerHTML = 'Eliminar <svg fill="none" class="h-5 w-5" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="currentColor"><path d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>';
                btnEliminar.onclick = () => eliminar(id);

                const contenedorBotones = document.createElement('DIV');
                contenedorBotones.classList.add('flex', 'justify-between', 'mt-10');

                contenedorBotones.appendChild(btnEditar);
                contenedorBotones.appendChild(btnEliminar);

                // Agregar al HTML
                divCita.appendChild(pacienteParrafo);
                divCita.appendChild(propietarioParrafo);
                divCita.appendChild(emailParrafo);
                divCita.appendChild(fechaParrafo);
                divCita.appendChild(sintomasParrafo);
                divCita.appendChild(contenedorBotones);

                contenedorCitas.appendChild(divCita);

                // Ve al siguiente
                cursor.continue();
            }
        }

        // Generar las citas
        // this.citas.forEach(cita => {
        //     const divCita = document.createElement('div');
        //     divCita.classList.add('mx-5', 'my-10', 'bg-white', 'shadow-md', 'px-5', 'py-10' ,'rounded-xl', 'p-3');
        
        //     const paciente = document.createElement('p');
        //     paciente.classList.add('font-normal', 'mb-3', 'text-gray-700', 'normal-case');
        //     paciente.innerHTML = `<span class="font-bold uppercase">Paciente: </span> ${cita.paciente}`;
        
        //     const propietario = document.createElement('p');
        //     propietario.classList.add('font-normal', 'mb-3', 'text-gray-700', 'normal-case');
        //     propietario.innerHTML = `<span class="font-bold uppercase">Propietario: </span> ${cita.propietario}`;
        
        //     const email = document.createElement('p');
        //     email.classList.add('font-normal', 'mb-3', 'text-gray-700', 'normal-case');
        //     email.innerHTML = `<span class="font-bold uppercase">E-mail: </span> ${cita.email}`;
        
        //     const fecha = document.createElement('p');
        //     fecha.classList.add('font-normal', 'mb-3', 'text-gray-700', 'normal-case');
        //     fecha.innerHTML = `<span class="font-bold uppercase">Fecha: </span> ${cita.fecha}`;
        
        //     const sintomas = document.createElement('p');
        //     sintomas.classList.add('font-normal', 'mb-3', 'text-gray-700', 'normal-case');
        //     sintomas.innerHTML = `<span class="font-bold uppercase">Síntomas: </span> ${cita.sintomas}`;
        
        //     // Botones Eliminar y Editar
        //     const btnEditar = document.createElement('button');
        //     btnEditar.classList.add('py-2', 'px-10', 'bg-indigo-600', 'hover:bg-indigo-700', 'text-white', 'font-bold', 'uppercase', 'rounded-lg', 'flex', 'items-center', 'gap-2');
        //     btnEditar.innerHTML = 'Editar <svg fill="none" class="h-5 w-5" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="currentColor"><path d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"></path></svg>';
        //     // const clone = {...cita};
        //     const clone = structuredClone(cita); //Toma una copia completa de un Objecto
        //     btnEditar.onclick = () => cargarEdicion(clone);

        //     const btnEliminar = document.createElement('button');
        //     btnEliminar.classList.add('py-2', 'px-10', 'bg-red-600', 'hover:bg-red-700', 'text-white', 'font-bold', 'uppercase', 'rounded-lg', 'flex', 'items-center', 'gap-2');
        //     btnEliminar.innerHTML = 'Eliminar <svg fill="none" class="h-5 w-5" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="currentColor"><path d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>';
        //     btnEliminar.onclick = () => this.eliminar(cita.id);

        //     const contenedorBotones = document.createElement('DIV');
        //     contenedorBotones.classList.add('flex', 'justify-between', 'mt-10');

        //     contenedorBotones.appendChild(btnEditar);
        //     contenedorBotones.appendChild(btnEliminar);

        //     // Agregar al HTML
        //     divCita.appendChild(paciente);
        //     divCita.appendChild(propietario);
        //     divCita.appendChild(email);
        //     divCita.appendChild(fecha);
        //     divCita.appendChild(sintomas);
        //     divCita.appendChild(contenedorBotones);
        //     contenedorCitas.appendChild(divCita);
        // });    
    }    
}

function datosCita(e) {
    citaObj[e.target.name] = e.target.value;
}

const citas = new AdminCitas();

function submitCita(e) {
    e.preventDefault();

    // Object.value extrae todos los values del objeto como arreglo, por eso permite usar ArrayMethod (includes/some)
    if( Object.values(citaObj).some(valor => valor.trim() === '')) { 
        // Se usa de esta manera cuando solo necesitas ejecutar una acción al instante y no necesitas acceder a la instancia después
        new Notificacion({
            texto: 'Todos los campos son obligatorios',
            tipo: 'error'
        })
        return;
    }

    if(editando) {
        // Usar Spread Operator para pasar una copia, sino se pasaría la referencia del objeto
        // Causando problemas cuando las citas estén ya guardadas
        // citas.editar({...citaObj}); // El video todavía lo tiene 

        // Insertar en IndexedDB
        const transaction = DB.transaction(['citas'], 'readwrite');
        // Habilitar el objectStore
        const objectStore = transaction.objectStore('citas');
        // Insertar en la BD
        objectStore.put(citaObj);

        transaction.oncomplete = () => {
            console.log('Cita Actualizada');
            new Notificacion( {
                texto: 'Actualizado Correctamente',
                tipo: 'exito'
            });
            citas.mostrar(); // Actualizar la UI
        }
        transaction.onerror = () => {
            console.log('Hubo un error al actualizar');
        }
    } else {
        citaObj.id = generarId(); // Generar un nuevo ID cada vez
        citas.agregar({...citaObj});

        // Insertar en IndexedDB
        const transaction = DB.transaction(['citas'], 'readwrite');
        // Habilitar el objectStore
        const objectStore = transaction.objectStore('citas');
        // Insertar en la BD
        objectStore.add(citaObj);

        transaction.oncomplete = function() {
            console.log('Cita Agregada');

            new Notificacion( {
                texto: 'Paciente Registrado',
                tipo: 'exito'
            });
            citas.mostrar(); // Actualizar la UI
        }
        transaction.onerror = (event) => {
            console.log('Hubo un error al agregar:', event.target.error);
        };
        
    }

    formulario.reset();
    reiniciarObjetoCita();    
    formularioInput.value = 'Registrar Paciente';
    editando = false;
}

function reiniciarObjetoCita() {
    // // Reiniciar el Object
    // citaObj.id = generarId();
    // citaObj.paciente = '';
    // citaObjpropietario = '';
    // citaObj.email = '';
    // citaObj.fecha = '';
    // citaObj.sintomas = '';

    // Otra forma
    Object.assign(citaObj, {
        id: generarId(),
        paciente: '',
        propietario: '',
        email: '',
        fecha: '',
        sintomas: ''
    });
}
function generarId() {
    return Math.random().toString(36).substring(2) + Date.now();
}

function cargarEdicion(cita) {
    Object.assign(citaObj, cita);

    pacienteInput.value = cita.paciente; 
    propietarioInput.value = cita.propietario; 
    emailInput.value = cita.email; 
    fechaInput.value = cita.fecha; 
    sintomasInput.value = cita.sintomas;

    editando = true;

    formularioInput.value = 'Guardar Cambios';
}

function eliminar(id) {
    const transaction = DB.transaction(['citas'], 'readwrite');
    const objectStore = transaction.objectStore('citas');
    
   objectStore.delete(id);

    transaction.oncomplete = () => {
        console.log(`Cita  ${id} fue eliminado`);
        citas.mostrar();
    }

    transaction.onerror = () => {
        console.log('Hubo un error al eliminar');
    }
}

function crearDB() {
    // Crear la BD versión 1.0
    const crearDB = window.indexedDB.open('citas', 1);

    // Si hay un error
    crearDB.onerror = function() {
        console.log('Error al crear la BD');
    }

    // Si todo sale bien
    crearDB.onsuccess = function() {
        console.log('BD creada correctamente');

        DB = crearDB.result;
        // Mostrar citas al cargar (Pero IndexedDB ya está listo)
        citas.mostrar();
    }

    // Definir el esquema
    crearDB.onupgradeneeded = function(e) {
        // Instancia de la BD igual a DB = crearDB.result;
        const db = e.target.result;

        const objectStore = db.createObjectStore('citas', {
            keyPath: 'id', //Indice
            autoIncrement: true
        });

        // Definir las columnas
        objectStore.createIndex('paciente', 'paciente', { unique: false });
        objectStore.createIndex('propietario', 'propietario', { unique: false });
        objectStore.createIndex('email', 'email', { unique: true });
        objectStore.createIndex('fecha', 'fecha', { unique: false });
        objectStore.createIndex('sintomas', 'sintomas', { unique: false });
        objectStore.createIndex('id', 'id', { unique: true });

        console.log('BD Creada y Lista');
    }
    
}



