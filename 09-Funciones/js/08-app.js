//Ejemplo con multiples funciones que retornan valores.

function sumar(a, b) {
    return (a + b);
}

const resultado = sumar (2, 3);

console.log(resultado);

//funcion que retorna un valor, no un resultado.

let total = 0;

function agregarCarrito(precio){
    return total += precio;
};

function calcularImpuesto(total){
    return total * 1.15;
}

total = agregarCarrito(300);
total = agregarCarrito(250);
total = agregarCarrito(450);

const totalPagar = calcularImpuesto(total);

console.log(total);

console.log(`El total a pagar es de: ${totalPagar}`);