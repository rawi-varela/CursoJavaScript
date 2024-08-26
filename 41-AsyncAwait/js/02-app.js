// Async Await 

function descargarClientes() {
    return new Promise((resolve, reject) => {
        const error = false;

        setTimeout(() => {
            if(!error) {
                resolve('El Lstado de Clientes se descarfó correctamente')
            } else {
                reject('Error en la conexión');
            }
        }, 3000);
    });
}

// Async Await (con Fuction Declaration)
// Async debe ser la función
// Await es la parte que va a esperar a que se ejecute el Promise
// Es decir await detiene la ejecución hasta que se resuelva el Promise
// Si el promise cae en reject, entonces se pasa al catch
async function ejecutar() {
    try {
        console.log(1 + 1);
        // En vez de usar .then el valor se asigna en una varibale
        const respuesta = await descargarClientes();
        console.log(2 + 2);
        console.log(respuesta);
    } catch (error) {
        console.log(error);
    }
}

ejecutar();
