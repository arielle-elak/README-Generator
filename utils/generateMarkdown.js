// DONE: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
// If there are spaces in the license title, replace them with underscores for proper URL format
function renderLicenseBadge(license) {
  if (!license) {
    return '';
  }
  let licenseURL = license.replace(' ','_')
  // console.log('Licence Used: '+licenseURL);
  return `![License](https://img.shields.io/badge/License-`+licenseURL+`-blue.svg)`;
}

// DONE: Create a function that returns the license link (to the section link within the HTML document)
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (!license) {
    return '';
  }
  return `[License](#license)`
}

// DONE: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (!license) {
    return '';
  }
  return `## License \n
This GitHub repository utilizes the ${license} License.`;
}

// DONE: Create a function to generate markdown for README

function generateMarkdown(data) {

  return `# ${data.title}
by ${data.username}

${renderLicenseBadge(data.license)}

## Description
${data.description}

## Table of Contents

* [Installation](#installation)
* [Usage](#usage)
* [Contributing](#contributing)
* [Tests](#tests)
* ${renderLicenseLink(data.license)}
* [Questions and Contact](#questions_and_contact)

## Installation
${data.installation}

## Usage
${data.usage}

## Contributing
${data.contribution}

## Tests
${data.test}

${renderLicenseSection(data.license)}

## Questions and Contact
Have questions about this project? You can email me directly at [${data.email}](mailto:${data.email}).

`;
}



module.exports = generateMarkdown;
