const inquirer = require('inquirer');
const questions = require('./questions');

const promptUser = () => inquirer.prompt(questions);

module.exports = promptUser;