const { rejects } = require("assert");
const fs = require("fs");
const inquirer = require("inquirer");
const generateLogo = () => {
  return "logo.svg"; // "./examples"??
};
const path = require("path");

// write a file that takes the values from inquirer prompts and formats an SVG string

// Inquirer to ask questions (about logo)
const questions = [
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
];

function writeToFile(fileName, data) {
  return fs.writeFileSync(path.join(process.cwd(), fileName), data);
}

// Create file
function init() {
  inquirer
    .prompt(questions)
    .then((inquirerResponses) => {
      writeToFile("logo.svg", generateLogo({ ...inquirerResponses }));
    })
    .catch((err) => console.log("Unable to render SVG", err));
}
// Function call to initialize app

async function init() {
  var svgLogo = " ";
  var svgFile = "logo.svg";
  var text = " ";
  var textColor = " ";
  var shape = " ";
  var shapeColor = " ";

  return new Promise((resolve, reject) => {
    const answers = inquirer.prompt(questions);
    return writeToFile(svgFile, svgLogo);

    if (answers.text.length > 0 && answers.text.length < 4) {
      text = answers.text;
    } else {
      console.log("Invalid length! Enter 1 - 3 characters.");
    }

    textColor = answers["shape"];
    shape = answers["shape"];
    shapeColor = answers["shapeColor"];

    let userSvg = generateLogo(shape, shapeColor);

    const svg = new Svg();
    svg.setTextElement(text, textColor);
    svg.setTextElement(userSvg);
    svgLogo = svg.render();

    return writeToFile(svgFile, userSvg);
  });
}
