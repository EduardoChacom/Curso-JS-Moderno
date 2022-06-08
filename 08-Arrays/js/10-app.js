//Este en un Array con Objects.
const carrito = [
    { nombre: "Monitor 27 Pulgadas", precio: 500},
    { nombre: "Televisión", precio: 100},
    { nombre: "Tablet", precio: 200},
    { nombre: "Audifonos", precio: 300},
    { nombre: "Teclado", precio: 400},
    { nombre: "Celular", precio: 700},
]

//.forEach
carrito.forEach( function(producto) {
    console.log(`${producto.nombre} - precio: ${producto.precio}`);
} );

//.map = Llena una variable con un Array nuevo. 
carrito.map( function(producto) {
    console.log(`${producto.nombre} - precio: ${producto.precio}`);
} );

const nuevoArray = carrito.forEach( function(producto) {
    return `${producto.nombre} - precio: ${producto.precio}`;
} );

const nuevoArray2 = carrito.map( function(producto) {
    return `${producto.nombre} - precio: ${producto.precio}`;
} );

console.log(nuevoArray);
console.log(nuevoArray2)