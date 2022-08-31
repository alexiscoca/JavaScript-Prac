//Métodos o Funciones
//Los objetos tienen metodos 
//Las propiedades de los objetos pueden tener metodos

                                    //Forma de pasar metodos a objetos
const user = {
    name : "Alexis",
    lastName : "Coca",
    age : 21 ,
    showFullName() {
        return "Alexis Coca"
    }                                               //le pasamos la funcion al objeto. esto es un METODO
}

console.log(user.showFullName)


                               