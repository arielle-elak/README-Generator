// DONE: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// DONE: Create a function to initialize app
// Ask questions and then use data input to create html file
function init() {
    inquirer
        .prompt([
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
                type: 'list',
                message: 'Select a Licence.\n Not sure which one to use? \nVisit https://choosealicense.com/ for assistance.',
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
        ])

        .then((data) => {
            const filename = `readme.json`;

            fs.writeFile(filename, JSON.stringify(data, null, '\t'), (err) =>
            err ? console.log(err) : console.log('Success!')
            );
            console.log(`License to pass: ${data.license}`)
            var license = `${ data.license }`;
            generateMarkdown(license);
        });
};

// Function call to initialize app
init();
