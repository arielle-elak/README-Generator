// DONE: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (!license) {
    return '';
  }
  let licenseURL = license.replace(' ','_')
  console.log('Licence Used: '+licenseURL);
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

${renderLicenseBadge(data.license)}

## Table of Contents

* [Description](#description)
* [Installation](#installation)
* [Usage](#usage)
* [Contributing](#contributing)
* [Tests](#tests)
* ${renderLicenseLink(data.license)}

## Description
${data.description}

## Installation
${data.installation}

## Usage
${data.usage}

## Contributing
${data.contribution}

## Tests
${data.test}

${renderLicenseSection(data.license)}

`;
}



module.exports = generateMarkdown;
