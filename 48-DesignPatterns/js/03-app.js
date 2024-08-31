// Singleton
// No permite crear mpultiples instancias de una misma clase

let instancia = null;

class Persona {
    constructor(nombre, email) {
        if(!instancia) {
            this.nombre = nombre;
            this.email = email;
            instancia = this;
        } else {
            return instancia;
        }
    }
}


const persona = new Persona('Juan', 'correo@correo.com');
const persona2 = new Persona('Karen', 'karen@karen.com'); // No afecta

console.log(persona);
console.log(persona2); // Practicamente imprime el primero

