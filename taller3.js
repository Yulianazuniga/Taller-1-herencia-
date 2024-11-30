class Empleado {
    constructor(nombre, salario) {
        this.nombre = nombre ;
        this.salario = salario ;
    }
    obtenerDetalles(){
      console.log( `Nombre: ${this.nombre}, Salario: ${this.salario}`)
    }
}
let empleado1 = new Empleado ("luis", 2344)
empleado1.obtenerDetalles();

class Gerente extends Empleado {
    constructor(nombre, salario, departamento) {
        super(nombre, salario);
        this.departamento = departamento ;
    }
    obtenerDetalles(){
        console.log( `Nombre: ${this.nombre}, Salario: ${this.salario}, departamento ${this.departamento}`)
      }
}
let empleado2 = new Gerente ("yuliana", 544555, "Cauca")
empleado2.obtenerDetalles();