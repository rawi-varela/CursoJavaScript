import {obtenerCliente, editarCliente } from './API.js';
import { mostrarAlerta , validar} from './funciones.js';

(function() {
    const nombreInput = document.querySelector('#nombre');
    const emailInput = document.querySelector('#email');
    const telefonoInput = document.querySelector('#telefono');
    const empresaInput = document.querySelector('#empresa');
    const idInput = document.querySelector('#id');

    document.addEventListener('DOMContentLoaded', async () => {
        const parametrosURL = new URLSearchParams(window.location.search);
        const idCliente = parametrosURL.get('id'); // se quitó parseInt
        
        const cliente = await obtenerCliente(idCliente);
        mostrarCliente(cliente);
       
        // Submit al formulario
        const formulario = document.querySelector('#formulario');
        formulario.addEventListener('submit', validarCliente);
       
    });

    function mostrarCliente(cliente) {
        const { nombre, empresa, email, telefono, id} = cliente;

        nombreInput.value = nombre;
        empresaInput.value = empresa;
        emailInput.value = email;
        telefonoInput.value = telefono;
        idInput.value = id;
    }


    async function validarCliente(e) {
        e.preventDefault();
        const cliente = {
            nombre: nombreInput.value, 
            email: emailInput.value, 
            telefono: telefonoInput.value,
            empresa: empresaInput.value,
            id: idInput.value // se quitó parseInt
        }

        if( validar(cliente) ) {
            mostrarAlerta('Todos los campos son obligatorios');
            return;
        }

        editarCliente(cliente);
    }

})();