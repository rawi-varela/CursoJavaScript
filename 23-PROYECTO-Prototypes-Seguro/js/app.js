
// Constructores
function Seguro(marca, year, tipo) {
    this.marca = marca;
    this.year = year;
    this.tipo = tipo;
}

Seguro.prototype.cotizarSeguro = function() {
    /*
         1 = americano 1.15
         2 = asiatico 1.05
         3 = europeo 1.35
    */
    let cantidad;
    const base = 2000;

    switch(this.marca){
        case '1':
            cantidad = base * 1.15;
            break;
        case '2':
            cantidad = base * 1.05;
            break;
        case '3':
            cantidad = base * 1.35;
            break;
        default:
            break;
    }
    
    // Leer el año
    const diferencia = new Date().getFullYear() - this.year;
    // Cada año de diferencia hay que reducir 3% el valor del seguro
    cantidad -= ((diferencia * 3) * cantidad) / 100;

    /*
         Si el seguro es básico se múltiplica por 30% mas
         Si el seguro es completo 50% mas
    */
   if(this.tipo === 'basico') {
        cantidad *= 1.30;
   } else {
        cantidad *= 1.50;
   }

    // return cantidad;
    // return Math.floor(cantidad * 100) / 100; //Mostrar solo 2 decimales sin redondear
    return cantidad.toFixed(2); // Redondea y convierte a string, usar parseFloat(cantidad.toFixed(2)) para devolverlo a float
}

function UI() {}

// Llenar los options de años
UI.prototype.llenarOptions = () => {
    const max = new Date().getFullYear(), 
            min = max - 20;
    const selectYear = document.querySelector('#year');

    for(let i = max; i > min; i--) {
        let option = document.createElement('option');
        option.value = i;
        option.textContent = i;
        selectYear.appendChild(option);
    }
}

// Mostrar alertas
UI.prototype.mostrarMensaje = (mensaje, tipo) => {
    limpiarAlerta();

    const div = document.createElement('div');

    if(tipo === 'error') {
        div.classList.add('error');
    } else {
        div.classList.add('correcto');
    }

    div.classList.add('mensaje', 'mt-10');
    div.textContent = mensaje;

    const formulario = document.querySelector('#cotizar-seguro');
    formulario.insertBefore(div, document.querySelector('#resultado'));

    setTimeout( () => {
        div.remove();
    }, 2000);
}

UI.prototype.mostrarResultado = (total, seguro) => {
    const { marca, year, tipo} = seguro;
    let textoMarca;

    switch (marca) {
        case '1':
            textoMarca = 'Americano';
            break;
        case '2':
            textoMarca = 'Asiatico';
            break;
        case '3':
            textoMarca = 'Europeo';
            break;
        default:
            break;
    }

    // Crear el resultado
    const div = document.createElement('div');
    div.classList.add('mt-10');

    div.innerHTML = `
        <p class="header">Tu Resumen:</p>
        <p class="font-bold">Marca: <span class="font-normal"> ${textoMarca} </span> </p>
        <p class="font-bold">Año: <span class="font-normal"> ${year} </span> </p>
        <p class="font-bold">Tipo: <span class="font-normal capitalize"> ${tipo} </span> </p>
        <p class="font-bold"> Total: <span class="font-normal"> $ ${total} </span> </p>
    `;

    const resultadoDiv = document.querySelector('#resultado');

    // Mostrar el spinner
    const spinner = document.querySelector('#cargando');
    spinner.style.display = 'block';

    setTimeout(() => {
        spinner.style.display = 'none';
        resultadoDiv.appendChild(div);
    }, 2000);
    
}

// Instanciar UI
const ui = new UI();

document.addEventListener('DOMContentLoaded', () => {
    ui.llenarOptions(); // Llena el select con los años
});


eventListeners();
function eventListeners() {
    const formulario = document.querySelector('#cotizar-seguro');
    formulario.addEventListener('submit', cotizarSeguro);
}

function cotizarSeguro(e) {
    e.preventDefault();
    const marca = document.querySelector('#marca').value;
    const year = document.querySelector('#year').value;
    const tipo = document.querySelector('input[name="tipo"]:checked').value; //RadioButton tienen mismo name, seleccionado

    if(marca === '' || year === '' || tipo === ''){
        ui.mostrarMensaje('Todos los campos son obligatorios', 'error');
        return;
    } 
    ui.mostrarMensaje('Cotizando...', 'exito')

    // Ocultar las cotizaciones previas
    const resultados = document.querySelector('#resultado div');
    if(resultados != null) {
        resultados.remove();
    }

    // Instanciar el seguro
    const seguro = new Seguro(marca, year, tipo);
    const total = seguro.cotizarSeguro(); // Devuelve la cantidad de cotización

    // Utilizar el prototype que va a cotizar
    ui.mostrarResultado(total, seguro);
}

function limpiarAlerta() {
    alerta = document.querySelector('.mensaje');
    if(alerta) {
        alerta.remove();
    }
}