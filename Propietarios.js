export default class Propietario{

    #nombre;
    #direccion;
    #telefono;
    constructor(nombre, direccion, telefono){
        this.#nombre = nombre;
        this.#direccion = direccion;
        this.#telefono = telefono;
    }

//métodos getter
get nombre(){
    return this.#nombre;
}
get direccion(){
    return this.#direccion;
}
get telefono(){
    return this.#telefono;
}


//métodos setter
set nombre(nuevoNombre){
    this.#nombre = nuevoNombre;
    return this.#nombre;
}
set direccion(nuevaDireccion){
    this.#direccion = nuevaDireccion;
    return this.#direccion;
}
set telefono(nuevoTelefono){
    this.#telefono = nuevoTelefono;
    return this.#telefono;
}
set mascota(nuevaMascota){
    this.#mascota = nuevaMascota;
    return this.#mascota;


}
}