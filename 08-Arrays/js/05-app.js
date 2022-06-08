//Ejemplo de como funciona un carrito vacio.

const carrito = [];

//Definir un Producto para agregarlo al carrito
const producto00 = {
    nombre: "Disco de vinilo",
    precio: 300,
}

const producto01 = {
    nombre: "Toca discos",
    precio: 2500,
}

//Agrega nuevos elementos al Array sin necesidad de acceder al Array.
carrito.push(producto00);
carrito.push(producto01);

const producto02 = {
    nombre: "Convertidor HDMI",
    precio: 700,
}

//Agregar un valor al INICIO del Array
carrito.unshift(producto02);

console.table(carrito);