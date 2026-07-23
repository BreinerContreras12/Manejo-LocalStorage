export default class ClienteModelo{

    constructor(dato_nombre,dato_apellido,dato_rol){
        this.nombre = dato_nombre;
        this.apellido = dato_apellido;
        this.rol = dato_rol;
    }

    get_nombre(){
        return this.nombre;
    }

    set_nombre(nuevo_nombre){
        this.nombre = dato_nombre;
    }

    get_apellido(){
        return this.apellido;
    }

    set_apellido(nuevo_apellido){
        this.apellido = dato_apellido;
    }

    get_rol(){
        return this.rol;
    }

    set_rol(nuevo_rol){
        this.rol = dato_rol;
    }

    validar_nombre(){
        if(this.nombre.length > 3){
            return true;
        }
        else{
            return false;
        }
    }

}