const producto = {
    nombre: "Monitor 20 Pulgadas",
    precio: 300,
    disponible: true,
    //Agregamos un objeto dentro de un objeto por si la propiedad
    //Tiene consigo muchos más valores, definirlos ahí mismo.
    informacion: {
        peso: "3 kg",
        medida: "20 Pulgadas",
        modelos: {
            año01: 2021,
            año02:2020
        }
    }
}

console.log(producto);

// Esta es la forma para acceder a otras propiedades.
const {nombre, informacion: {modelos: {año01} } } = producto;
console.log(año01);

//para acceder a informacion es así:
//const {nombre, informacion, informacion: {modelos}} = producto;
