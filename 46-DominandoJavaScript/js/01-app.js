// Scope

const login = true;

function clienteLogueado() {
    const cliente = 'Juan';
    console.log(cliente); // Juan

    if(login) {
        // console.log(cliente); // Error (porque abajo se inicializa)
        const cliente = 'Admin';
        console.log(cliente); // Admin
    }

    console.log(cliente) // Juan
}

clienteLogueado();