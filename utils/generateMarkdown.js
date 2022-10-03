const licenses = [
  ['Apache License 2.0', 'https://img.shields.io/badge/License-Apache_2.0-blue.svg','https://opensource.org/licenses/Apache-2.0'],
  ['Boost Software License 1.0','https://img.shields.io/badge/License-Boost_1.0-lightblue.svg','https://www.boost.org/LICENSE_1_0.txt'],
  ['BSD 2-Clause "Simplified" License','https://img.shields.io/badge/License-BSD_3--Clause-blue.svg,','https://opensource.org/licenses/BSD-3-Clause'],
  ['BSD 3-Clause "New" or "Revised" License','https://img.shields.io/badge/License-BSD_3--Clause-blue.svg','https://opensource.org/licenses/BSD-3-Clause'],
  ['Creative Commons Zero v1.0 Universal','https://img.shields.io/badge/License-CC0_1.0-lightgrey.svg','http://creativecommons.org/publicdomain/zero/1.0/'],
  ['Eclipse Public License 2.0','https://img.shields.io/badge/License-EPL_1.0-red.svg','https://opensource.org/licenses/EPL-1.0'],
  ['GNU Affero General Public License v3.0','https://img.shields.io/badge/License-AGPL_v3-blue.svg','https://www.gnu.org/licenses/agpl-3.0'],
  ['GNU General Public License v3.0','https://img.shields.io/badge/License-GPLv3-blue.svg','https://www.gnu.org/licenses/gpl-3.0'],
  ['MIT License','https://img.shields.io/badge/License-MIT-yellow.svg','https://opensource.org/licenses/MIT'],
  ['Mozilla Public License 2.0','https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg','https://opensource.org/licenses/MPL-2.0'],
  ['The Unlicense','https://img.shields.io/badge/license-Unlicense-blue.svg','http://www.wtfpl.net/about/'],
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
