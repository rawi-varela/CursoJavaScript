// Explicit Binding - (Permite definir explícitamente el valor de this en funciones)
// No siempre vamos a tener los datos dentro del objeto para usar this, por eso se usa el Explicit

// Call, Apply y Bind existen en todas las funciones de JS, incluso las que nosotros creamos

// En Call le tenemos que pasar cada elemento de forma indiviudal, en Apply si podemos pasar un Array completo

function persona(el1, el2) {
    console.log(`Mi Nombre es: ${this.name} & I  listen: ${el1} & ${el2} `);
}
const informacion = {
    name: 'Juan',
    job: 'Developer'
}
const musicaFavorita = ['Heavy Metal', 'Rock'];

// persona.call(informacion, musicaFavorita[0], musicaFavorita[1]);
persona.call(informacion, ...musicaFavorita);

persona.apply(informacion, musicaFavorita);

const nuevaFn = persona.bind(informacion, musicaFavorita[0], musicaFavorita[1]);
nuevaFn();

// Similar a Call, le tenemos que pasar los elementos de forma individual, pero la diferencia es que crea una función

// El primer argumento es el valor que se va a establecer como this en la función

// call y apply se usan para ejecutar funciones inmediatamente con un this explícito.
// bind ara crear una nueva función con un this predefinido, que puede ejecutarse posteriormente.


// Se usan especialmente en casos donde la referencia a this puede cambiar debido a cómo se llama la función o se utiliza dentro de objetos y callbacks.