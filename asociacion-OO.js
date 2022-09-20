/*
Constructor
*/
class Person {                      //Una clase no es mas que un conjunto de metodos que permiten definir un objeto
    constructor(name, lastName) {
        this.name = name
        this.lastName = lastName
    }
}   

const john = new Person("John", "Ray")
const maria = new Person("Maria", "Perez")

//relacion

maria.parent = john;

console.log(maria)
console.log(john)