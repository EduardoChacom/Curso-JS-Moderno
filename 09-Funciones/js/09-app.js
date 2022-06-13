//Añadir funciones a un Objeto.

const reproductor = {
    reproducir: function(ID){
        console.log(`Reproduciendo canción con el id: ${ID}`);

        this.reproducirPlaylist();
    }, 
    pausar: function(){
        console.log("pausando...");
    },
    playlist: function(nombre){
        console.log(`Ingresa el nombre de tu playlist: ${nombre}`)
    },
    reproducirPlaylist: function(){
        console.log("Reproduciendo playlist");
    }
};

reproductor.reproducir(30);
reproductor.reproducir(12);
reproductor.pausar();
reproductor.playlist("mind peace");

reproductor.borrar = function (ID) {
    console.log(`Borrando canción con el id: ${ID}`);
}

reproductor.borrar(30);