// DONE: Include packages needed for this application
const inquirer = require('inquirer');
const generateMarkdown = require('./generateMarkdown');

// DONE: Create an array of questions for user input
const questions = [
    'Project title:',
    'Describe your project briefly:',
    'Installation instructions:',
    'Usage information:',
    'Contribution guidelines:',
    'Test instructions:',
    'Licence options:',
    'Github username:',
    'Email address:'
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
