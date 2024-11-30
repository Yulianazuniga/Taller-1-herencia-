class Vehiculo{
    constructor(marca){
        this.marca = marca;
    }
   arrancar(){
    console.log("El vehiculo arranca");
   } 
}
let carro = new Vehiculo ("toyota")
carro.arrancar();

class coche extends Vehiculo {
    constructor (marca, modelo){
        super(marca);
        this.modelo = modelo ;
    }
    mostrarInfo(){
        console.log(`El coche de la marca ${this.marca} y modelo ${this.modelo}`)
    }
}
let coche1 = new coche ("toyota", "camry")
coche1.mostrarInfo();