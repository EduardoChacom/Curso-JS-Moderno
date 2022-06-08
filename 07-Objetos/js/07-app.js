const producto = {
    nombre: "Monitor 20 Pulgadas",
    precio: 300,
    disponible: true,
}

//Se puede reasignar el objeto al igual que la variable var y let.
producto.disponible = false

//Tambien se puede eliminar sin importar que sea una const.
delete producto.precio;

console.log(producto);

//Tambien se puede con otro tipo de variable.
let videojuego = {
    Consola: {
        consola01: nintendo64,
        consola02: gameCube,    
    },
    enExistencia: true,

}

var juegos = {
    Consola: {
        consola01: nintendo64,
        consola02: gameCube,    
    },
    enExistencia: true,

}
