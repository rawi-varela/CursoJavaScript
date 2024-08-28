// funciones que retornan funciones

const obtenerCliente = () => () => console.log('Alejandro JS');

const fn = obtenerCliente();

fn();

// Casi no se ven en proyectos, en algunas librerías tal vez