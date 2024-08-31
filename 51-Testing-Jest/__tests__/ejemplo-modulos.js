import { suma } from '../js/funciones.js';

describe('Suma 2 números', () => {
    test('Sumar 10 y 20 y arrojar 30', () => {
        expect(suma(10,20)).toBe(30);
    })
});


// Jest no puede leer el import
// Vamos a habilitar algo llamado Babel creando un archiv en raíz ".babelrc" e instalando npm i --save -dev @babel/preset-env
// No me funcionó, probé otros comandos, pero nunca lee el archivo de ejemplo-modulos

// De todos modos, hay versiones de Jest específica para cad Framework
