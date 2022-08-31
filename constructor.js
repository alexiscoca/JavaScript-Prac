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

const user2 = new Person()          //Así definimos un nuevo onjeto, con un "new" 
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