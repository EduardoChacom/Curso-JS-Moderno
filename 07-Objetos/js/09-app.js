"use strict";
//Más metodos para los objetos.
const producto = {
    nombre: "Monitor 20 Pulgadas",
    precio: 300,
    disponible: true,
}

//Sella el objeto, no se pueden agregar propiedades ni eliminarlas.
//Solo permite poder modificar las propiedades existentes en el Objeto.

Object.seal(producto);

producto.disponible = false;

console.log(producto);

//Verifica si un objeto esta Sellado, .isSealed
console.log(Object.isSealed(producto));