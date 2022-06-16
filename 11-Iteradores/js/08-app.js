//For in... iterador para... 

const pendientes = ["Tarea", "Comer", "Proyecto", "Estudiar"];

//For in, te retorna los indices de cada arreglo: 0, 1, 2, 3, 4
for( let pendiente in pendientes ) {
    console.log(pendiente);
}

const automovil = {
    modelo: "Camaro",
    year: 2000,
    motor: "0.6"
}

//For in, siempre va a operar a la izquierda. en un array el indice. en un objeto
//va operar a la propiedad del objeto, no a su valor.
for(let propiedad in automovil) {
    console.log(propiedad);
}

//Opera lo que este dentro de la propiedad, ya que se le indico en el ${[]} templade string
for(let propiedad in automovil) {
    console.log(`${automovil[propiedad]}`);
}

//Otra sintaxis mucho más reducida de hacer que se iteren los objetos o los arrays
for(let [llave, valor] of Object.entries(automovil)) {
    console.log(llave, valor);
}; 
//Llave se referira a la propiedad, valor a lo que se le asigno a la propiedad.