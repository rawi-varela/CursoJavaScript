// Closures
// Viene acompañado del scope

// Ess una forma de acceder a una función o valor desde el exterior
// Por ejemplo una variable que se crea dentro de uan función, hacerla disponible fuera de ese bloque

const obtenerCliente = () => {
    const nombre = "Juan";

    // La función muestraNombre es el Closures
    function muestraNombre() {
        console.log(nombre);
    }

    return muestraNombre;
}

const cliente = obtenerCliente();

// Aquí se llama a nombre
cliente();

// Cuando se asgina const cliente = obtenerCliente();, cliente se convierte en una referencia a la función muestraNombre.

// Al llamar a cliente(), estás ejecutando muestraNombre, que aún tiene acceso a la variable nombre definida en obtenerCliente.

// Otro ejemplo
function crearContador() {
    let contador = 0; // Variable privada

    return {
        incrementar: function() {
            contador++;
            console.log(`Contador: ${contador}`);
        },
        obtenerContador: function() {
            console.log(`Valor actual del contador: ${contador}`);
            return contador;
        }
    };
}

const contador1 = crearContador();
const contador2 = crearContador();

contador1.incrementar(); // Contador: 1
contador1.incrementar(); // Contador: 2
contador1.obtenerContador(); // Valor actual del contador: 2

contador2.incrementar(); // Contador: 1
contador2.obtenerContador(); // Valor actual del contador: 1

// Cada instancia es independiente
// Los closures permiten que cada función encapsule su propio estado, haciendo que los datos sean independientes de otras instancias


// El valor de contador dentro de la función principal crearContador no se modifica cuando se modifica alguna instancia como contador1/contador2.
// Esta variable contador es local y única para cada llamada de función