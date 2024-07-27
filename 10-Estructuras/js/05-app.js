// Switch case

const metodoPago = 'puntos';

switch(metodoPago) {
    case 'efectivo':
        console.log(`Pagaste con ${metodoPago}`);
        break;
    case 'cheque':
        console.log(`Pagaste con ${metodoPago} revisaremos que tenga fondos primero`);
        break;
    case 'puntos':
        pagoPuntos();
        break;
    case 'tarjeta':
        console.log(`Pagaste con ${metodoPago} espere un momento...`);
        break;
    default:
        console.log('Aún no has pagado');
        break;
}

function pagoPuntos() {
    console.log(`Pagaste con ${metodoPago}`);
}



