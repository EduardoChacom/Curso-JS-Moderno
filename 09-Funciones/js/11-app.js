//Expresión de funcion.

const aprendiendo = function(tecnologia){
    console.log(`Aprendiendo ${tecnologia}`);
}

aprendiendo("JavaScript");

//Arrow function
//Cuando solo tienes un parametro puedes eliminar los ()

const aprendiendo2 = tecnologia => `Aprendiendo ${tecnologia}`;

console.log(aprendiendo2("JavaScript"));

//Si tiene 2 o más parametros, utiliza ()

const suma = (a, b) => (a + b);

console.log(suma(10, 10));
