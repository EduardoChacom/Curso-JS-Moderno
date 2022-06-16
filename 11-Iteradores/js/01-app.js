//El codigo se va a ejecutar hasta que una funcion se cumpla o se deje deje
//de cumplir.

//For loop, se ejecuta hasta que el codigo deja de cumplir una condición.

/* El lugar en el que empieza a ejecutar nuestro codigo "let i = 0"
La condición que vamos a revisar "i < 10"
El incremento "i++" */

for(let i = 0; i <= 10; i++) {
    console.log(`numero: ${i}`);
}

for(let i = 1; i <= 20; i++) {
    if( i % 2 === 0 ) {
        console.log(`El número: ${i}, es PAR.`);
    } else {
        console.log(`El número: ${i}, es IMPAR`);
    }
}

const carrito = [
    { nombre: "Monitor 27 Pulgadas", precio: 500},
    { nombre: "Televisión", precio: 100},
    { nombre: "Tablet", precio: 200},
    { nombre: "Audifonos", precio: 300},
    { nombre: "Teclado", precio: 400},
    { nombre: "Celular", precio: 700},
]

for(let i = 0; i < carrito.length; i++) {
    console.log(carrito[i]);
}

