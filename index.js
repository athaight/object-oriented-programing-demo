// GIVEN a command-line application that accepts user input
console.clear();
const inquirer = require('inquirer');
const fs = require('fs');
const Manager = require("./lib/Manager");
const Engineer = require("./lib/engineer");
const Intern = require("./lib/Intern");
const Employee = require("./lib/employee");


// WHEN I click on an email address in the HTML
// THEN my default email program opens and populates the TO field of the email with the address
// WHEN I click on the GitHub username
// THEN that GitHub profile opens in a new tab
// WHEN I enter the team manager’s name, employee ID, email address, and office number
// THEN I am presented with a menu with the option to add an engineer or an intern or to finish building my team
// WHEN I select the engineer option
// THEN I am prompted to enter the engineer’s name, ID, email, and GitHub username, and I am taken back to the menu
// WHEN I select the intern option
// THEN I am prompted to enter the intern’s name, ID, email, and school, and I am taken back to the menu
// WHEN I decide to finish building my team
// THEN I exit the application, and the HTML is generated
// const { example } = require('yargs');
// const generateHTML = (answers) =>
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
// const generateEmployee = (answers) => `
//     ${answers.employeeType}
// `;


// WHEN I start the application
// THEN I am prompted to enter the team manager’s name, employee ID, email address, and office number
inquirer
    .prompt([
        {
            type: 'list',
            name: 'exployeeType',
            message: "What role would you like to create for?",
            choices: ["Create entire Team?", "Create Manager", "Create Engineer", "Create Intern" ],
            validate: (value) => {
                if(value) {
                    return true;
                } else {
                    return "Value is needed to continue.";
                }
            },
        },
    ])

function entireTeam(){
inquirer
.prompt([
    {
    type: 'input',
    name: 'managerName',
    message: "What is the Managers's Name?",
  },
  {
    type: 'input',
    name: 'ManagerId',
    message: "What is the Manager's Employee ID?",
  },
  {
    type: 'input',
    name: 'ManagerEmail',
    message: "What is the Manager's Email?",
  },
  {
    type: 'input',
    name: 'officeNumber',
    message: "What is the Managers's Office Number?",
  },
  {
    type: 'input',
    name: 'employeeName',
    message: "What is the Employee's Name?",
  },
  {
    type: 'input',
    name: 'employeeId',
    message: "What is the Employees's Employee ID?",
  },
  {
    type: 'input',
    name: 'employeeEmail',
    message: "What is the Manager's Email?",
  },
  {
    type: 'list',
    name: 'engineerIntern',
    message: "Is this an Engineer or and Intern?",
    choices: ["Engineer", "Intern", "None"],
    validate: (value) => {
        if (value) {
            return true;
        } else {
            return "Value is needed to continue.";
        }
    }
}
])

function manager(){
  inquirer 
    .prompt([
    {
      type: 'input',
      name: 'github',
      message: "What is the Engineer's GitHub?",
    },
  ])
  }

function engineer(){
inquirer 
  .prompt([
  {
    type: 'input',
    name: 'github',
    message: "What is the Engineer's GitHub?",
  },
])
}

function intern(){
  inquirer
  .prompt([
{
  type: 'list',
  name: 'Intern',
  message: "Is there an Intern to add?",
  choices: ["Intern", "None"],
  default: 'Intern',
},
{
  type: 'input',
  name: 'school',
  message: "What school?"
},
])
}
}

          //  .then((answers) => {
          //   if(answers.engineerIntern === "None"){
          //   const teamData = generateTeam(answers);
          //   fs.writeFile("index.html", teamData, (err) =>
          //   err ? console.log(err) : console.log("Sucessfully created manager.html"))
          //   } else if (answers.engineerIntern === "Engineer"){
          //     return 
        
          //     .then((answers) => {
          //       if(answers.Intern === "None"){
          //       const teamDataNoIntern = generateTeam(answers);
          //       fs.writeFile("index.html", teamDataNoIntern, (err) =>
          //       err ? console.log(err) : console.log("Sucessfully created inedx.html"))
             
          // } else {
          //     return console.log("Ya gotta do something man, can't just dit there...");
          // }})}})}})
