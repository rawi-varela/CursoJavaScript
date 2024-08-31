// Constructor Pattern
// Es como tener una clase principal y heredar de esta

class Persona {
    constructor(nombre, email) {
        this.nombre = nombre;
        this.email = email;
    }
}

class Cliente extends Persona {
    constructor(nombre, email, empresa) {
        super(nombre, email);
        this.empresa = empresa;
    }
}

const cliente = new Cliente('Luis', 'correo@gmail.com', 'tesla');
console.log(cliente);

// En otros lenguajes normalmente se conocen como classes abstractas y no se pueden instanciar, en JS sí
const persona = new Persona('Bicho', 'siuu@gmail.com');
console.log(cliente);