//El dato booleans solo responde con true o false.
const boolean1 = true;
const boolean2 = false;

console.log(boolean1);
console.log(boolean2);

//No se puede marcar como string, sino sera como tal un string.
const boolean3 = "true";
console.log(boolean3);
console.log(boolean3 === boolean1);

//Esto seria un objeto.
const boolean4 = new Boolean(true);
console.log(boolean4);