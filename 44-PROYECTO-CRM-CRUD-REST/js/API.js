const url = 'http://localhost:4000/clientes';

// Cuando se crea un nuevo Cliente
export const nuevoCliente = async cliente => {
    try {
        await fetch(url, {
            method: 'POST',
            body: JSON.stringify(cliente),
            headers: {
                'Content-Type': 'application/json'
            }
            // Se envía como String u como Objeto
            // Headers es información de qué tipo de datos estamos enivando
        });
        window.location.href = 'index.html';
    } catch (error) {
        console.log(error);
    }
}

// Obtiene todos los clientes
export const obtenerClientes = async () => {
    try {
        const resultado = await fetch(url);
        const clientes = await resultado.json();
        return clientes;
    } catch (error) {
        console.log(error);
    }
}

// Eliminar un cliente
export const eliminarCliente = async id => {
    try {
        await fetch(`${url}/${id}`, {
            method: 'DELETE',
        });
    } catch (error) {
        console.log(error);
    }
}

// Obtiene cliente por sus ID
export const obtenerCliente = async id => {
    try {
        const resultado = await fetch(`${url}/${id}`);
        const cliente = await resultado.json();
        return cliente;

    } catch (error) {
        console.log(error);
    }
}

// Actualiza un registro
export const editarCliente = async cliente => {
    try {
        await fetch(`${url}/${cliente.id}`, {
            method: 'PUT', // PUT reescribe todo el Obj, PATH es parcial
            body: JSON.stringify(cliente),
            headers: {
                'Content-Type': 'application/json'
            }
        });
        window.location.href = 'index.html';
        
    } catch (error) {
        console.log(error);
    }
}

