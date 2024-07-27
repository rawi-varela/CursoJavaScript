// Operador OR 

const efectivo = 300;
const credito = 400;
const disponible = efectivo + credito;
const totalCarrito = 700;

if(efectivo >= totalCarrito || credito >= totalCarrito || disponible >= totalCarrito) {
    console.log('Sí puedes pagar');
} else {
    console.log('No puedes pagar');
}
