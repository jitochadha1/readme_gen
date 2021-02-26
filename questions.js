const questions = [
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
        name: 'installationInstructions',
        message: 'what are the installation instructions to your project?',
    },
    {
        type: 'input',
        name: 'usageInformation',
        message: 'what is the usage information of your project?',
    },
    {
        type: 'input',
        name: 'guidlines',
        message: 'what are the contribution guidlines of your project?',
    },
    {
        type: 'input',
        name: 'testInstructions',
        message: 'what are the test instructions of your project?',
    },
    {
        type: 'input',
        name: 'license',
        message: 'what license type is your project?',
        choices: ['MIT', 'Public Domain License', 'LGPL', 'Permissive', 'Copyleft', 'Proprietary']
    },
    {
        type: 'input',
        name: 'username',
        message: 'what is your Github username?',
    },
    {
        type: 'input',
        name: 'repo',
        message: 'what is your Github repository link?',
    },
    {
        type: 'input',
        name: 'email',
        message: 'what is your email address?',
    },
];

module.exports = questions;