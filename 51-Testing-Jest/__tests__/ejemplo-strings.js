
// // it('Hola mundo en Jest', () => {}); // Hace lo mismo que test

// describe('Grupo de pruebas', () => {
//     test('Hola mundo en Jest', () => {});

//     test('Otro hola mundo en Jest', () => {});
// });


// // npi --save-dev jest
// // npm run test (script) en terminal

// // Test Suites: dice que existe un archivo
// // Test: cuantas pruebas



// También se puede en la raíz, pero agregar antes .test antes del sufijo (.js)
// test('Hola otro mundo en Jest', () => {});


// Validar Strings
const password = "123456";

describe('Valida que el password no este vacio y tenga una extensión de 6 caracteres', () => {
    test('Que el password tenga 6 caracteres', () => {
        expect( password ).toHaveLength(6); // Que tenga extensión de 6
    });

    test('Password no vacio', () => {
        expect(password).not.toHaveLength(0); // Que no tenga extensión de 6
    })
});
