import { nuevoCliente } from './API.js';
import { mostrarAlerta, validar } from './funciones.js';

(function() {
    const formulario = document.querySelector('#formulario');
    formulario.addEventListener('submit', validarCliente);

    function validarCliente(e) {
        e.preventDefault();

        const nombre = document.querySelector('#nombre').value.trim();
        const email = document.querySelector('#email').value.trim();
        const telefono = document.querySelector('#telefono').value.trim();
        const empresa = document.querySelector('#empresa').value.trim();

        // Crear un objeto para usar Object.values(obj).every
        const cliente = {
            nombre, 
            email, 
            telefono,
            empresa
        }

        if( validar(cliente) ) {
            mostrarAlerta('Todos los campos son obligatorios');
            return;
        }
        nuevoCliente(cliente);
        // window.location.href = 'index.html';
    }

})();