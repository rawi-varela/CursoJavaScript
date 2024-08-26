// Manejar múltiples awaits

// Como utilizar dos promises, es decir, hacer dos consultas a una API o consumir dos endpoints

function descargarNuevosClientes() {
    return new Promise( resolve => {
        console.log('Descargando clientes...');

        setTimeout(() => {
            resolve('Los clientes fueron decargados');
        }, 5000);
    });
}

function descargarNuevosPedidos() {
    return new Promise( resolve => {
        console.log('Descargando pedidos...');

        setTimeout(() => {
            resolve('Los pedidos fueron decargados');
        }, 3000);
    });
}


const app = async () => {
    try {
        // // De esta forma el segundo await espera el primero
        // // Es muy lento, solo para casos especiales
        // const clientes = await descargarNuevosClientes();
        // console.log(clientes);

        // const pedidos = await descargarNuevosPedidos();
        // console.log(pedidos); 

        // De esta forma los llama al mismo tiempo porque son funciones independientes en el contexto
        const respuesta = await Promise.all([descargarNuevosClientes(), descargarNuevosPedidos()]); 
        console.log(respuesta[0]);
        console.log(respuesta[1]);
    } catch (error) {
        console.log(error);
    }
}

app(); 
