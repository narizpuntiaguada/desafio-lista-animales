form.Registro.addEventListener("submit",event =>{

    
})
let datos = new FormData(formRegistro);
    let nombrePropietario = datos.get("propietario");
    let telefono = datos.get("telefono");
    let direccion = datos.get("direccion");
    let nombreMascota = datos.get("nombreMascota");
    let tipoMascota = datos.get("tipo");
    let motivoConsulta = datos.get("enfermedad");