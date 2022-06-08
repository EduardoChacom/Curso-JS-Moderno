"use strict";
//Más metodos para los objetos.

const nombre = "Juan";
const precio = 20;

//this."" es la forma de referirse a una propiedad dentro de un objeto.
const producto = {
    nombre: "Monitor 20 Pulgadas",
    precio: 300,
    disponible: true,
    mostarInformación: function () {
        console.log(`El producto: ${this.nombre} Tiene un precio de: ${this.precio}`);
    }
}

//No importa el nombre de las propiedades, sigue marcando su valor dentro del objeto.
const producto2 = {
    nombre: "Tablet Apple",
    precio: 5000,
    disponible: false,
    mostarInformación: function () {
        console.log(`El producto: ${this.nombre} Tiene un precio de: ${this.precio}`);
    },
    Modelo: {
        año01: 2020,
        año02: 2021,
        año03: 2022
    }
}

producto.mostarInformación();
producto2.mostarInformación();
