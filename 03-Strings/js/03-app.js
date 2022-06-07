const product = "Monitor 20 Pulgadas ", 
precio = "30 USD ";

//Unir 2 valores de variables en una misma linea
console.log(product.concat(precio));

//Tambien se le puede unir un String al concat (concatenar)
console.log(product.concat("En descuento."));

//Otra manera más facil de unir valores.
console.log(product + "Con un precio de " + precio + "En descuento.");

//Esta forma de concatenar variables es mucho más facil y la más usada.
console.log(`El producto ${product}tiene un precio de ${precio}`);