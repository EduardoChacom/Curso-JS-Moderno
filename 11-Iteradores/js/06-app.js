// ITERADOR: .forEach
const pendientes = ["Tarea", "Comer", "Proyecto", "Estudiar"];

pendientes.forEach( (pendientes, i) => console.log(`${i} : ${pendientes}`))

const carrito = [
    { nombre: "Monitor 27 Pulgadas", precio: 500},
    { nombre: "Televisión", precio: 100},
    { nombre: "Tablet", precio: 200},
    { nombre: "Audifonos", precio: 300},
    { nombre: "Teclado", precio: 400},
    { nombre: "Celular", precio: 700},
]

carrito.forEach( producto => console.log(`${producto.nombre}`));

carrito.map( producto => console.log(`${producto.nombre}`));