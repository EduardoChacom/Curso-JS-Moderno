const autenticado = true;

if(autenticado === true) {
    console.log("El usuario es correcto!");
}

const autenticado02 = true;

if(autenticado02) { //No es necesario el operador "==="
    console.log("El usuario es correcto!");
} //Es el mismo resultado pero es una buena practica dejarlo así.

const puntaje = 500; 

if(puntaje > 300) { //Esto esta mal wey!!
    console.log("Buen puntaje... Te ganaste una putiza!!");
} else if (puntaje > 400) {
    console.log("Excelente puntaje... Te vamos a cojer!!");
} //El orden es importante, según lo que quieres que aparezca primero.

const puntaje02 = 299;

if(puntaje02 > 400) {
    console.log("Excelente puntaje... Te vamos a cojer!!");
} else if (puntaje02 >= 300) {
    console.log("Buen puntaje... Te ganaste una putiza!!");
} else if (puntaje02 < 300) {
    console.log("Suerte para la proxima pendejo!!")
}

//Buena practica es poner independiente los if.
const puntaje03 = 400;

function revisarPuntaje(){
    if(puntaje03 >= 400) {
        console.log("Excelente puntaje... Te vamos a cojer!!");
        return;
    } 
    
    if(puntaje03 >= 300) {
        console.log("Buen puntaje... Te ganaste una putiza!!");
        return;
    } 

    if (puntaje03 < 300) {
        console.log("Suerte para la proxima pendejo!!");
        return;
    }

}
revisarPuntaje();

