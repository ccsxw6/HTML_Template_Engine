// TODO: Write code to define and export the Engineer class.  HINT: This class should inherit from Employee.
const Employee = require("./Employee")

//Use the "extends" keyword to inherit all methods from another class. it is used to create a child class
// of another class (parent)
class Engineer extends Employee {
    constructor(name, id, email, github) {
        // Use the "super" method to call the parent's constructor function.
        // refers to parent class, by calling the super() method in the constructor method, 
        // we call the parent's constructor method and gets access to the paren'ts properties and methods
        super(name, id, email)
        this.github = github
    }
    getGithub() {
        return this.github
    }
    getRole() {
        return 'Engineer'
    }
}


module.exports = Engineer