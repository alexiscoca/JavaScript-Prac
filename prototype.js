function Person(name, lastName) {     //Parametros a la funcion
    this.name = name                  //Le pasamos los parametros
    this.lastName = lastName
    this.displayName = function() {                 //hacemos una funcion
        return this.name + " " + this.lastName
    }
}

const alexis = new Person("Alexis", "Coca")     //Aquí le pasamos un parametro en forma de String      
console.log(alexis.displayName())                 //Esto imprime el nombre completo "Alexis Coca"

const memo = new Person("Memo", "Caballero")                    //El primer parametro es una propiedad de name y el 2do de lastName
console.log(memo.displayName())                       //Esto imprime el nombre y apellido concatenados



//john es instancia de Person"