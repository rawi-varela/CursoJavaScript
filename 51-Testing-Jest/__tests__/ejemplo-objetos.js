const cliente = {
    nombre: 'Juan Pablo',
    balance: 500
};

describe('Testing al Cliente', () => {
    test('El cliente es premium', () => {
        expect(cliente.balance).toBeGreaterThan(400); // Es mayor a
    });

    test('Es Juan Pablo', () => {
        expect(cliente.nombre).toBe('Juan Pablo');
    });

    test('No es otro cliente', () => {
        expect(cliente.nombre).not.toBe('Pedro'); // No es
    });

    test('No tiene 500', () => {
        expect(cliente.balance).not.toBe(300); // No es 300
    })
})