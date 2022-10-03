// DONE: Include packages needed for this application
const inquirer = require('inquirer');
const { writeFile } = require('fs').promises;
var generateMarkdown = require('./utils/generateMarkdown')


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

// Licenses array with name, image url, license url
const licenses = [
    {
      licenseTitle: 'Apache License 2.0',
      badgeImg: 'https://img.shields.io/badge/License-Apache_2.0-blue.svg',
      badgeURL: 'https://opensource.org/licenses/Apache-2.0'
    },
    {
      licenseTitle: 'Boost Software License 1.0',
      badgeImg: 'https://img.shields.io/badge/License-Boost_1.0-lightblue.svg',
      badgeURL: 'https://www.boost.org/LICENSE_1_0.txt'
    },
     {
      licenseTitle: 'BSD 2-Clause "Simplified" License',
      badgeImg: 'https://img.shields.io/badge/License-BSD_2--Clause-orange.svg',
      badgeURL: 'https://opensource.org/licenses/BSD-2-Clause'
    },
    {
      licenseTitle: 'BSD 3-Clause "New" or "Revised" License',
      badgeImg: 'https://img.shields.io/badge/License-BSD_3--Clause-blue.svg',
      badgeURL:'https://opensource.org/licenses/BSD-3-Clause'
    },
    {
      licenseTitle: 'Creative Commons Zero v1.0 Universal',
      badgeImg: 'https://img.shields.io/badge/License-CC0_1.0-lightgrey.svg',
      badgeURL: 'http://creativecommons.org/publicdomain/zero/1.0/'
    },
    {
      licenseTitle: 'Eclipse Public License 2.0',
      badgeImg: 'https://img.shields.io/badge/License-EPL_1.0-red.svg',
      badgeURL: 'https://opensource.org/licenses/EPL-1.0'
    },
    {
      licenseTitle: 'GNU Affero General Public License v3.0',
      badgeImg: 'https://img.shields.io/badge/License-AGPL_v3-blue.svg',
      badgeURL: 'https://www.gnu.org/licenses/agpl-3.0'
    },
    {
      licenseTitle: 'GNU General Public License v3.0',
      badgeImg: 'https://img.shields.io/badge/License-GPLv3-blue.svg',
      badgeURL: 'https://www.gnu.org/licenses/gpl-3.0'
    },
    {
      licenseTitle: 'MIT License',
      badgeImg: 'https://img.shields.io/badge/License-MIT-yellow.svg',
      badgeURL: 'https://opensource.org/licenses/MIT'
    },
    {
      licenseTitle: 'Mozilla Public License 2.0',
      badgeImg: 'https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg',
      badgeURL: 'https://opensource.org/licenses/MPL-2.0'
    },
    {
      licenseTitle: 'The Unlicense',
      badgeImg: 'https://img.shields.io/badge/license-Unlicense-blue.svg',
      badgeURL: 'http://www.wtfpl.net/about/'
    }
  ]


// DONE: Create a function to write README file
// TODO: Implement export function from generateMarkdown to select licenceTitle,
// badgeURL and badgeImg
const generateREADME = ({ licenseTitle, licenseBadge, licenseURL, title, description, installation, usage, contribution, test }) =>

` # ${title}
[![License](${licenseBadge})](${licenseURL})

## Table of Contents

* [Description](#description)
* [Installation](#installation)
* [Usage](#usage)
* [Contributing](#contributing)
* [Tests](#tests)
* [License](#license)

## Description
${description}

## Installation
${installation}

## Usage
${usage}

## Contributing
${contribution}

## Tests
${test}

## License
${licenseTitle}
${licenseURL}

`;



// DONE: Create a function to initialize app
const init = () => {
    promptUser()
        // Use writeFile method imported from fs.promises to use promises instead of a callback function
        .then((answers) => writeFile('./generated-readme/README.md', generateREADME(answers)))
        .then(() => console.log('Successfully wrote to new README file'))
        .catch((err) => console.error(err));
};

// Function call to initialize app
init();
