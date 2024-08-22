//callback
// Todavía se utilizan

// Se está descargado un listado de clientes y mientra se descargan se agrega un nuevo cliente, 
// ese nuevo cliente no será parte de la descarga, para eso se utilizan callbacks

const paises = ['Francia', 'España', 'México', 'Inglaterra'];

// callback se refiere a la fuction que se va a ejecutar cuando se llame a nuevoPais
function nuevoPais(pais, callback) {
    setTimeout(() => {
        paises.push(pais);
        callback();
    }, 2000);
}

function mostrarPaises() {
    setTimeout(() => {
        paises.forEach(pais => {
            console.log(pais);
        });
    }, 1000);
}

mostrarPaises();

nuevoPais('Corea', mostrarPaises);

// Se manda a llamar la función

