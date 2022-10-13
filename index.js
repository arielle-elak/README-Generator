// DONE: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');


// Ask questions and then use data input to create html file
const prompts = [
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
];


// TODO: Create a function to write README file
function writeREADME(file, data) {
  return fs.writeFileSync(file, data);
}

// Function call to initialize app
function init() {
  inquirer.prompt(prompts)
    .then((answers) => {

  })
}



init();
