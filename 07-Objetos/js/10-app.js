"use strict";
//Más metodos para los objetos.
const producto = {
    nombre: "Monitor 20 Pulgadas",
    precio: 300,
    disponible: true,
}

const medidas = {
    peso: "1 kg",
    medida: "1m",
}

console.log(producto);
console.log(medidas);

//Une los objetos y se lo asigna a resultado .assing
const resultado = Object.assign(producto, medidas)
console.log(resultado);

//Spread Operator o Rest Operator hace lo mismo que ".assign"
//Los "..." significa copiar y pegar los valores.
const resultado2 = {...producto, ...medidas}
console.log(resultado2);

//Esta última es la más utilizada.