class Person {
    constructor(name, lastName) {
        this.name = name 
        this.lastName = lastName
        this.age = null
    }
}

//Heredar de otro Objeto
class Programmer extends Person{        //extends palabra para heredar de otro objeto 
    constructor(language, name, lastName) {
        super(name, lastName);                    //super metodo que hace una llamada 
        this.language = language
    }
}

const person = new Person("Maria", "Perez")
console.log(person)

const programmer = new Programmer("Joe", "Coca", "Js")
console.log(programmer)
