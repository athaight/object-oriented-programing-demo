const Employee = require("./employee");

class Engineer extends Employee {
    constructor(name, id, email, officeNumber) {
        super(name, id, email);
        this.officeNumber = officeNumber;
        this.github = github;
    }

    getgithub(){
        return this.github;
    }

    getRole(){
        return "Engineer";
    }
    

}

module.exports = Engineer;