const producto = {
    nombre: "Monitor 20 Pulgadas",
    precio: 300,
    disponible: true,
}

//Te retorna el nombre de la propiedad en vez de su valor .keys
console.log(Object.keys(producto));

//Te retorna el valor de las propiedades pero no su nombre.
console.log(Object.values(producto));

//Te retorna todo, tanto el nombre como sus valores de forma en cadena.
console.log(Object.entries(producto));