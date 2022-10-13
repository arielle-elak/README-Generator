// DONE: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');


// Ask questions and then use data input to create html file
const prompts = [
  {
    type: 'input',
    message: 'Your project title:',
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
    message: 'What is the intended use and flow of your project?',
    name: 'usage'
  },
  {
    type: 'input',
    message: 'How can others contribute to your project?',
    name: 'contribution'
  },
  {
    type: 'input',
    message: 'How to initiate a test of your project:',
    name: 'test'
  },
  {
    type: 'list',
    message: 'Select a license.\n Not sure which one to use? \nVisit https://choosealicense.com/ for assistance.',
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
    message: 'What is your github username?',
    name: 'username'
  },
  {
    type: 'input',
    message: 'What email address can users send questions to?',
    name: 'email'
  }
];


// DONE: Create a function to write README file
function writeREADME(file, data) {
  return fs.writeFileSync(file, data);
}

// Create function to initialize the app and start asking questions, then write the file
// Using rest function to cycle through all answers as data set instead of declaring them implicitly
function init() {
  inquirer.prompt(prompts)
    .then((answers) => {
      writeREADME('./generated-readme/README.md', generateMarkdown({ ...answers }));
      console.log("Your README file is ready in the generated-readme folder!");
    });
};

// Function call to initialize app
init();
