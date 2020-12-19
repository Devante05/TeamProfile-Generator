const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");
const util = require('util');

const writeFileSync = util.promisify(fs.writeFile);

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");

const employee_array = [];

const EMP_TYPE = {
  Engineer: {
    constructor: Engineer,
    prompt: "What is your github?",
  },
  Manager: {
    constructor: Manager,
    prompt: "What is your officeNumber?",
  },
  Intern: {
      constructor: Intern,
      prompt: "What is your school name?"
  }
};

getEmployee("Intern")

function getEmployee(type) {

  inquirer
    .prompt([

      {
        name: "name",
        type: "input",
        message: "Name?",
      },
      {
        name: "id",
        type: "input",
        message: "ID?",
      },
      {
        name: "email",
        type: "input",
        message: "Email?",
      },
      {
        name: "parameter",
        type: "input",
        message: EMP_TYPE[type].prompt,
      },
      {
        name: "employeeType",
        type: "list",
        choices: ["Intern", "Engineer", "Manager", "No more Team members"],
        message: "What employee type are you?"
      },
    ])
    .then((response) => {
      const emp = new EMP_TYPE[type].constructor(
        response.name,
        response.id,
        response.email,
        response.parameter,
        
      );

     
     

    employee_array.push(emp);
      console.log(employee_array); // how do i move this 

     
     
    if (response.employeeType === "Engineer") {
        getEmployee("Engineer");
    } 
    if (response.employeeType === "Intern") {
        getEmployee("Intern");
    } 
    if (response.employeeType === "Manager") {
        getEmployee("Manager");
    }
});

    
}

for (i =0; i < employee_array.length; i++) {
   appendCard = document.getElementById(`cardAppend`)
   appendCard.innerHTML = internCard


}


const internCard =
`<div class="card employee-card">
<div class="card-header">
    <h2 class="card-title">${employee_array[i].response.name}</h2>
    <h3 class="card-title"><i class="fas fa-user-graduate mr-2"></i>{{ role }}</h3>
</div>
<div class="card-body">
    <ul class="list-group">
        <li class="list-group-item">ID:${employee_array[i].response.id}</li>
        <li class="list-group-item">Email: <a href="mailto:${employee_array[i].response.email}">${employee_array[i].response.email}</a></li>
        <li class="list-group-item">School: ${employee_array[i].response.school}</li>
    </ul>
</div>
</div> `
 
    const engineerCard = 
    `<div class="card employee-card">
    <div class="card-header">
        <h2 class="card-title">{{ name }}</h2>
        <h3 class="card-title"><i class="fas fa-glasses mr-2"></i>{{ role }}</h3>
    </div>
    <div class="card-body">
        <ul class="list-group">
            <li class="list-group-item">ID: {{ id }}</li>
            <li class="list-group-item">Email: <a href="mailto:{{ email }}">{{ email }}</a></li>
            <li class="list-group-item">GitHub: <a href="https://github.com/{{ github }}" target="_blank" rel="noopener noreferrer">{{ github }}</a></li>
        </ul>
    </div>
</div> `

    const managerCard = 
    `<div class="card employee-card">
    <div class="card-header">
        <h2 class="card-title">{{ name }}</h2>
        <h3 class="card-title"><i class="fas fa-mug-hot mr-2"></i>{{ role }}</h3>
    </div>
    <div class="card-body">
        <ul class="list-group">
            <li class="list-group-item">ID: {{ id }}</li>
            <li class="list-group-item">Email: <a href="mailto:{{ email }}">{{ email }}</a></li>
            <li class="list-group-item">Office number: {{ officeNumber }}</li>
        </ul>
    </div>
</div>`
console.log(internCard)


// Write code to use inquirer to gather information about the development team members,
// and to create objects for each team member (using the correct classes as blueprints!)

// After the user has input all employees desired, call the `render` function (required
// above) and pass in an array containing all employee objects; the `render` function will
// generate and return a block of HTML including templated divs for each employee!

// render(employee_array);


// After you have your html, you're now ready to create an HTML file using the HTML
// returned from the `render` function. Now write it to a file named `team.html` in the
// `output` folder. You can use the variable `outputPath` above target this location.
// Hint: you may need to check if the `output` folder exists and create it if it
// does not.

// HINT: each employee type (manager, engineer, or intern) has slightly different
// information; write your code to ask different questions via inquirer depending on
// employee type.

// HINT: make sure to build out your classes first! Remember that your Manager, Engineer,
// and Intern classes should all extend from a class named Employee; see the directions
// for further information. Be sure to test out each class and verify it generates an
// object with the correct structure and methods. This structure will be crucial in order
// for the provided `render` function to work! ```
