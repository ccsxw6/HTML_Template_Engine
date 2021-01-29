// TODO: Write code to define and export the Employee class
// make an employee class w/ methods that you can use elsewhere
// this is the base class, the other emplyee types should all inherit some methods and 
// properties from this base class
// FOR ALL EMPLOYEES, we need to know their name, id, and email
class Employee {
    constructor(name, id, email){
    this.name = name
    this.id = id
    this.email = email
}
//Next, create methods to use elsewhere
// use this method to return the employee's name
getName() {
    return this.name
}
getId() {
    return this.id
}
getEmail() {
    return this.email
}
getRole() {
    return 'Employee'
}
}


module.exports = Employee