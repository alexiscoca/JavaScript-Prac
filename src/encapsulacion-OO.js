/**
 * Encapsulacion: Concentrar datos y funciones (funcionalidad) ocultando los detalles
 * internos.
 * El usuario simplemente usa el objeto sin saber como funciona este internamente
 */

/*const company = {
    name: "Fazt" ,
    employees: [],
    sortEmployees: function() {

    }
}
*/

//metodos que nos permiten interactuar con las propiedades
function Company(name) {
    let employees = []
    this.name = name        //this es una propiedad

    this.getEmployees = function() {
        return employees
    }
    this.addEmployee = function(employee) {
        employees.push(employee)
    }
}
const company = new Company("Coca Cola")
const company2 = new Company("Pepsi")

console.log(company)
console.log(company2)

company.addEmployee({name: "Alexis"})
company2.addEmployee({name: "Memo"})

console.log(company.getEmployees())
console.log(company2.getEmployees())



