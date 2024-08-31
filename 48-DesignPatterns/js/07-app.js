// Namespace
// Para evitar la colisión de nombres, básicamente es crear un Obj y asignarle todo dentro para usarlo como prefijo
// Similar a lo que se hace en métodos de propiedad

const restaurApp = {};

restaurApp.platillos = [
    {
        platillo: 'Pizza',
        precio: 25
    },
    {
        platillo: 'Hamburguesa',
        precio: 20
    },
    {
        platillo: 'Hot Dog',
        precio: 20
    }
];

restaurApp.funciones = {
    ordenar: id => {
        console.log(`Tu platillo: ${restaurApp.platillos[id].platillo} se esta preparando`);
    },
    agregarPlatillo: (platillo, precio) => {
        const nuevo = {
            platillo,
            precio
        }
        restaurApp.platillos.push(nuevo);
    },
    mostrarMenu: platillos => {
        console.log(`Bienvenidos a nuestro Menú:`)
        platillos.forEach((platillo, index) => {
            console.log(`${index} - ${platillo.platillo} $ ${platillo.precio}`)
        });
    }
}


restaurApp.funciones.ordenar(1);
restaurApp.funciones.agregarPlatillo('Pastel', 20);
const { platillos} = restaurApp;
restaurApp.funciones.mostrarMenu(platillos);


// console.log(restaurApp);

