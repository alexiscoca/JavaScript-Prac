function Person(name, lastName) {     //Parametros a la funcion
    this.name = name                  //Le pasamos los parametros
    this.lastName = lastName
    this.displayName = function() {                 //hacemos una funcion
        return this.name + " " + this.lastName
    }
}

const alexis = new Person("Alexis", "Coca")     //Aquí le pasamos un parametro en forma de String      
alexis.name = "Alexis"
                                                 //Esto imprime el nombre completo "Alexis Coca"

const memo = new Person("Memo", "Caballero")                //El primer parametro es una propiedad de name y el 2do de lastName
                                                           //Esto imprime el nombre y apellido concatenados

const comal = new Person("Comal", "Ezquivel")
const keps = new Person("Keps", "Herre")


//agregando un metodo al objeto Person con PROTOTYPE
Person.prototype.greet = function() {
    return "Hello I'am " + this.name
}
Person.prototype.age = function() {         //Con el Person.prototype estamos añadiendo un metodo al Objeto Person, no al constructor   
    return "and i am" + " " + 21
}
console.log(alexis.greet())
console.log(memo.greet())
console.log(keps.greet(), keps.age())
console.log(comal.greet())

//otro ejemplo
const s = new String("Hola mundo")
String.prototype.concatTest = function() {
    return this + " " + "test"
}
console.log(s.concatTest())
console.log("My name is Alexis".concatTest())

//alexis es instancia de Person"
//puedo agregar metodos en un constructor ya creado
/*prototype hace referencia a la estructura que ya tenía un constructor y 
 todos los objetos que deciendan de el estan conectados con el constructor para poder acceder a sus propiedades
  y metodos */