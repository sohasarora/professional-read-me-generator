// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");
const fs = require("fs");

// TODO: Create an array of questions for user input
const questions = [
  {
    name: "username",
    message: "What is your GitHub username?",
  },
  { name: "email", message: "What is your email address?" },
  { name: "projectName", message: "What is your project's name?" },
  {
    name: "description",
    message: "Please right a short description of your project?",
  },
  {
    type: "list",
    name: "license",
    message: "What kind of license should your project have?",
    choices: ["MIT", "APACHE 2.0", "GPL 3.0", "BSD 3", "None"],
  },
  {
    type: "checkbox",
    name: "technologies",
    message: "What technologies did you use for this project?",
    choices: ["HTML", "CSS", "JavaScript", "JQuery", "Bootstrap", "Node.js"],
  },
  { name: "deployedLink", message: "What's your deployed link?" },

  {
    name: "installation",
    message: "What command should be run to install dependencies?",
    default: "npm i",
  },
  {
    name: "tests",
    message: "What command should be run to run tests?",
    default: "npm test",
  },
  {
    name: "usage",
    message: "What does the user need to know about the using the repo?",
  },
  {
    name: "contributions",
    message: "What does the user need to know about contributing to the repo?",
  },
  { name: "linkedin", message: "Link your LinkedIn Profile" },
  { name: "portfolio", message: "Link your Portfolio Site" },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  fs.writeFile(`${fileName}_README.md`, data, (err) =>
    err ? console.error(err) : console.log("Success!")
  );
}

// TODO: Create a function to initialize app
function init() {
  inquirer.prompt(questions).then((answers) => {
    const { username } = answers;
    writeToFile(username, generateMarkdown(answers));
  });
}

// Function call to initialize app
init();
