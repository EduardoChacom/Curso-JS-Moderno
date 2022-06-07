let resultado;

//Saber el valor de PI es Math.PI. la función math siempre se escribe "Math."
resultado = Math.PI;
console.log(resultado);

//Redondea al valor más cercano. En 2.5 redondea a 3
resultado = Math.round(2.5);
console.log(resultado);

//Redondear al número mayor.
resultado = Math.ceil(2.1);
console.log(resultado);

//Redondea hacía abajo.
resultado = Math.floor(2.9);
console.log(resultado);

//Raiz cuadrada.
resultado = Math.sqrt(1500);
console.log(resultado);

//Valor absoluto, no importa si es negativo el número (-) trae el valor.
resultado = Math.abs(-123);
console.log(resultado);

//Potencia. por ejemplo: 2 elevado a 3.
resultado = Math.pow(2, 3)
console.log(resultado);

//Extrae el valor Mínimo.
resultado = Math.min(5, 4, 3, 2, 1, -100, -100.1);
console.log(resultado);

//Extrae el valor Máximo.
resultado = Math.max(1, 2, 3, 4, 5, 100, 100.1);
console.log(resultado);

//Aleatorio, lo puedes multiplicar por otra cosa, muy rara vez te da enteros.
resultado = Math.random() * 50;
console.log(resultado);

//Aleatorio dentro de un rango. Por ejemplo: no mayor a 5.
resultado = Math.floor(Math.random() * 5);
console.log(resultado);
