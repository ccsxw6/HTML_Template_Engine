// Write code to use inquirer to gather information about the development team members,
// and to create objects for each team member (using the correct classes as blueprints!)
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");


const OUTPUT_DIR = path.resolve(__dirname, "output");

const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");

const employees = []

const promptUser = () =>
{    inquirer.prompt([
        {
            type: 'list',
            message: 'Employee Type?',
            name: 'type',
            choices: ['Manager', 'Engineer', 'Intern', 'Finished'],
        },
    ]).then((answers) => {
        console.log(answers)
        if (answers.type == 'Finished') {
            makeTeam()
            
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


function makeTeam() {
    fs.writeFileSync(outputPath, render(employees))
    console.log('Successfully wrote to team.html and placed it in the output folder!')
}





