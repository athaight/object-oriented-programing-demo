const Employee = require("./employee");

class Intern extends Employee {
    constructor(name, id, email, school, github) {
      super(name, id, email);
      this.school = school;
      this.github = github;
    }
  
    getSchool() {
      return this.school;
    }

    getGitHub() {
      return this.github;
    }
  
    getRole() {
      return "Intern";
    }
  }
  
  module.exports = Intern;