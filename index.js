// TODO: Include packages needed for this application
const fs = require('fs');
const generateReadme = require('./readme-template.js');
const promptUser = require('./prompt-user.js');

// TODO: Create a function to write README file
function writeToFile(fileName, readmeData) {
    return fs.writeFile(fileName, readmeData, err => {
        if (err) throw new Error(err);

        console.log('Complete!')
    });
}

// TODO: Create a function to initialize app
function init() {
    promptUser()
        .then(userData => {
            console.log(userData);
            return generateReadme(userData);
        })
        .then(readmeData => {
            console.log(readmeData);
            // return generateReadme(readmeData);
            writeToFile('./README2.md', readmeData);
        });
}

async function asyncInit() {
    const userData = await promptUser()
    console.log(userData);

    const readmeData = await generateReadme(userData);
    console.log(readmeData);
    
    writeToFile('./README.md', readmeData);
}

// Function call to initialize app
asyncInit();


