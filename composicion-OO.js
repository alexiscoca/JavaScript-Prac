/**
 * Composicion es un tipo fuerte de agregacion
 */

const person = {
    name: "Alexis",
    lastName: "Coca",
    addres: {                       //addres es un objeto fuertemente relacionado con person; el objeto que lo contiene
        street: "Escuadron 201",
        city: "CDMX",
        country: "Mexico"
    }
}

console.log(person)