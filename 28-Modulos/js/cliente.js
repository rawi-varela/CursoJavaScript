// (function() {
//     console.log('IFFIE');
//     const nombre = 'Alejandro';
// })();

// Poner type="module" en el <script> del HTML
export const nombreCliente = 'Alejandro';
export const ahorro = 200;

export function mostrarInfo(nombre, ahorro) {
    return `Cliente: ${nombre} - Ahorro: ${ahorro}`;
}

export function tieneSaldo(ahorro) {
    if(ahorro > 0) {
        console.log('Sí tiene saldo');
    } else {
        console.log('No tiene saldo');
    }
}

export class Cliente {
    constructor(nombre, ahorro) {
        this.nombre = nombre;
        this.ahorro = ahorro;
    }
    mostrarInfo() {
        return `Cliente: ${this.nombre} - Ahorro: ${this.ahorro}`;
    }
}

// Expor dafult
// Solo se puede tener uno por archivo, por eso no importa el nombre con el que se importe
export default function nuevaFuncion() {
    console.log('Este es el export default');
}

