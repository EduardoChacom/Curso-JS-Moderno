iniciarApp();

function iniciarApp() {
    console.log("Iniciando app...");

    segundaFuncion(); //Una vez se inicia la primera funcion, entra la segunda
}

function segundaFuncion(){
    console.log("Desdé la segunda función");

    usuarioAutenticado("pablo");
}

//El resultado es el mismo, pero es necesario que sea así para que 
//Se encadenen y tengan el orden en el que van a operar cada una.

function usuarioAutenticado(usuario){
    console.log(`Ingrese usuario: ${usuario}, Autenticando el usuario... espere...`);
    console.log("Usuario autenticado exitosamente, ");
}