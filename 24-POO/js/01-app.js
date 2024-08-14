
// Class Declaration
class Cliente {
    constructor(nombre, saldo) {
        this.nombre = nombre;
        this.saldo = saldo;
    }

    mostrarInfo() {
        return `Cliente: ${this.nombre}, tu saldo es de ${this.saldo}`;
    }
    // Las funciones static no requieren instancia
    static bienvenido() {
        return `Bienvenida al cajero`;
    }
}

const juan = new Cliente('Juan', 300);
console.log(juan.mostrarInfo());
console.log(juan);
console.log(Cliente.bienvenido());


// Class Expression (casi no se usa)
const Cliente2 = class {
    constructor(nombre, saldo) {
        this.nombre = nombre;
        this.saldo = saldo;
    }

    mostrarInfo() {
        return `Cliente: ${this.nombre}, tu saldo es de ${this.saldo}`;
    }
}

const juan2 = new Cliente2('Juan', 300);
console.log(juan2.mostrarInfo());
console.log(juan2);

