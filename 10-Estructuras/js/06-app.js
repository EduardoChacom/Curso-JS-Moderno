// El operador && revisa que se cumplan 2 condiciones 
// dentro de tu if.

const usuario = false;
const puedePagar = false;

if(usuario && puedePagar){
    console.log("Se realizo el pago!");

} else if (!usuario && !puedePagar) {
    console.log("No puedes pagar");

} else if(!usuario) { //Negar una condición. //Si no eres usuario te sale esto
    console.log("Inicia sesión o crea una cuenta ahora mismo!");

}else if(!puedePagar) { //Si no se cumple una de la condicion te regresa que falta.
    console.log("Fondos Insuficientes");

}

/* Es importante ver el orden de las condiciones porque se ejecutan en
orde de arriba hacia abajo y si hay una condición que es más importante
debería de ir arriba. */