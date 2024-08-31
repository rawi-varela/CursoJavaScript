// Mini Framework para Testing (Más funciones)
// Todo fue similar a Jest
function suma(a, b) {
    return a + b;
}

function restar(a,b) {
    return a - b;
}

async function sumaAsync(a,b) {
    return Promise.resolve( suma(a,b) );
}

let resultado = suma(2, 2); 
let esperado = 3;

expected(esperado).toBe(resultado);


resultado = restar(10, 5);
esperado = 5;

expected(esperado).toBe(resultado);
expected(esperado).toEqual(resultado);

test('Suma 10 + 20 y el resultado debe ser 30', async () => {
    const resultado = await sumaAsync(10, 20);
    const esperado = 30;
    expected(esperado).toBe(resultado);
});

async function test(mensaje, callback) {
    try {
        await callback();
        console.log(`El Test: ${mensaje} se ejecutó correctamente`);
    } catch (error) {
        console.error('Error:');
        console.error(error);
    }
}

function expected( esperado ) {
    return {
        toBe(resultado) {
            if(resultado !== esperado) {
                console.error(`El ${resultado} es diferente a lo esperado; la prueba no pasó`);
            } else {
                console.log('La prueba paso correctamente');
            }            
        },
        toEqual(resultado) {
            if(resultado !== esperado) {
                console.error(`El ${resultado} no es igual a lo esperado, la prueba no pasó`);
            } else {
                console.log('La prueba paso correctamente');
            }            
        }
    }
}
// Esta sintaxis de encadenamiento de funciones se usa cuando se espera que al función crezca o necesite múltiples métodos relacionados sin cambiar la estructura de la función principal (expectec)


