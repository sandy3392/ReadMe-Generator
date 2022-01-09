const fs = require('fs'); 

function renderLicenseLink(license) {
  if(license == 'MIT'){
    return 'This project is licensed under MIT license. https://opensource.org/licenses/MIT'; 
  } else if (license == 'GPL'){
    return 'This project is licensed under GPL license. https://www.gnu.org/licenses/licenses.en.html'; 
  } else if (license == 'Apache'){
    return 'This project is licensed under Apache. https://www.apache.org/licenses/LICENSE-2.0'; 
  } else if (license == 'Mozilla Public License'){
    return 'This project is licensed under Mozilla Public License. https://www.mozilla.org/en-US/MPL/'; 
  }
}
// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {

  return `## License
  ### ©️2022
 
  ${renderLicenseLink(license)}
  `;
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  ## Description
  ${data.projectdescription}

  ## Table Of Contents
  * [Installation](#Installation)
  * [Usage](#Usage)
  * [Contribution](#Contribution)
  * [Testing](#Testing)
  * [License](#License)
  * [GitHub](#GitHub)
  
  ## Installation
  ${data.installationinstructions}
  ## Usage
  ${data.usageinformation}
  ## Contribution
  ${data.contribution}
  ## Testing
  ${data.test}

  ## GitHub 
  ${data.githubusername}
  ${data.githubprofile}
  If you have any Questions please email me at ${data.email}
  
  ##Recorded Video
  ${data.videolink}

  ##License 
  ${renderLicenseSection(data.license)}

`;
}

module.exports = generateMarkdown;
