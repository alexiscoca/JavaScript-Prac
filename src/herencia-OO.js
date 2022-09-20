/**
 * Herencia: principio que nos permite crear ojetos especializados a partir de uno mas 
 * generico
 */

function Person() {
    this.name = " "
    this.lastName = " "
}

function Programmer() {
    this.language = " "
}

Programmer.prototype = new Person()

console.log(Programmer)
console.log(Person)

const person = new Person()
person.name = "Memo"
person.lastName = "Herre"
console.log(person)

const programmer = new Programmer();    //programmer desciende de Person y hereda sus propiedades
programmer.name = "Ryan"
programmer.lastName = "Coca"
programmer.language = "Python"

console.log(programmer)
