// Mandar datos al localStorage

localStorage.setItem('nombre', 'alejandro');
sessionStorage.setItem('nombre', 'rawi');

//LocalStorage persiste más, si se apaga la pc
//SessionStorage en cuanto de cierra el navegador se pierden los datos

// Sólo almacena Strings, no Arrays ni Objects
// Para ello usar JSON.stringify para transformar un Object a String
const producto = {
    nombre: "Monitor de 24 Pulgadas",
    precio: 300
}

const productoString = JSON.stringify(producto);
// console.log(productoString);
localStorage.setItem('producto', productoString);


// Lo mismo con un array
const meses = ['Enero', 'Febrero', 'Marzo'];
localStorage.setItem('meses',  JSON.stringify(meses));



