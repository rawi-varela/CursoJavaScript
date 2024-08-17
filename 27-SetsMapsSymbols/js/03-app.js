// Maps
// Son listas ordenadas en key y value
// Pude ser cualquier tipo de dato como llave o valor
// Tienen mayor performance que un objeto

const cliente = new Map();

cliente.set('nombre', 'alejandro');
cliente.set('tipo', 'Premium');
cliente.set('saldo', 300);
// cliente.set(true, false);
// cliente.set([0], true);

console.log(cliente.size);
console.log(cliente.has('nombre')); // Para llaves
console.log(cliente.get('nombre')); // Trae el value

cliente.delete('saldo');
// cliente.clear();

console.log(cliente);


const paciente = new Map([['nombre', 'alejandro'], ['cuarto', 'No definido']]);
paciente.set('DR', 'Dr. Juan'); // Agregar
paciente.set('nombre', 'Lis'); // Reescribe el valor
paciente.set('DR', 'Dr. Juan');

console.log(paciente);

paciente.forEach( (datos, index) => {
    console.log(datos);
});

// Muy utiles para agregar y quitar datos