const producto = {
    nombre: "Monitor 20 Pulgadas",
    precio: 300,
    disponible: true,
}
console.log(producto.nombre);

//const nombre = producto.nombre;
//console.log(nombre);

// Destructuring, permite sacar propiedades del objeto
const {nombre} = producto;
console.log(nombre);

//Puedes sacar varias, siempre y cuando sean del mismo objeto
const {precio, disponible} = producto;
console.log(precio);
console.log(disponible);