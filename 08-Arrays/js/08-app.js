//Destructuring con Arrays
const numeros = [10, 20, 30, 40, 50];

//Cada coma marca el inicio y el fin de un valor en el array
//a = posición 0, b = posicion 1, c = posición 2.
const [a, b, c] = numeros;
console.log(c);

//Si no requieres el valor de poscion 0, 1, 2 o cualquiera se hace esto
//No se le asigna una posición.
const [ , , e] = numeros;
console.log(e)

//Para hacer un conjunto de los valores asignados, se le pone "..."
const [ , , ...tercero] = numeros;
console.log(tercero);









//Destructuring en Ojetos
const producto = {
    nombre: "Monitor 20 Pulgadas",
    precio: 300,
    disponible: true,
}

const {nombre} = producto;

console.log(nombre);