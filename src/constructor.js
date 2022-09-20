//Constructor es un generador de OBJETOS
//Los CONSTRUCTORES EN JS SON FUNCIONES QUE NOS PERMITEN CREAR OBJETOS CON PROPIEDADES Y METODOS

const user = {
    name : "Memo",
    lastName : "Herrera",
    age : 21 ,
    showFullName() {
        return this.name + " " + this.lastName   
    }                                               
}


//constructor
function Person() {                         //La P mayuscula indica que es un Constructor y no una funcion
    this.name = ""                          //Esa palabra clave se llama "class"
    this.lastName = ""
    this.age = 0
    this.showFullName = function () {               //funcion que concatena el name y el lastName
        return '${this.name} ${this.lastName}'
    }
}

const user2 = new Person()          //Así definimos un nuevo objeto, con un "new" definimos al nuevo objeto
user2.name = "Juan"
user2.lastName = "Hernandez"            //El nuevo objeto "user2" toma los atributos del metodo7funcion "Person" de arriba
user2.age = 20
console.log(user2.showFullName())

const user3 = new Person()          //Podemos hacer lo mismo de arriba para estos objetos
const user4 = new Person()
const user5 = new Person()

console.log(user3)
console.log(user4)
console.log(user5)

//Es muy importante usar la palabra "new" para decir que estamos asignando un nuevo valor a un objeto

function Person() {
    "use strict"        //"use strict" dice que los this son valores undefined hasta que se coloque el new
    this.name = ""
    this.lastName = ""
}

const person1 = new Person()
console.log(person1)            //Esto imprime las propiedades de Person; name y lastName con cadena vacia

const person2 = Person()
console.log(person2)           /*Esto manda advertencia por que el use strict dice que las propiedades estan indefinidas
                                 y se espera a que se llame al objeto con un new en el constructor*/     
