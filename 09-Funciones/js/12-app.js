const carrito = [
    { nombre: "Monitor 27 Pulgadas", precio: 500},
    { nombre: "Televisión", precio: 100},
    { nombre: "Tablet", precio: 200},
    { nombre: "Audifonos", precio: 300},
    { nombre: "Teclado", precio: 400},
    { nombre: "Celular", precio: 700},
]


const nuevoArray2 = carrito.map ( producto => `${producto.nombre} - precio: ${producto.precio}`);

carrito.forEach( producto => console.table(`${producto.nombre} - precio: ${producto.precio}`));

//Es exactamente lo mismo, pero ahorra mucho espacio y hace más legible el codigo.
/* const nuevoArray = carrito.forEach( function(producto) {
    return `${producto.nombre} - precio: ${producto.precio}`;
} );

const nuevoArray2 = carrito.map( function(producto) {
    return `${producto.nombre} - precio: ${producto.precio}`;
} ); */

console.table(nuevoArray2);