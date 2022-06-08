const carrito = [];

const producto00 = {
    nombre: "Disco de vinilo",
    precio: 300,
}

const producto01 = {
    nombre: "Toca discos",
    precio: 2500,
}

const producto02 = {
    nombre: "Rocola",
    precio: 5500,
}

carrito.push(producto00);
carrito.push(producto01);
carrito.push(producto02);

const producto03 = {
    nombre: "Convertidor HDMI",
    precio: 700,
}

carrito.unshift(producto03);

console.table(carrito);

//Como eliminar el ULTIMO valor del Array
carrito.pop();
console.table(carrito);

//eliminar el valor del INICIO del array
carrito.shift();
console.table(carrito);

//Eliminar cualquier elemento del array
//indica DE donde HASTA donde quieres eliminar
carrito.splice(1,1)
console.table(carrito);