const producto = {
    nombre: "Monitor 20 Pulgadas",
    precio: 300,
    disponible: true,
}

// Agregar nuevas propiedades al objeto.
producto.imagen = "Imagen.jpg";

// Elimar cierta propiedad del objeto
delete producto.disponible;

console.log(producto);