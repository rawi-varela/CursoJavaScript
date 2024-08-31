// Snapshots - Datos que se almacenan en un String en una carpeta aparte

const cliente = {
    nombre: 'Juan 2',
    balance: 500,
    tipo: 'Premium'
};

describe('Testing al cliente', () => {
    test('Es Juan pablo', () => {
        expect(cliente).toMatchSnapshot();
    });
});

// Al ejecutar el script npm run test se crea la carpeta

// Para actualizar el snapshots de la carpeta con el que tengo aquí "npm t -- -u"