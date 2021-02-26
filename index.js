// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateReadme = require('./readme-template.js');

// TODO: Create an array of questions for user input
const promptUser = () => (
    inquirer.prompt([
        {
            type: 'input',
            name: 'title',
            message: 'what is the title of your project?',
        },
        {
            type: 'input',
            name: 'description',
            message: 'what is the description of your project?',
        },
        {
            type: 'input',
            name: 'installation instructions',
            message: 'what are the installation instructions to your project?',
        },
        {
            type: 'input',
            name: 'usage information',
            message: 'what is the usage information of your project?',
        },
        {
            type: 'input',
            name: 'contribution guidlines',
            message: 'what are the contribution guidlines of your project?',
        },
        {
            type: 'input',
            name: 'test instructions',
            message: 'what are the test instructions of your project?',
        },
        {
            type: 'input',
            name: 'license type',
            message: 'what license type is your project?',
            choices: ['MIT', 'Public Domain License', 'LGPL', 'Permissive', 'Copyleft', 'Proprietary']
        },
        {
            type: 'input',
            name: 'gihub username',
            message: 'what is your Github username?',
        },
        {
            type: 'input',
            name: 'email address',
            message: 'what is your email address?',
        },
    ])
);

// TODO: Create a function to write README file
function writeToFile(fileName, data) { }

// TODO: Create a function to initialize app
function init() { }

// Function call to initialize app
init();


promptUser()
    .then(userData => {
        console.log(userData);
        return generateReadme(userData);
    })
    .then(readmeData => {
        console.log(readmeData);
        // return generateReadme(readmeData);
        fs.writeFile('./README2.md', readmeData, err => {
            if (err) throw new Error(err);
            console.log('complete')
        });
    });

/*promptUser()
.then(promptProject)
.then(portfolioData => {
    console.log(portfolioData);
})
.then(projectAnswers=>console.log(projectAnswers))
.then(projectData => {
    portfolioData.projects.push(projectData);
    if(projectData.confirmAddProject) {
    return promptProject(portfolioData);
    } else {
    return portfolioData;
    }
});*/