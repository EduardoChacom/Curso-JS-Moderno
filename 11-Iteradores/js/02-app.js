//La manera de cortar un for loop es con break.
console.log("Break");

for(let i = 0; i <= 10; i++) {

    if(i === 5) {
        console.log("CINCO");
        break; 
    }
    console.log(`Numero: ${i}`);
}

//Si quieres parar un forLoop para agregar algo distinto y siga su ciclo
//es con continue.
console.log("Continue");

for(let i = 0; i <= 10; i++) {

    if(i === 5) {
        console.log("CINCO");
        continue; 
    }
    console.log(`Numero: ${i}`);
}

console.log("Ejemplo realista");

const carrito = [
    { nombre: "Monitor 27 Pulgadas", precio: 500},
    { nombre: "Televisión", precio: 100},
    { nombre: "Tablet", descuento: true, precio: 50},
    { nombre: "Audifonos", precio: 300},
    { nombre: "Teclado", precio: 400},
    { nombre: "Celular", precio: 700},
]

for(let i = 0; i < carrito.length; i++) {
    if(carrito[i].descuento) {
    console.log(`El articulo ${carrito[i].nombre} esta en DESCUENTO!!`);
    continue;
    }

    console.log(carrito[i].nombre);
}