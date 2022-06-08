// Object Literal.

const producto = {
    nombre: "Monitor 20 Pulgadas",
    precio: 300,
    disponible: true,
}

console.log(producto);

//Object Constructor

//Sirve para almacenar dentro del objeto los datos que se requieren
//para así hacer variables que no ocupes definirlas, solo darles el valor.
//Muy util cuando necesites hacer varios objetos con los mismos datos.

function Producto(nombre, precio){
    this.nombre = nombre;
    this.precio = precio;
    this.disponible = true;
}

const producto2 = new Producto("Monitor 24 Pulgadas", 500);
console.log(producto2);

const producto3 = new Producto("Televisión", 1000);
console.log(producto3);
