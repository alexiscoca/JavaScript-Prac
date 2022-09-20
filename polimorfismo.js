function countItems(x) {
    return x.toString().length
}

console.log(countItems(1000))           //Imprime 4 
console.log(countItems("Hola Mundo"))   //Imprime 10

function Sum(x = 0, y = 0, z = 0) {
    return x + y + z
}

console.log(Sum(10, 20))        //Imprime 30
console.log(Sum(10, 20,30))     //Imprime 60