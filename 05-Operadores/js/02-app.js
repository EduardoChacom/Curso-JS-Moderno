const numero1 = 20;
const numero2 = "20";
const numero3 = 30;
const numero4 = 20;

//Revisa si 2 numeros son iguales.
// "=" para asignar valor, "==" compara si son iguales. 
console.log(numero1 == numero3);
console.log(numero1 == numero2);

// comparador extricto "===" se fija en el tipo de dato, string o numero
console.log(numero1 === numero2);
console.log(numero1 === numero4);

//Combierte y ahora si lo marca como si fueran iguales.
console.log(numero1 === parseInt(numero2));

//Te señala que tipo de dato que es.
console.log(typeof(numero1));
console.log(typeof(numero2));


const password01 = "admin";
const password02 = "admin";

//Marca si son diferentes, si no son diferentes marca false, si lo son es true.
console.log(password01 != password02);

const password03 = "admin";
const password04 = "admin1";

console.log(`Aquí marca: ${password03 != password04}`);