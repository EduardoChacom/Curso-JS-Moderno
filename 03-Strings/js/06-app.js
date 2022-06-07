const product = "Monitor 20 Pulgadas";

//Permite repetir una cadena de txt...
const texto = " En promoción".repeat(3);

console.log(texto);
console.log(`${product} ${texto}!!`);

//Se le puede agragar otros metodos para que tu string se vea más limpio.
console.log(`${product}
${texto.trim()}!!`);

//Si a repeat le pasas un 2.4 se redondea, no se puede poner decimales.

//.Split nos divide la cadena de texto o nos corta a eleccion la parte que querramos
const act = "Estoy aprendiendo JS";
console.log(act.split(" "));

const hobbies = "Leer, Caminar, Escuchar, Escribir, Correr en las mañanas";
console.log(hobbies.split(", "));

const tweet = "Aprendiendo JS moderno #EstaTodoPendejon";
console.log(tweet.split("#"));