// Licenses array with name, image url, license url
const licenses = [
  {
    licenseName: 'Apache License 2.0',
    badgeImg: 'https://img.shields.io/badge/License-Apache_2.0-blue.svg',
    badgeURL: 'https://opensource.org/licenses/Apache-2.0'
  },
  {
    licenseName: 'Boost Software License 1.0',
    badgeImg: 'https://img.shields.io/badge/License-Boost_1.0-lightblue.svg',
    badgeURL: 'https://www.boost.org/LICENSE_1_0.txt'
  },
   {
    licenseName: 'BSD 2-Clause "Simplified" License',
    badgeImg: 'https://img.shields.io/badge/License-BSD_2--Clause-orange.svg',
    badgeURL: 'https://opensource.org/licenses/BSD-2-Clause'
  },
  {
    licenseName: 'BSD 3-Clause "New" or "Revised" License',
    badgeImg: 'https://img.shields.io/badge/License-BSD_3--Clause-blue.svg',
    badgeURL:'https://opensource.org/licenses/BSD-3-Clause'
  },
  {
    licenseName: 'Creative Commons Zero v1.0 Universal',
    badgeImg: 'https://img.shields.io/badge/License-CC0_1.0-lightgrey.svg',
    badgeURL: 'http://creativecommons.org/publicdomain/zero/1.0/'
  },
  {
    licenseName: 'Eclipse Public License 2.0',
    badgeImg: 'https://img.shields.io/badge/License-EPL_1.0-red.svg',
    badgeURL: 'https://opensource.org/licenses/EPL-1.0'
  },
  {
    licenseName: 'GNU Affero General Public License v3.0',
    badgeImg: 'https://img.shields.io/badge/License-AGPL_v3-blue.svg',
    badgeURL: 'https://www.gnu.org/licenses/agpl-3.0'
  },
  {
    licenseName: 'GNU General Public License v3.0',
    badgeImg: 'https://img.shields.io/badge/License-GPLv3-blue.svg',
    badgeURL: 'https://www.gnu.org/licenses/gpl-3.0'
  },
  {
    licenseName: 'MIT License',
    badgeImg: 'https://img.shields.io/badge/License-MIT-yellow.svg',
    badgeURL: 'https://opensource.org/licenses/MIT'
  },
  {
    licenseName: 'Mozilla Public License 2.0',
    badgeImg: 'https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg',
    badgeURL: 'https://opensource.org/licenses/MPL-2.0'
  },
  {
    licenseName: 'The Unlicense',
    badgeImg: 'https://img.shields.io/badge/license-Unlicense-blue.svg',
    badgeURL: 'http://www.wtfpl.net/about/'
  }
]

// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {


}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

`;
}

module.exports = generateMarkdown;
