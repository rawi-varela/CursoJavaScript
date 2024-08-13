// Los prototypes están relacionado a Objectos, todos los objetos tienen un Prototype

// Object Literal
const cliente = {
    nombre: 'juan',
    saldo: 400
}

console.log(cliente);
console.log(typeof cliente);


// Object Constructor
function Cliente(nombre, saldo) {
    this.nombre = nombre;
    this.saldo = saldo;
}

const juan = new Cliente('Juan', 500);
console.log(juan);

// Se usará mucho el Object Constructor porque es más dinámico y reutilizable

