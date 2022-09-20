/**
 * Este permite a los objetos con diferentes tipos de datos ser procesados no tan solo con
 * distintos tipos de datos, sino tambien con una relacion que viene a partir de una 
 * herencia
 */

class Person {
    constructor(name, lastName) {
        this.name = name
        this.lastName = lastName
    }
}

class Programmer extends Person {
    constructor(language, name, lastName) {
        super(name, lastName)
        this.language = language
    }
}

const alexis = new Person("Alexis", "Coca")
const alexis2 = new Programmer("JavaScript", "Alexis", "Pintor")

console.log(alexis)
console.log(alexis2)

function writeFullName(p) {
    console.log(p.name + " " + p.lastName)
}

writeFullName(alexis)
writeFullName(alexis2)
