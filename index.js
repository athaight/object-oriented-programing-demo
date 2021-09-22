console.clear();
const inquirer = require("inquirer");
const fs = require("fs");
const Manager = require("./lib/manager");
const Engineer = require("./lib/engineer");
const Intern = require("./lib/intern");
const generateHTML = require("./dist/generatedHTML")
const employees = [];

roleSelect();
function roleSelect() {
  inquirer
    .prompt([
      {
        type: "list",
        name: "role",
        message: "What role would you like to create for?",
        choices: ["Manager", "Engineer", "Intern", "Done"],
        default: "Manager",
      },
    ])
    .then((answers) => {
      if (answers.role === "Manager") {
        return manager();
      } else if (answers.role === "Engineer") {
        return engineer();
      } else if (answers.role === "Intern") {
        return intern();
      } else {
        return done();
      }
    });
}


function manager() {
  inquirer
    .prompt([
      {
        type: "input",
        name: "name",
        message: "What is the Managers's Name?",
      },
      {
        type: "input",
        name: "id",
        message: "What is the Manager's Employee ID?",
      },
      {
        type: "input",
        name: "email",
        message: "What is the Manager's Email?",
      },
      {
        type: "input",
        name: "officeNumber",
        message: "What is the Managers's Office Phone Number?",
      },
      {
        type: "list",
        name: "isGithub",
        message: "Is there a GitHub username to add for the Manager?",
        choices: ["Yes.", "No."],
        default: "Yes.",
      },
      {
        type: "input",
        name: "github",
        message: "What is the GitHub username?",
        when: (answers) => answers.isGithub === "Yes.",
      },
    ])
    .then((answers) => {
      const employee = new Manager(
        answers.name,
        answers.id,
        answers.email,
        answers.officeNumber,
        answers.github
      );
      employees.push(employee);
      roleSelect();
    });
}

function engineer() {
  inquirer
    .prompt([
      {
        type: "input",
        name: "name",
        message: "What is the Engineer's Name?",
      },
      {
        type: "input",
        name: "id",
        message: "What is the Engineer's Employee ID?",
      },
      {
        type: "input",
        name: "email",
        message: "What is the Engineer's Email?",
      },
      {
        type: "list",
        name: "isGithub",
        message: "Is there a GitHub username to add for the Engineer?",
        choices: ["Yes.", "None."],
        default: "Intern",
      },
      {
        type: "input",
        name: "github",
        message: "What is the GitHub username?",
        when: (answers) => answers.isGithub === "Yes.",
      },
    ])
    .then((answers) => {
      const employee = new Engineer(
        answers.name,
        answers.id,
        answers.email,
        answers.github
      );
      employees.push(employee);
      roleSelect();
    });
}

function intern() {
  inquirer
    .prompt([
      {
        type: "input",
        name: "name",
        message: "What is the Intern's Name?",
      },
      {
        type: "input",
        name: "id",
        message: "What is the Intern's Employee ID?",
      },
      {
        type: "input",
        name: "email",
        message: "What is the Intern's Email?",
      },
      {
        type: "input",
        name: "school",
        message: "What is the Intern's school name?",
      },
      {
        type: "list",
        name: "isGithub",
        message: "Is there a GitHub username to add for the Intern?",
        choices: ["Yes.", "No."],
        default: "Yes.",
      },
      {
        type: "input",
        name: "github",
        message: "What is the GitHub username?",
        when: (answers) => answers.isGithub === "Yes.",
      },
    ])
    .then((answers) => {
      const employee = new Intern(
        answers.name,
        answers.id,
        answers.email,
        answers.school,
        answers.github
      );
      employees.push(employee);
      roleSelect();
    });
}

function done() {
  const HTMLoutput = generateHTML(employees)
 fs.writeFile("./dist/index.html", HTMLoutput, (err) =>
  err ? console.log(err) : console.log("Successfully created index.html!")
  );
}