const dinero = 300;
const totalAPagar = 500;
const tarjeta = false;
const cheque = true;

//Se ejecuta la condicion que se cumpla primero.

if(dinero >= totalAPagar) {
    console.log("¡Se completo el pago!");

}else if(tarjeta) {
    console.log("Se completo el pago con la tarjeta!");
    
}else if(cheque) {
    console.log("Se completo el pago con el cheque!");

}else {
    console.log("Fondos Insuficientes.");

}

//Se pueden añadir cuantos "else" o "else if" querramos.