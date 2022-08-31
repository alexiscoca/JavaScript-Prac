                                    // this

//Usar el this dentro de un objeto, hace referencia a ese mismo objeto


const user = {
    name : "Memo",
    lastName : "Herrera",
    age : 21 ,
    showFullName() {
        return this.name + " " + this.lastName   
    }                                               
}

console.log(user.showFullName)      /* esto va  a imprimir el valor que tomen las propiedades de "name" y "lastName" 
                                        en este caso imprime "Memo Herrera"  */



                                    //ejemplo 2
const account = {
    number : "1321321312312",
    amount : 100 ,
    deposit(quantity) {                         //le pasamos un parametro a la funcion
        this.amount = this.amount + quantity
    },
    withdraw(quantity) {
        this.amount = this.amount - quantity
    }
}

account.deposit(100)        //aqui llamamos el METODO de un OBJETO
account.deposit(500)        //Esto imprime 800 porque deposit guarda los depositos que se hicieron
account.deposit(100)
console.log(account)

account.withdraw(200)
account.withdraw(500)      //llamamos el METODO "withdraw" del objeto "account"
console.log(account)       //Esto imprime 800-200-500 = 100