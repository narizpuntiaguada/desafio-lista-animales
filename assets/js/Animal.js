class Animal{
    #tipo;
    constructor(tipo){
        this.#tipo = tipo;
    }
    //métodos getter
    get tipo(){
        return this.#tipo;
    }
    //métodos setter
    set tipo(nuevoTipo){
        this.#tipo = nuevoTipo;
        return this.#tipo;
    }
}