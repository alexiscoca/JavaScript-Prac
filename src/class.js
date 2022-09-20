/*
Class 
*/

//Con el class definimos las propiedades y metodos de un objeto.
//El metodo "constructor()" es un metodo de js que devuelve un nuevo objeto
//El class se usa en otros lenguajes como Java, C, C#
//Es una forma de escribir codigo; clean code

/*
Constructor
*/
class Person {                      //Una clase no es mas que un conjunto de metodos que permiten definir un objeto
    constructor(name, lastName) {
        this.name = name
        this.lastName = lastName
    }

    greet() {
        return "Hello I am " + this.name + " " + this.lastName
    }
}

//Creando una Instancia de la clase Person
const user = new Person("Alexis", "Coca")
const user2 = new Person("Memo", "Herrera")

console.log(user.greet())
console.log(user2.greet())

console.log(typeof Person)              //Person es una funcion