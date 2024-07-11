// Object Contructor (otra forma de crear objetos)


// Object Literal
const producto = {
    nombre: "Monitor 20 pulgadas",
    precio: 30,
    disponible: true
}

// Object Constructor
function Producto(nombre, precio) {
    this.nombre = nombre;
    this.precio = precio;
    this.disponible = true; //Asignado por defecto, igual podría ser un parametro
}

const producto2 = new Producto('Monitor', 400);
console.log(producto2);

const producto3 = new Producto('Television', 700);
console.log(producto3);

// Object Constructor es más dinámico, pero se usa más Object Literal

