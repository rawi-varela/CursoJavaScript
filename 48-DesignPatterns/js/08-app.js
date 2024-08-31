// Mediator
// Un intermediario es un design pattern que se comunica con distintos objetos a la vez, define objetos ya localizados para objetivos especificos

function Vendedor (nombre) {
    this.nombre = nombre;
    this.sala = null;
}
Vendedor.prototype = {
    oferta: (articulo, precio) => {
        console.log(`Tenemos el siguiente articulo ${articulo}, iniciamos con ${precio}`);
    },
    vendido: comprador => {
        console.log(`Vendido a ${comprador}`);
    }
}

function Comprador(nombre) {
    this.nombre = nombre;
    this.sala = null;
}
Comprador.prototype = {
    oferta: (cantidad, comprador) => {
        console.log(`${comprador.nombre} : ${cantidad}`);
    }
}

function Subasta() {
    let compradores = {};

    return {
        registrar: usuario =>  {
            compradores[usuario.nombre] = usuario;
            usuario.sala = this; // asigna la instancia de Subasta actual al atributo sala del objeto usuario.
        }
    }
}

// Crear Objetos
const juan = new Comprador('Juan');
const pablo = new Comprador('pablo');
const vendedor = new Vendedor('Vendedor de Autos...');
const subasta = new Subasta();

// Tienes que registralos
subasta.registrar(juan);
subasta.registrar(pablo);
subasta.registrar(vendedor);

vendedor.oferta('Mustang 1966', 300);

juan.oferta(300, juan);
pablo.oferta(400, pablo); 
juan.oferta(500, juan);
pablo.oferta(700, pablo); 
vendedor.vendido('Pablo');

// Aquí Subasta es el intermediario

