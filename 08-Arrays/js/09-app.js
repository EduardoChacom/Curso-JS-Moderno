//Este en un Array con Objects.
const carrito = [
    { nombre: "Monito 27 Pulgadas", precio: 500},
    { nombre: "Televisión", precio: 100},
    { nombre: "Tablet", precio: 200},
    { nombre: "Audifonos", precio: 300},
    { nombre: "Teclado", precio: 400},
    { nombre: "Celular", precio: 700},
]

//Metodo complicado para ver los datos.
for(let i = 0; i < carrito.length; i++){
    console.log(`${carrito[i].nombre} - precio: ${carrito[i].precio}`); //Si quieres acceder directamente a algo.
};

console.log("_______________________________________________");

//.forEach es lo mismo que el "for", pero en sintaxis, es mucho más sencilla.
carrito.forEach( function(producto) {
    console.log(`${producto.nombre} - precio: ${producto.precio}`);
} );