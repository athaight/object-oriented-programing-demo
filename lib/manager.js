const Employee = require("./employee");

class Manager extends Employee {
    constructor(name, id, email, officeNumber, github) {
        super(name, id, email);
        this.officeNumber = officeNumber;
        this.github = github;
    }

    getOfficeNumber(){
        return this.officeNumber;
    }

    getGitHub(){
        return this.github;
    }

    getRole(){
        return "Manager";
    }
}

module.exports = Manager;