const Employee = require("./employee");

class Intern extends Employee {
    constructor(name, id, email, school, github) {
      super(name, id, email);
      this.school = school;
    }
  
    getSchool() {
      return this.school;
    }

    getGithub() {
      return this.github;
    }
  
    getRole() {
      return "Intern";
    }
  }
  
  module.exports = Intern;