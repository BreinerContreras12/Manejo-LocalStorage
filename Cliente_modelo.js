class Clientemodelo{
    constructor(datoNombre,datoApellido,datoRol){
    this.nombre = datoNombre;
    this.Apellido = datoApellido; 
    this.Rol = datoRol;
    }

    get_nombre(){
        return this.nombre
    }

    set_nombre(nuevo_nombre){
        this.nombre = nuevo_nombre
    }
}