//usa la misma sintaxis para crear Objetos pero aqui son corchetes, no llaves.

//Arrays :)
const numeros = [10, 20, 30];

//Funciona de la misma forma para los String.
const estaciones = ["Verano", "Otoño", "Invierto", "Primavera"];

//Forma 2 para hacer Arrays. No es muy utilizada.
const meses = new Array("Enero", "Febrero", "Marzo");

//Array que contiene datos de todo tipo.
//Los Arrays pueden contener otros Arrays dentro de ellos.
const deTodo = ["Hola", 10, true, "si", null, {nombre: "Dani", Estudiante: "Telematica"}, [1, 2, 3]];


console.log(numeros);
console.log(estaciones);
console.log(meses);
console.log(deTodo);

//Objeto
const producto = {
    nombre: "Monitor 20 Pulgadas",
    precio: 300,
    disponible: true,
}