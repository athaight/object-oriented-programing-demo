// GIVEN a command-line application that accepts user input
console.clear();
const inquirer = require('inquirer');
// const fs = require('fs');
// const Manager = require("./lib/manager");
// const Engineer = require("./lib/engineer");
// const Intern = require("./lib/intern");
// const Employee = require("./lib/employee");
const Team = require("./lib/team")
const fullTeam = []

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

// inquirer
//     .prompt([
//         {
//             type: 'list',
//             name: 'exployeeType',
//             message: "What role would you like to create for?",
//             choices: ["Create entire Team?", "Create Manager", "Create Engineer", "Create Intern" ],
//             validate: (value) => {
//                 if(value) {
//                     return true;
//                 } else {
//                     return "Value is needed to continue.";
//                 }
//             },
//         },
//     ])
entireTeam();
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
    name: 'managerId',
    message: "What is the Manager's Employee ID?",
  },
  {
    type: 'input',
    name: 'managerEmail',
    message: "What is the Manager's Email?",
  },
  {
    type: 'input',
    name: 'officeNumber',
    message: "What is the Managers's Office Number?",
  },
  {
    type: 'input',
    name: 'engineerName',
    message: "What is the Engineer's Name?",
  },
  {
    type: 'input',
    name: 'engineerId',
    message: "What is the Engineer's Employee ID?",
  },
  {
    type: 'input',
    name: 'engineerEmail',
    message: "What is the Engineer's Email?",
  },
  {
    type: 'input',
    name: 'internName',
    message: "What is the Intern's Name?",
  },
  {
    type: 'input',
    name: 'internId',
    message: "What is the Intern's Employee ID?",
  },
  {
    type: 'input',
    name: 'internEmail',
    message: "What is the Intern's Email?",
  },
  // {
  //     type: 'list',
  //     name: 'intern',
  //     message: "Is there an Intern to add?",
  //     choices: ["Intern", "None"],
  //     default: 'Intern',
  //   },
    {
      type: 'input',
      name: 'school',
      message: "What is the intern's school?",
      // when: (answers) => answers.Intern === "Intern"
    },
])

.then((answers) => {
  const team = new Team (
    answers.managerName,
    answers.managerId,
    answers.managerEmail,
    answers.officeNumber,
    answers.managerGitHib,
    answers.engineerName,
    answers.engineerId,
    answers.engineerEmail,
    answers.engineerGitHib,
    answers.internName,
    answers.internId,
    answers.internEmail,
    answers.internGitHib,
  );
    fullTeam.push(team);
});
}

function manager(){
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
        type: 'list',
        name: 'managerGitHub',
        message: "Is there a GitHub username to add for the Manager?",
        choices: ["Intern", "None"],
        default: 'Intern',
      },
      {
        type: 'input',
        name: 'ManaGitHub',
        message: "What is the GitHub username?",
        when: (answers) => answers.Intern === "managerGitHub"
      },
  ])
  }

function engineer(){
inquirer 
  .prompt([
    {
      type: 'input',
      name: 'engineerName',
      message: "What is the Engineer's Name?",
    },
    {
      type: 'input',
      name: 'engineerId',
      message: "What is the Engineer's Employee ID?",
    },
    {
      type: 'input',
      name: 'engineerEmail',
      message: "What is the Engineer's Email?",
    },
    {
      type: 'list',
      name: 'engineerGitHub',
      message: "Is there a GitHub username to add for the Engineer?",
      choices: ["Intern", "None"],
      default: 'Intern',
    },
    {
      type: 'input',
      name: 'EngiGitHub',
      message: "What is the GitHub username?",
      when: (answers) => answers.Intern === "engineerGitHub"
    },
])
}

function intern(){
  inquirer
  .prompt([
    {
      type: 'input',
      name: 'internName',
      message: "What is the Intern's Name?",
    },
    {
      type: 'input',
      name: 'internId',
      message: "What is the Intern's Employee ID?",
    },
    {
      type: 'input',
      name: 'internEmail',
      message: "What is the Intern's Email?",
    },
    {
      type: 'list',
      name: 'internGitHub',
      message: "Is there a GitHub username to add for the Intern?",
      choices: ["Intern", "None"],
      default: 'Intern',
    },
    {
      type: 'input',
      name: 'IntGitHub',
      message: "What is the GitHub username?",
      when: (answers) => answers.Intern === "internGitHub"
    },

// {
//   type: 'list',
//   name: 'Intern',
//   message: "Is there an Intern to add?",
//   choices: ["Intern", "None"],
//   default: 'Intern',
// },
// {
//   type: 'input',
//   name: 'school',
//   message: "What school?",
//   when: (answers) => answers.Intern === "Intern"
// },
])
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
