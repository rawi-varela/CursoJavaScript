// Mixin Pattern

// Forma de agregar funciones a una clase una vez que ha sido creada

class Persona {
    constructor(nombre, email) {
        this.nombre = nombre;
        this.email = email;
    }
}

class Cliente {
    constructor(nombre, email) {
        this.nombre = nombre;
        this.email = email;
    }
}


// Crear un Objeto con las funciones
const funcionesPersona = {
    mostrarInformacion() {
        console.log(`Nombre Persona: ${this.nombre}, Email: ${this.email}`);
    },
    mostrarNombre() {
        console.log(`Mi Nombre es: ${this.nombre}`);
    }
}

// Añadir el Obj de Funciones con Object.assign, copiar el prototype actual y añadir el Obj
Object.assign(Persona.prototype, funcionesPersona);
Object.assign(Cliente.prototype, funcionesPersona);

const persona = new Persona('Juan', 'correo@correo.com');

console.log(persona);
persona.mostrarInformacion();
persona.mostrarNombre();

const cliente = new Cliente('Cliente', 'cliente@correo.com');
console.log(cliente);
cliente.mostrarInformacion();
cliente.mostrarNombre();

// Parecido a Composition, hacen casi lo mismo, aquí es menos complejo
// Los Mixins son con clases, Composition con funciones
