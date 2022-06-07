const product = "Monitor 20 Pulgadas",
product02 = "Monitor 20 Pulgadas",
product03 = "Monitor 20 Pulgadas",
product04 = "Monitor 20 Pulgadas",
product05 = "Monitor 20 Pulgadas";

//Reemplaza el string por uno nuevo.
console.log(product);
console.log(product.replace("Pulgadas", '"'));
console.log(product.replace("Monitor", 'Monitor Curvo'));

//Corta el string de la posición Inicial a la Final.
console.log(product.slice(0, 10));

//Si pones un número mayor que el valor Inicial los corrige por si solo, (10,0)
console.log(product.substring(0, 10));

//Corta la primera o la letra que desees.
const usuario = "Eduardo";
console.log(usuario.charAt(0));