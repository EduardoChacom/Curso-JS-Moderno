let i = 1; //Inicializar el while.

//Una vez i sea menos a 10 ya no se ejecutará.
while(i <= 100) { //Condición.

    if (i % 2 === 0) {
        console.log(`${i} PAR!!`);
    } else {
        console.log(`${i} nones`);
    } 
    
    i++; //Incremento.
}