// DONE: Include packages needed for this application
const inquirer = require('inquirer');
// DONE: Create a function to write README file
const { writeFile } = require('fs').promises;
const generateMarkdown = require('./utils/generateMarkdown')


// Ask questions and then use data input to create html file
const promptUser = () => {
    return inquirer.prompt([
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
              'Apache 2.0',
              'AGPL',
              'BSD 3-Clause',
              'GPLv3',
              'MIT',
              'Unlicense'
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
    ]);
};



// DONE: Create a function to initialize app
function init () {
    promptUser()
        // Use writeFile method imported from fs.promises to use promises instead of a callback function
        .then((answers) => writeFile('./generated-readme/README.md', generateMarkdown(answers)))
        .then(() => console.log('Successfully wrote to new README file'))
        .catch((err) => console.error(err));
};

// Function call to initialize app
init();
