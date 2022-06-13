/* "a" y "b" son parametros que recibe la funcion,
cuando vas a mandarla a llamar tienes que declarar esos
mismos parametros. */
function sumar (a, b) {
    console.log(a + b);
}

sumar(2, 3); //2 y 3 son argumentos.
sumar(200, 184); 

function saludar(nombre, apellido) {
    console.log(`Hola ${nombre} ${apellido}`);
}

saludar("Daniela", "Manzanita");
saludar("Daniela"); //undefined