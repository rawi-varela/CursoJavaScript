// Heredar

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

// Herencia
class Empresa extends Cliente {
    constructor(nombre, saldo, telefono, categoria) {
        super(nombre, saldo); // super va a la class padre y busca los atributos que se pasen aquí  
        this.telefono = telefono;
        this.categoria = categoria;
    }
    // Esto reescribe el método del padre
    static bienvenido() {
        return `Bienvenido a la empresa`;
    }
}

const juan = new Cliente('Juan', 300);
const empresa = new Empresa('Código con Juan', 500, 7441785473, 'Aprendizaje en Línea');
console.log(empresa);
console.log(empresa.mostrarInfo());

console.log(Empresa.bienvenido());
console.log(Cliente.bienvenido());
