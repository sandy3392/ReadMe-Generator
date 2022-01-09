// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const { title } = require('process');
const generateMarkdown = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
const questions = [
    'what is the project title',
    'what is the project description',
    'what are installation instructions',
    'what is the usage information',
    'Enter the contribution guidelines: ',
    'github username',
    'github profile and how to reach out',
    'walkthroughvideo link',
    'Choose a license:',
    'email'
    
];
const promptUser = () => {
    return inquirer.prompt([
      {
        type: 'input',
        name: 'title',
        message: questions[0],
        validate: titleInput => {
          if (titleInput) {
            return true;
          } else {
            return false;
          }
        }
      },
      {
        type: 'input',
        name: 'projectdescription',
        message: questions[1],
        validate: projectdescInput => {
          if (projectdescInput) {
            return true;
          } else {
            return false;
          }
        }
      },
      {
        type: 'input',
        name: 'installationinstructions',
        message: questions[2],
        validate: instinstruc => {
            if (instinstruc) {
              return true;
            } else {
              return false;
            }
        }
      },
      {
        type: 'input',
        name: 'usageinformation',
        message: questions[3],
        validate: usageInput => {
          if (usageInput) {
            return true;
          } else {
            return false;
          }
        }
      },
      {
        type: 'input',
        name: 'contribution',
        message: questions[4],
        validate: contributionInput => {
          if (contributionInput) {
            return true;
          } else {
            return false;
          }
        }
      },
      {
        type: 'input',
        name: 'githubusername',
        message: questions[5],
        validate: githubuserInput => {
          if (githubuserInput) {
            return true;
          } else {
            return false;
          }
        }
      },
      {
        type: 'input',
        name: 'githubprofile',
        message: questions[6],
        validate: githubprofileinput => {
          if (githubprofileinput) {
            return true;
          } else {
            return false;
          }
        }
      },
      {
        type: 'input',
        name: 'videolink',
        message: questions[7],
        validate: videolinkInput => {
          if (videolinkInput) {
            return true;
          } else {
            return false;
          }
        }
      },
      {
        type: 'list',
        name: 'license',
        message: questions[8],
        choices: ['MIT', 'GPL','Apache','Mozilla Public License'],
      },
      {
        type: 'input',
        name: 'email',
        message: questions[9],
        validate: emailInput => {
          if (emailInput) {
            return true;
          } else {
            return false;
          }
        }
      },
    ]);
  };
// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    return new Promise((resolve, reject) => {
        fs.writeFile(fileName, data, err => {
          if (err) {
            reject(err);
            return;
          }
    
          resolve({
            ok: true,
            message: 'File created!'
          });
        });
      });
}

// TODO: Create a function to initialize app
function init() {
    promptUser()
        .then(userInputData => {
            console.log(userInputData);
            return generateMarkdown(userInputData);
        })
        .then(templateData => {
            return writeToFile('./README.md', templateData);
        })
        .then(writeFileResponse => {
            console.log(writeFileResponse);
        })
}

// Function call to initialize app
init();
