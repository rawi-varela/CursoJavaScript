// Design Patterns - Patrones de Diseño
// Soluciones típicas a problemas comunes en DesSoft, cada patrón es como un plano que se puede personalizar para resolver un problema de diseño en el código
// Son soluciones a problemas de diseño de código

// Categorias
// De creación - Permiten crear Obj y la reutilización de código
// Estructura - Explican cómo deben comunicarse los Obj y Classes en grandes proyectos
// Comportamiento - Se encargan de cómo se comportan y comunican los Obj



// Class Pattern
class Persona {
    constructor(nombre, email) {
        this.nombre = nombre;
        this.email = email;
    }
}

const persona = new Persona('Juan', 'correo@correo.com');

console.log(persona);

