// Heredar Prototype 

function Cliente(nombre, saldo) {
    this.nombre = nombre;
    this.saldo = saldo;
}

// Esta función/método es exclusivo de Cliente
Cliente.prototype.tipoCliente = function() {  // No usar () => por el tema de this
    let tipo;

    if(this.saldo > 10000) {
        tipo = 'Gold';
    } else if(this.saldo > 5000) {
        tipo = 'Planitum';
    } else {
        tipo = 'normal';
    }
    return tipo;
} 

Cliente.prototype.nombreClienteSaldo = function() {
    return `Nombre: ${this.nombre}, Saldo: ${this.saldo}, Tipo Cliente: ${this.tipoCliente()}`;
}

Cliente.prototype.retiraSaldo = function(retira) {
    this.saldo -= retira;
}




function Persona(nombre, saldo, telefono) {
    Cliente.call(this, nombre, saldo); // Heredar nombre y saldo del constructor Cliente
    this.saldo = telefono;
}

// Heredar las funciones (debe ser antes de instanciar)
Persona.prototype = Object.create(Cliente.prototype);
// Como ya no aparece el constructor:
Persona.prototype.constructor = Persona;

// Instanciarlo
const juan = new Persona('Juan', 5000, 7441573902)
console.log(juan)
console.log(juan.nombreClienteSaldo());
