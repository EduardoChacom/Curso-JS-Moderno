//Metodos para el objeto.

//Metodo estricto, no te permite salir más allá de las buenas practicas.
"use strict";

const producto = {
    nombre: "Monitor 20 Pulgadas",
    precio: 300,
    disponible: true,
}

//Este metodo toma el objeto que quieras que no sea modificado.
Object.freeze(producto);

//No puedes cambiar valores
producto.disponible = false;
//No puedes crear un nuevo valor
producto.imagen = "Imagen.jpg";
// No puedes eliminar valores del objeto
delete producto.precio;

console.log(producto);

//Esto sirve para verificar si un objeto esta congelado.
console.log(Object.isFrozen(producto));



/* No permitido.
x = 20;
console.log(x); */

//Aqui se declaro, entonces si te lo imprime en consola
let x = 20;
console.log(x);
