//Switch case

const metodoPago = "Efectivo";

switch(metodoPago) {
    case "Efectivo":
        pagar();
        break;
    case "Cheque":
        console.log(`Se realizo el pago con ${metodoPago}`);
        break;
    case "Tarjeta":
        console.log(`Se realizo el pago con ${metodoPago}`);
    default:
        console.log("Aun no haz seleccionado un método de pago.");
}

function pagar(){
    console.log("Pagando...")
}
