//Parametros por default, por si algun dato falta

function saludar(nombre = "Desconocido", apellido = "No tiene apellido") {
    console.log(`Hola ${nombre} ${apellido}`);
}

saludar("Alejandro", "Chacón");
saludar("Daniela");
saludar();


