//El codigo con Arrow functions es más organizado y compacto.
//Ahorra muchas lineas de codigo.

const reproductor = {
    cancion: "",
    reproducir: ID => console.log(`Reproduciendo canción con el id: ${ID}`), 
    pausar: () => console.log("pausando..."),
    playlist: nombre => console.log(`Ingresa el nombre de tu playlist: ${nombre}`),
    reproducirPlaylist: () => console.log("Reproduciendo playlist"),
    
    //Nueva forma. 
    
    set nuevaCancion(cancion){
        this.cancion = cancion;
        console.log(`Añadiendo: ${cancion}`);
    },
    get obtenerCancion(){
        console.log(`${this.cancion}`);
    }
};

reproductor.nuevaCancion = "Oh my love";
reproductor.obtenerCancion;

reproductor.borrar = ID => console.log(`Borrando canción con el id: ${ID}`);

reproductor.reproducir(30);
reproductor.pausar();
reproductor.borrar(30);
reproductor.playlist("mind peace");
reproductor.reproducirPlaylist();


