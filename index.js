const fs = require("fs");
const inquirer = require("inquirer");
// const generateLogo = require("./examples");
const generateLogo = () => {
      return "MARKDOWN";
}
const path = require("path");

// write a file that takes the values from inquirer prompts and formats an SVG string

// Inquirer to ask questions (about logo)
const questions = [
      {
        type: "list",
        name: "color",
        message: "What color do you want your logo?",
        choices: ["Blue", "Red", "Yellow"]
      },
      {
        type: "list",
        name: "shape",
        message: "What shape?",
        choices: ["Circle", "Triangle", "Square"]
      },
];

// Circle
// <circle cx="25" cy="75" r="20" stroke="red" fill="transparent" stroke-width="5"/>

// Triangle 
// <polygon points="50 160 55 180 70 180 60 190 65 205 50 195 35 205 40 190 30 180 45 180"
//       stroke="green" fill="transparent" stroke-width="5"/>

// Square
// <rect x="10" y="10" width="30" height="30" stroke="black" fill="transparent" stroke-width="5"/>

function writeToFile(fileName, data) {
      return fs.writeFileSync(path.join(process.cwd(), fileName), data);
};

// Create file
function init() {
 inquirer.prompt(questions).then((inquirerResponses) => {
        writeToFile("Logo.svg", generateLogo({ ...inquirerResponses }));
      });
};
    
// Function call to initialize app
init();

// Look up jest js for testing