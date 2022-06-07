const numero1 = "20",
numero2 = "20.2",
numero3 = "Dos",
numero4 = 20;

//Combierte un String a un numero
console.log(Number.parseInt(numero1));

//combierte un String a un numero con decimales, no redondea como el parseInt.
console.log(Number.parseFloat(numero2));

//Si no hay un número escrito no lo campa y te indica NaN.
console.log(Number.parseFloat(numero3));

//Revisa si un número es entero o no. Con true o false.
console.log(Number.isInteger(numero4));
console.log(Number.isInteger(numero2));
