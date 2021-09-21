console.clear();
const inquirer = require("inquirer");
const fs = require('fs');
const Manager = require("./lib/manager");
const Engineer = require("./lib/engineer");
const Intern = require("./lib/intern");
const managerInfo = [];
const engineerInfo = [];
const internInfo = [];

// Team idea (reconsidering, but keeping in case, will remove later if not needed)
// const Team = require("./lib/team")
// const fullTeam = []

//   `<!DOCTYPE html>
// <html lang="en">
// <head>
//   <meta charset="UTF-8">
//   <meta http-equiv="X-UA-Compatible" content="ie=edge">
//   <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css">
//   <title>Document</title>
// </head>
// <body>
//   <div class="jumbotron jumbotron-fluid">
//   <div class="container">
//     <h1 class="display-4">Hi! My name is ${answers.name}</h1>
//     <p class="lead">I am from ${answers.location}.</p>
//     <h3>Example heading <span class="badge badge-secondary">Contact Me</span></h3>
//     <ul class="list-group">
//       <li class="list-group-item">My GitHub username is ${answers.github}</li>
//       <li class="list-group-item">LinkedIn: ${answers.linkedin}</li>
//     </ul>
//   </div>
// </div>
// </body>
// </html>
// `;
// }
// const generateEmployee = (answers) => `
//     ${answers.employeeType}
// `;


roleSelect();
function roleSelect() {
  inquirer
    .prompt([
      {
        type: "list",
        name: "role",
        message: "What role would you like to create for?",
        choices: ["Manager", "Engineer", "Intern", "Done"],
        default: "Engineer",
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

// if (roleSelect().choices === 'Manager'){
//   return manager();
// }

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
      const manager = new Manager(
        answers.name,
        answers.id,
        answers.email,
        answers.officeNumber,
        answers.github
      );
      managerInfo.push(manager);
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
      const engineer = new Engineer(
        answers.name,
        answers.id,
        answers.email,
        answers.github
      );
      engineerInfo.push(engineer);
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
        message: "What is the Intern's school name?"
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
      const intern = new Intern(
        answers.name,
        answers.id,
        answers.email,
        answers.school,
        answers.github
      );
      internInfo.push(intern);
      roleSelect();
    });
}

function done(){
  let employeeInfo = [...managerInfo, ...engineerInfo, ...internInfo];
  for (var i = 0; i < employeeInfo.length; ++i) {
    console.log(employeeInfo);
    console.log(JSON.stringify(employeeInfo));
  }
    fs.writeFile('./dist/index.html', employeeInfo, (err) =>
    err ? console.log(err) : console.log('Successfully created index.html!'));
}
  
    // } else {
  //   return console.log("Ya gotta do something man, can't just sit there...")}
  // };
