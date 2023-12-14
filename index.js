// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown");
const { error } = require("console");

// TODO: Create an array of questions for user input
const questions = [
  {
    type: "input", 
    name: "title",
    message: "project title?",

  },
  {
    type: "input", 
    name: "description",
    message: "describe your product?",

  },
  {
    type: "input", 
    name: "installation",
    message: "how do you install this project?",

  },
  {
    type: "input", 
    name: "usage",
    message: "how do you use this product?",

  },
  {
    type: "list", 
    name: "license",
    message: "what license are you using?",
    choices: ["MIT", "Apache License 2.0", "GNU V3.0", "BSD 2-Clause New", "Boost Software"]

  },
  {
    type: "input", 
    name: "contributers",
    message: "who worked on this project?",

  },
  {
    type: "input", 
    name: "tests",
    message: "how many tests have been run?",

  },
  {
    type: "input", 
    name: "questions",
    message: "any questions?",

  },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, (error,data) => {
    error? console.error(error): console.log("generate README");
  })
}

// TODO: Create a function to initialize app
async function init() {
 const answers = await inquirer.prompt(questions)
 console.log(answers);
 writeToFile("README.md", generateMarkdown(answers))
}

// Function call to initialize app
init();
