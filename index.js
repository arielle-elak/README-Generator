// DONE: Include packages needed for this application
const inquirer = require('inquirer');
const { writeFile } = require('fs').promises;


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
    ]);
};

// TODO: Create a function to write README file
const generateREADME = ({ title }) =>
    ` # ${title}
    Here is the content of the README
    `;

// DONE: Create a function to initialize app
const init = () => {
    promptUser()
      // Use writeFile method imported from fs.promises to use promises instead of
      // a callback function
      .then((answers) => writeFile('./generated-readme/README.md', generateREADME(answers)))
      .then(() => console.log('Successfully wrote to new README file'))
      .catch((err) => console.error(err));
};

// Function call to initialize app
init();
