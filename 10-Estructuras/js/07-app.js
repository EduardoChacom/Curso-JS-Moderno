const efectivo = 300;
const credito = 400;
const disponible = efectivo + credito;
const totalPagar = 600;

//Operador or "||" revisa si se cumple una condición o la otra.

if (efectivo > totalPagar || credito > totalPagar || disponible > totalPagar) {
    console.log("Se realizo el pago!");
} else {
    console.log("Fondos Insuficientes")
}

//Se pueden crear infinidad de operadores or "||".