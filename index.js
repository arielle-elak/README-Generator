// DONE: Include packages needed for this application
const inquirer = require('inquirer');
const generateMarkdown = require('/.utils/generateMarkdown');
const fs = require('fs');

// DONE: Create an array of questions for user input as nested object for .map loop
const questions = [
    {
        type: 'input',
        message: 'Project title:',
        name: 'title'
    },
    {
        type: 'input',
        message: 'Describe your project briefly:',
        name: 'description'
    },
    {
        type: 'input',
        message: 'Installation instructions:',
        name: 'installation'
    },
    {
        type: 'input',
        message: 'Usage information:',
        name: 'usage'
    },
    {
        type: 'input',
        message: 'Contribution guidelines:',
        name: 'contribution'
    },
    {
        type: 'input',
        message: 'Test instructions:',
        name: 'test'
    },
    {
        type: 'checkbox',
        message: 'License options:',
        choices: [
            'Apache License 2.0',
            'GNU General Public License v3.0',
            'MIT License',
            'BSD 2-Clause "Simplified" License',
            'BSD 3-Clause "New" or "Revised" License',
            'Boost Software License 1.0',
            'Creative Commons Zero v1.0 Universal',
            'Eclipse Public License 2.0',
            'GNU Affero General Public License v3.0',
            'GNU Lesser General Public License v2.1',
            'Mozilla Public License 2.0',
            'The Unlicense'
        ],
        name: 'license'
    },
    {
        type: 'input',
        message: 'Github username:',
        name: 'username'
    },
    {
        type: 'input',
        message: 'Email address:',
        name: 'email'
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// DONE: Create a function to initialize app
// Ask questions from questions array in for-each loop?
function init() {

    inquirer
    .prompt([
      {
            type: this.type,
            message: this.message,
            choices: this.choices,
            name: this.name,
      },
    ])
    .then((data) => {
        const filename = `${data.name.toLowerCase().split(' ').join('')}.json`;

        fs.writeFile(filename, JSON.stringify(data, null, '\t'), (err) =>
          err ? console.log(err) : console.log('Success!')
        );
      });
};

// Function call to initialize app
init();
