document.addEventListener('DOMContentLoaded', function() {

    const email = {
        email: '',
        cc: '',
        asunto: '',
        mensaje: ''
    }
     
    // Seleccionar los elementos de la interfaz
    const inputEmail = document.querySelector('#email');
    const inputAsunto = document.querySelector('#asunto');
    const inputMensaje = document.querySelector('#mensaje');
    const inputCC = document.querySelector('#cc');

    const formulario = document.querySelector('#formulario');
    const btnSubmit = document.querySelector('#formulario button[type="submit"]');
    const btnReset = document.querySelector('#formulario button[type="reset"]');
    const spinner = document.querySelector('#spinner');

    // Asignar eventos
    inputEmail.addEventListener('input', validar);
    inputAsunto.addEventListener('input', validar);
    inputMensaje.addEventListener('input', validar);
    inputCC.addEventListener('input', validar);

    formulario.addEventListener('submit', enviarEmial);

    btnReset.addEventListener('click', function(e) {
        e.preventDefault();
        resetFormulario();
    });

    function enviarEmial(e) {
        e.preventDefault();

        spinner.classList.add('flex');
        spinner.classList.remove('hidden');

        setTimeout(() => {
            spinner.classList.remove('flex');
            spinner.classList.add('hidden');

            resetFormulario();

            // Crear alert de éxito
            const alerExito = document.createElement('P');
            alerExito.classList.add('bg-green-500', 'text-white', 'p-2', 'text-center', 'rounded-lg', 'mt-10', 'font-bold', 'text-sm', 'uppercase');
            alerExito.textContent = 'Mensaje enviado correctamente';
            formulario.appendChild(alerExito);

            setTimeout(()=> {
                alerExito.remove();
            }, 2000);
            
        }, 2000);
    }


    function validar(e) {
        if(e.target.value.trim() === '' && e.target.id !== 'cc') {
            mostrarAlerta(`El ${e.target.id} es obligatorio`, e.target.parentElement);
            email[e.target.name] = ''; // Limpiarlo del Obj si lo borran del input
            comprobarEmail();
            return; // Detiene la función para evitar else
        } 
        if(e.target.id === 'email' && !validarEmail(e.target.value)) { // El trim() está arriba
            mostrarAlerta('El email no es válido', e.target.parentElement);
            email[e.target.name] = '';
            comprobarEmail();
            return;
        }
        if(e.target.value.trim() !== '' && e.target.id === 'cc' && !validarEmail(e.target.value.trim())) {
            mostrarAlerta('El email de CC no es válido', e.target.parentElement);
            email[e.target.name] = e.target.value.trim().toLowerCase(); // Necesario por comprobarEmail()
            comprobarEmail();
            return;
        }

        limpiarAlerta(e.target.parentElement);

        // Asignar los valores
        email[e.target.name] = e.target.value.trim().toLowerCase();
       
        // Comprobar el Obj de email
        comprobarEmail();
    }

    function mostrarAlerta(mensaje, referencia) {
        limpiarAlerta(referencia);
         
        // Generar alerta en HTML
        const error = document.createElement('P');
        error.textContent = mensaje;
        error.classList.add('bg-red-600', 'text-white', 'p-2', 'text-center');

        referencia.appendChild(error);
    }

    function limpiarAlerta(referencia) {
        const alerta = referencia.querySelector('.bg-red-600');
        if(alerta) {
            alerta.remove();
        }
    }

    function validarEmail(email) {
        const regex =  /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;
        const resultado = regex.test(email); // true o false
        return resultado;
    }

    function comprobarEmail() {
        // console.log(email);

        // Toma el Obj de email y crea un array con esos valores, al ser un array se puede usar includes()
        // if(Object.values(email).includes('')) { 
        //     btnSubmit.classList.add('opacity-50');
        //     btnSubmit.disabled = true;
        //     return;
        // }
        // btnSubmit.classList.remove('opacity-50');
        // btnSubmit.disabled = false;

        const { email: userEmail, asunto, mensaje, cc } = email; //userEmail para evitar conflicto de nombre
        const isFormValid = userEmail !== '' &&
                            asunto !== '' && 
                            mensaje !== '' && 
                            (cc === '' || validarEmail(cc));

        btnSubmit.disabled = !isFormValid;
        btnSubmit.classList.toggle('opacity-50', !isFormValid);
    }

    function resetFormulario() {
        // Reiniciar el Obj
        email.email = '';
        email.asunto = '';
        email.mensaje = '';
        email.cc = '';

        formulario.reset();
        comprobarEmail();
    }

    
     

 
});



 