// DONE: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (!license) {
    return '';
  }
  return `![License](https://img.shields.io/badge/License-${license}-blue.svg)`;
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

function generateMarkdown({ title, description, installation, usage, contribution, test, license }) {

  `
${renderLicenseBadge(license)}

# ${title}


## Table of Contents

* [Description](#description)
* [Installation](#installation)
* [Usage](#usage)
* [Contributing](#contributing)
* [Tests](#tests)
* ${renderLicenseLink(license)}

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

${renderLicenseSection(license)}

`
};



module.exports = generateMarkdown;
