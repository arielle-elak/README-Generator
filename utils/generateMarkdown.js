// DONE: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (!license) {
    return '';
  }
  return `![License](https://img.shields.io/badge/License-${license}-blue.svg)`;
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (!license) {
    return '';
  }
  return `[License](#license)`
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (!license) {
    return '';
  }
    return licenseURL;
}

// TODO: Create a function to generate markdown for README





const generateMarkdown = ({ title, description, installation, usage, contribution, test, licence }) =>

renderLicenseSection(license);
renderLicenseLink(license);
renderLicenseBadge(license)

` # ${title}


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
}



module.exports = generateMarkdown;
