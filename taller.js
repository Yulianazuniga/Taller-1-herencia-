class animal {
    constructor(nombre,edad,){
        this.nombre = nombre;
        this.edad = edad;


    }
    hacerSonido(){
        console.log("El animal hace un sonido ");
    }

}
let animal1 = new animal ("perro","3 años");
animal1.hacerSonido();

class perro extends animal{
    constructor(nombre,edad,raza){
       super(nombre,edad);
        this.raza = raza;

    }
    hacerSonido(){
        console.log("el perro "   + this.nombre+ "ladra !Guau!");
    }
    
}
let perro1 = new perro ("Lucas","2 años","Pitbull")
perro1.hacerSonido();


