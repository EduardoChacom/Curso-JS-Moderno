const carrito = [];

//Definir un producto.
const producto00 = {
    nombre: "Disco de vinilo",
    precio: 300,
}

const producto01 = {
    nombre: "Toca discos",
    precio: 2500,
}

const producto02 = {
    nombre: "Convertidor HDMI",
    precio: 700,
}

//Como agregar nuevos valores al Array.
let resultado;
resultado = [...carrito, producto00];
//Agregar más valores al Array.
resultado = [...resultado, producto01];
//Esto tambien indica el orden en el que se van a agregar los valores nuevos.
resultado = [producto02, ...resultado];

console.table(resultado);

/* El carrito se sigue manteniendo vacio lo que pasa en realidad
es que resultado copio el Array de carrito y de ahi se le van agregando
productos al carrito.

Si nos vamos directamente al carrito podemos observar que sigue vacio,
porque todo se copio en resultado.*/

console.table(carrito);