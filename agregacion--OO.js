/**
 * La agregacion es una especie de asociacion en la que relaciona 2 objetos o mas
 * pero algunos objetos tienen un rol mayor que el otro.
 * El de mayor rol determina el contenedor de los demas objetos y las relaciones que 
 * tienen
 * Aggregate--contenedor mayor
 * Component--objetos que estan dentro de este contenedor
 * Cada uno puede tener una vida independiente
 */

const company = {
    name: "Fazt tech" ,
    employees: []
}

 class Person {                      
    constructor(name, lastName) {
        this.name = name
        this.lastName = lastName
    }
}   

const john = new Person("John", "Ray")
const maria = new Person("Maria", "Perez")

//metodo push añade objetos a un arreglo
company.employees.push(john)
company.employees.push(maria)

console.log(maria)
console.log(john)
console.log(company)