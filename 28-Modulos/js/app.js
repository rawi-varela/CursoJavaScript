// import Vue from 'vue'; // Poner la extensión si no se usa frame,weback, etc
import nuevaFuncion, { nombreCliente, ahorro, mostrarInfo, tieneSaldo, Cliente } from './cliente.js';
import { Empresa } from './empresa.js';

// Export Default no requiere estar dentro de las llaves
nuevaFuncion(); 

console.log(nombreCliente);
console.log(ahorro);
console.log(mostrarInfo('Alejandro', 500));
tieneSaldo(ahorro);

const cliente = new Cliente(nombreCliente, ahorro);
console.log(cliente.mostrarInfo());

// De empresa.js
const empresa = new Empresa('Codigo con Juan', 200, 'Aprendizaje en Línea');
console.log(empresa.mostrarInfo());


