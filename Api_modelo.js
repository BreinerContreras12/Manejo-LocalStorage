export default class Api_modelo{
    constructor(){
        this.info_key = "cliente";
    }

    verificar_almacenamiento(){
        if (JSON.parse(localStorage.getItem(this.info_key)) == null){
            localStorage.setItem(this.info_key, JSON.stringify([]));
    }
}

    existe_cliente(obj_cliente){
        
        return JSON.parse(localStorage.getItem(this.info_key)).some(cliente => cliente.nombre === obj_cliente.nombre && cliente.apellido === obj_cliente.apellido && cliente.rol === obj_cliente.rol);
    }

    guardar_cliente(lista_cliente, obj_cliente){

        this.verificar_almacenamiento();

        if(!this.existe_cliente(obj_cliente)){
            localStorage.setItem(this.info_key, JSON.stringify(JSON.parse(localStorage.getItem(this.info_key)).concat(obj_cliente)));
            return true
        }else{
            return false
        }
    }

    imprimir_cliente(){
        const info = JSON.parse(localStorage.getItem("cliente"));
        console.log(info);
    }

}