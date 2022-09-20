/**
 * El polimorfismo parametrico es la capacidad de un metodo que puede funcionar con
 * parametros de cualquier tipo (genericos)
 */

function Stack() {
    this.items = []

    this.push = function(item) {
     this.items = push(item)
    }
}

const stack = new Stack()
stack.push("asdasd")

const stack2 = new Stack()
stack.push(25)

console.log(stack)
console.log(stack2)