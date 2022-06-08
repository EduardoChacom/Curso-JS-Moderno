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

//Tambien puedes acceder a un objeto dentro de un objeto
console.log(producto.informacion);
console.log(producto.informacion.peso);

//Destructuring de un objeto dentro de un obeto.
const {peso, medida} = producto.informacion;
console.log(peso);
console.log(medida);

//Se pueden crear una infinidad de objetos, dentro de un mismo objeto.
const {año01, año02} = producto.informacion.modelos;
console.log(año01);
console.log(año02);