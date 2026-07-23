// zona de codigo principal
import ClienteModelo from "./Cliente_modelo.js";
import Api_modelo from "./Api_modelo.js";

const boton_registrar = document.getElementById("boton_registrar");
const mensaje = document.getElementById("mensaje");
const api = new Api_modelo();

boton_registrar.addEventListener("click", () => {
    const nombre = document.getElementById("nombre").value;
    const apellido = document.getElementById("apellido").value;
    const rol = document.getElementById("rol").value;

    const cliente = new ClienteModelo(nombre,apellido,rol);

    if (cliente.validar_nombre()){

        const registrado = api.guardar_cliente("cliente", cliente);

        if (registrado){
            api.guardar_cliente("cliente", cliente);
            api.imprimir_cliente();
            mensaje.textContent = "Nuevo cliente registrado";
        }else{
            mensaje.textContent = "El cliente ya existe";
        }    
    }else{
        mensaje.textContent = "Nombre invalido: debe tener mas de 3 caracteres";
    }

})