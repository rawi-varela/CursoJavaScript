// 
const criptomonedasSelect = document.querySelector('#criptomonedas');
const monedaSelect = document.querySelector('#moneda');
const formulario = document.querySelector('#formulario');
const resultado = document.querySelector('#resultado');

const objBusqueda = {
    moneda: '',
    criptomoneda: ''
};

// El Promise resuleve cuando se han cargado las criptomonedas correctamente
// En este caso es un poco innecesaria, ya que lo único que hace es resolver, no hay
// lógica adicional o alguna operación asíncrona real
const obtenerCriptomonedas = criptomonedas => new Promise( resolve => {
    resolve(criptomonedas);
});


document.addEventListener('DOMContentLoaded', () => {
    consultarCriptomonedas();

    formulario.addEventListener('submit', submitFormulario);
    criptomonedasSelect.addEventListener('change', leerValor);
    monedaSelect.addEventListener('change', leerValor);
});

// Consulta la API para llenar el Select de Criptomonedas
function consultarCriptomonedas() {

    // Traer las 10 más relevantes
    const url = 'https://min-api.cryptocompare.com/data/top/mktcapfull?limit=10&tsym=USD';

    fetch(url)
        .then( respuesta => respuesta.json()) 
        .then( resultado => obtenerCriptomonedas(resultado.Data)) // solo resultado.Data funciona
        .then( criptomonedas  =>  selectCriptomonedas(criptomonedas) )
        .catch( error => console.log(error));
}

function selectCriptomonedas(criptomonedas) {

    // Conocwr el tiempo de ejecución
    const inicio = performance.now();

    // criptomonedas.forEach( cripto => {
    //     const { FullName, Name } = cripto.CoinInfo;
    //     const option = document.createElement('option');
    //     option.value = Name;
    //     option.textContent = FullName;
        
    //     criptomonedasSelect.appendChild(option);
    // });

    for(let i = 0; i < criptomonedas.length; i++) {
        const { FullName, Name } = criptomonedas[i].CoinInfo;
        const option = document.createElement('option');
        option.value = Name;
        option.textContent = FullName;
        
        criptomonedasSelect.appendChild(option);
    }

    const fin = performance.now();

    console.log('inicio', inicio);
    console.log('fin' ,fin);

    console.log(fin - inicio);
}

function leerValor(e) {
    objBusqueda[e.target.name] = e.target.value;
}

function submitFormulario(e) {
    e.preventDefault();

    // Extraer los valores
    const { moneda, criptomoneda} = objBusqueda;

    if(moneda.trim() === '' || criptomoneda.trim() === '') {
        mostrarAlerta('Ambos campos son obligatorios');
        return;
    }

    consultarAPI();
}

function mostrarAlerta(mensaje) {
    const existeAlerta = document.querySelector('.error');
    if(!existeAlerta) {
        const divMensaje = document.createElement('div');
        divMensaje.classList.add('error');
        
        divMensaje.textContent = mensaje;

        formulario.appendChild(divMensaje);

        setTimeout( () => {
            divMensaje.remove();
        }, 3000);
    }
}

function consultarAPI() {
    const { moneda, criptomoneda } = objBusqueda;

    const url = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${criptomoneda}&tsyms=${moneda}`;

    mostrarSpinner();

    fetch(url)  
        .then(respuesta => respuesta.json())
        .then(cotizacion => {
            // Se pasan [][] debido a que el "key" que devuelve la API cambia
            mostrarCotizacionHTML(cotizacion.DISPLAY[criptomoneda][moneda]);
    });
}

function mostrarCotizacionHTML(cotizacion) {
    limpiarHTML();

    const  { PRICE, HIGHDAY, LOWDAY, CHANGEPCT24HOUR, LASTUPDATE } = cotizacion;

    const precio = document.createElement('p');
    precio.classList.add('precio');
    precio.innerHTML = `El Precio es: <span> ${PRICE} </span>`;

    const precioAlto = document.createElement('p');
    precioAlto.innerHTML = `<p>Precio más alto del día: <span>${HIGHDAY}</span> </p>`;

    const precioBajo = document.createElement('p');
    precioBajo.innerHTML = `<p>Precio más bajo del día: <span>${LOWDAY}</span> </p>`;

    const ultimasHoras = document.createElement('p');
    ultimasHoras.innerHTML = `<p>Variación últimas 24 horas: <span>${CHANGEPCT24HOUR}%</span></p>`;

    const ultimaActualizacion = document.createElement('p');
    ultimaActualizacion.innerHTML = `<p>Última Actualización: <span>${LASTUPDATE}</span></p>`;

    // debugger;
    // En vez de usar console.log, para ver que funciones y valores están disponibles

    resultado.appendChild(precio);
    resultado.appendChild(precioAlto);
    resultado.appendChild(precioBajo);
    resultado.appendChild(ultimasHoras);
    resultado.appendChild(ultimaActualizacion);
}


function limpiarHTML() {
    while(resultado.firstChild) {
        resultado.removeChild(resultado.firstChild);
    }
}

function mostrarSpinner() {
    limpiarHTML();

    const spinner = document.createElement('DIV');
    spinner.classList.add('spinner');

    spinner.innerHTML = `
        <div class="bounce1"></div>
        <div class="bounce2"></div>
        <div class="bounce3"></div>
    `;

    resultado.appendChild(spinner);
}

// El Spinner se limpia solo del div.resultado por la función mostrarCotizacionHTML()


// Ofuscar el código, de preferencia cuando sea poco
// Validar forms en cliente y servidor
// Lo más usado para autenticación de users es JWT o Auth0
// Usar snk.io para verificar vulnerabilidades al trabajar con dependencias
// Hashear info sensible con la librería bcrypt
