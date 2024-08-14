// Propiedades Privadas en JS

//Public, podemos acceder dentro de la clase o en el objeto (fuera de clase)
//Privade, solo se peude acceder dentro de la clase
//Protected creo todavía no soportado de forma nativa en JS

class Cliente {
    #nombre; // Esto lo hace private

    setNombre(nombre){
        this.#nombre = nombre;
    }
    getNombre(){
        return this.#nombre;
    }

    constructor(nombre, saldo) {
        this.#nombre = nombre;
        this.saldo = saldo;
    }

    mostrarInfo() {
        return `Cliente: ${this.#nombre}, tu saldo es de ${this.saldo}`;
    }

    #saludarPrivado() { // Método privado
        return `Hola, mi nombre es ${this.#nombre}`;
    }
    saludar() {
    return this.#saludarPrivado(); // Accesible solo dentro de la clase
    }
}

const juan = new Cliente('Juan', 200);
console.log(juan.mostrarInfo());
// console.log(juan.#nombre); // Error, solo se puede acceder al valor dentro de la clase
console.log(juan.saludar()); // Funciona, pero no se puede acceder a #saludarPrivado directamente



// class Cliente {
//     #nombre; // Esto lo hace private

//     setNombre(nombre){
//         this.#nombre = nombre;
//     }
//     getNombre(){
//         return this.#nombre;
//     }
// }

// const juan = new Cliente();
// juan.setNombre('Alejandro');
// console.log(juan.getNombre());


