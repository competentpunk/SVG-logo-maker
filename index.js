const fs = require("fs");
const inquirer = require("inquirer");
// const generateLogo = require("./examples");
const generateLogo = () => {
  return "MARKDOWN";
};
const path = require("path");

// write a file that takes the values from inquirer prompts and formats an SVG string

// Inquirer to ask questions (about logo)
const questions = [
  {
    type: "list",
    name: "shape",
    message: "What shape do you want your logo?",
    choices: ["Circle", "Triangle", "Square"],
  },

  {
    type: "list",
    name: "shapeColor",
    message: "Enter HEX code for shape color:",
  },
  {
    type: "input",
    name: "text",
    message: "Enter up to three characters for logo text:",
  },
  {
    type: "input",
    name: "textColor",
    message: "Enter HEX code for text color:",
  },
];

function writeToFile(fileName, data) {
  return fs.writeFileSync(path.join(process.cwd(), fileName), data);
}

// Create file
function init() {
  inquirer.prompt(questions).then((inquirerResponses) => {
    writeToFile("Logo.svg", generateLogo({ ...inquirerResponses }));
  })
  .catch((err) => console.log('Unable to SVG', err));
}
// Function call to initialize app
init();

// Look up jest js for testing
