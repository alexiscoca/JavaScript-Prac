//Object

//Object es un constructor de JS

const person = new Object("Hola ")   //le pasamos un parametro
person.test = function() {
    return this + "test"
}
console.log(person.test)             //esto imprime "Hola test"



const person1 = {}           //Esta es la mejor forma de escribir un Object
console.log(person1)       

const user = {
    name : "",
    lastName : "",
    age : 34,
    showName() {}
} 

console.log(Object.keys(user))      //Esto muestra un arreglo con las claves: name, last name, age y showName
console.log(Object.values(user))    //Esto imprime los valores de "User" si es que tiene