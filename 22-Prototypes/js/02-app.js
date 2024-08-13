// El Prototype nos permite agregar funciones exclusivas de cliente/empresa 
// De esta forma solo expandiendo el Prototype podríamnos conocer todas las funciones
// Muy útil en un proyecto grande con muchas funciones

function Cliente(nombre, saldo) {
    this.nombre = nombre;
    this.saldo = saldo;
}

const juan = new Cliente('Juan', 500);

function formatearCliente(cliente){
    const {nombre, saldo} = cliente;
    return `El Cliente ${nombre} tiene un saldo de ${saldo}`;
}

console.log(formatearCliente(juan));


function Empresa(nombre, saldo, categoria) {
    this.nombre = nombre;
    this.saldo = saldo;
    this.categoria = categoria;
}

function formatearEmpresa(empresa){
    const {nombre, saldo, categoria} = empresa;
    return `El Cliente ${nombre} tiene un saldo de ${saldo} y pertenece a la categoría: ${categoria}`;
}

const CCJ = new Empresa('Código con Juan', 2000, 'Cursos de Tec');
console.log(formatearEmpresa(CCJ));