// Write code to use inquirer to gather information about the development team members,
// and to create objects for each team member (using the correct classes as blueprints!)
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

// GIVING PATHS TO SEND DATA TO? 
const OUTPUT_DIR = path.resolve(__dirname, "output");
// C:\Users\cstanfi2\Downloads\Bootcamp\template\HTML_Template_Engine\output
const outputPath = path.join(OUTPUT_DIR, "team.html");
// C:\Users\cstanfi2\Downloads\Bootcamp\template\HTML_Template_Engine\output\team.html

// allowing use of htmlRenderer
const render = require("./lib/htmlRenderer");

// Array to hold employee objects
const employees = []


// Write code to use inquirer to gather information about the development team members,
// and to create objects for each team member (using the correct classes as blueprints!)
const promptUser = () =>
{    inquirer.prompt([
        {
            type: 'list',
            message: 'Employee Type?',
            name: 'type',
            choices: ['Manager', 'Engineer', 'Intern', 'Complete Team'],
        },
    ]).then((answers) => {
        console.log(answers)
        if (answers.type == 'Complete Team') {
            // If Team is complete, call function to build team and write HTML file
            createFinalTeam()
            
        }else if (answers.type == 'Engineer') {
            engineer()
        }else if (answers.type == 'Intern') {
            intern()
        }else if (answers.type == 'Manager') {
            manager()
        }
      })
} 


const  manager = () => 
    inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'What is their name?',
        },
        {
            type: 'input',
            name: 'id',
            message: 'What is their employee ID?',
        },
        {
            type: 'input',
            name: 'email',
            message: 'What is their email?',
        },
        {
            type: 'input',
            name: 'officeNumber',
            message: 'What is their Office Number?',
        },
    ]).then((answers) => {
        // creating a new Manager class and setting it to variable newManager w/ the users responses
        // then pushing that variable to the employees array
        // getting Manager class from Manager.js
     const newManager =   new Manager(answers.name, answers.id, answers.email, answers.officeNumber)
     employees.push(newManager)
     promptUser()
    })


const engineer = () =>
    inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'What is their name?',
        },
        {
            type: 'input',
            name: 'id',
            message: 'What is their employee ID?',
        },
        {
            type: 'input',
            name: 'email',
            message: 'What is their email?',
        },
        {
            type: 'input',
            name: 'github',
            message: 'What is their github username?',
        },
    ]).then((answers) => {
        const newEngineer =   new Engineer(answers.name, answers.id, answers.email, answers.github)
        employees.push(newEngineer)
        promptUser()
       })

    const intern = () =>
    inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'What is their name?',
        },
        {
            type: 'input',
            name: 'id',
            message: 'What is their employee ID?',
        },
        {
            type: 'input',
            name: 'email',
            message: 'What is their email?',
        },
        {
            type: 'input',
            name: 'school',
            message: 'What School did they go to?',
        },
    ]).then((answers) => {
        const newIntern =   new Intern(answers.name, answers.id, answers.email, answers.school)
        employees.push(newIntern)
        promptUser()
       })

    

promptUser()


// Writes the HTML Created to the output folder with file name team.html
// After the user has input all employees desired, call the `render` function (required
// above) and pass in an array containing all employee objects; the `render` function will
// generate and return a block of HTML including templated divs for each employee!
function createFinalTeam() {
    fs.writeFileSync(outputPath, render(employees))
    // render function comes from htmlRenderer - 
    //employees = array of all employee objects
    // calling render(employees), then taking that data and writing it to outputPath
    // outputPath = C:\Users\cstanfi2\Downloads\Bootcamp\template\HTML_Template_Engine\output\team.html
    // SO it's sending that information to the above path
    // console.log(employees)
    console.log('Successfully wrote to team.html and placed it in the output folder!')
}




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
