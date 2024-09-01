import App from './classes/App.js';

const app = new App();

// Cypress (End to End) cypress.io
// Funciona en navegador, se puede probar en Java, C#, Python, PHP, Node, React, VueJS
// "npm i --save-dev cypress"

// Se usa npx, "npx cypress open" para abrir la app de escritorio, "npx cypress run" va abrir o realizar las pruebas en el cielai

// En Integration se colocan todas las pruebas
// Plugin configuraciones (casi no)
// Support registrar comandos

// En cypress.json podemos cambiar la confi por default
// No puede probar una BD, solo lo que el user ve en pantalla
