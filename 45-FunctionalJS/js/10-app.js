// Composition

// Viene siendo una alternativa a las calses
// Básicamente es escribir muchas funciones, objetos lo que se necesite
// Se utiliza cuando hay funciones que se pueden comparir entre objetos 

// Definir funciones
// Pasarlas al objeto
// Y se pueden reutilizar

const obtenerNombre = info => ({
    mostrarNombre() {
        console.log(`Nombre: ${info.nombre}`);
    }
});

const guardarEmail = info => ({
    agregarEmail(email) {
        console.log(`Guardando email en: ${info.nombre}`);
        info.email = email;
    }
});

const obtenerEmail = info => ({
    mostrarEmail() {
        console.log(`Correo: ${info.email}`);
    }
});

// Para empresa del Cliente
const obtenerEmpresa = info => ({
    mostrarEmpresa() {
        console.log(`Empresa: ${info.empresa}`);
    }
});

// Para el puesto de empresa
const obtenerPuesto = info => ({
    mostrarPuesto() {
        console.log(`Puesto: ${info.puesto}`);
    }
});




function Cliente(nombre, email, empresa) {
    let info = {
        nombre,
        email,
        empresa
    }

    return Object.assign(
        info,
        obtenerNombre(info),
        guardarEmail(info),
        obtenerEmail(info),
        obtenerEmpresa(info)
    )
}

function Empresa(nombre, email, puesto) {
    let info = {
        nombre,
        email,
        puesto
    }

    return Object.assign(
        info,
        obtenerNombre(info),
        guardarEmail(info),
        obtenerEmail(info),
        obtenerPuesto(info)
    )
}

const cliente = Cliente('Juan', null, 'Tesla');
cliente.mostrarNombre();
cliente.agregarEmail('correo@correo.com');
cliente.mostrarEmail();
cliente.mostrarEmpresa();

console.log('--------------------')

const empresa = Empresa('Alejandro', null, 'Programador');
empresa.mostrarNombre();
empresa.agregarEmail('elbicho@correo.com');
empresa.mostrarEmail();
empresa.mostrarPuesto();


// En lugar de tener muchas clases o una clase principal y heredar
// Se crean muchas funciones y se van asignando según sea necesario
