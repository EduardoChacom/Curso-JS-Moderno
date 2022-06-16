const autenticado = true;
const puedePagar = false;

//El operador ternario no es común verlo es el " ? :"

console.log(autenticado && puedePagar ? "Se realizo el pago" : "No esta autenticado" );

console.log(autenticado || puedePagar ? "Se realizo el pago" : "No esta autenticado" );

//Condiciones dentro de condiciones.

const efectivo = 800;
const credito = 400;
const disponible = efectivo + credito;
const totalPagar = 600;

if (efectivo > totalPagar || credito > totalPagar || disponible > totalPagar) {
    if (efectivo > totalPagar) {
        console.log("Se realizo el cobro en efectivo");
    } else {
    console.log("Se realizo el pago!");
    }
} else {
    console.log("Fondos Insuficientes")
}

//Se le conoce como if anidado.

console.log(autenticado ? puedePagar ? "Se realizo el pago": "Si autenticado, no puede pagar" : "No esta autenticado" );

//Operador ternario anidado.