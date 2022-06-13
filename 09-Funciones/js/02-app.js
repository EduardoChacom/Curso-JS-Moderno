//Declaración de funcion (funcion Declaration)

function sumar () {
    console.log(2 + 2);    
}

sumar();

// Expresión de funcion (function Expression)

const sumar2 = function() {
    console.log(3 + 3);
}

sumar2();

// La diferencia de estos dos es la siguiente:

sumar3();

function sumar3 () {
    console.log(4 + 4);    
}

sumar4();

const sumar4 = function() {
    console.log(5 + 5);
}

// La declaración de funsión te permite declarar 
// una variabla antes y así definirla despues.

/* JS se ejecuta en 2 vueltas, se le conoce como hosting, en la primera
vuelta escanea todo el documento para así leer todas las funsiones existentes,
(etapa de creación), en la segunda vuelta las funsiones estan registradas,
por lo tanto ya imprime las variables y lo que hará cada una 
(etapa de ejecución).  */