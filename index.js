// @collapse
//importing the required files
const inquirer = require("inquirer");
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const HTMLgen = require('./src/HTMLgen')
const validator = require('validator');
const fs = require("fs");

let ManagerO = {
    name: 'Manager',
    id: '1231234',
    email: 'manager@mail.com',
    officeNumber: '123134'
}

let EngineerO = {
    name: 'Engineer',
    id: '342432',
    email: 'engineer@mail.com',
    github: 'Egnineer'
}

let internO = {
    name: 'Intern',
    id: '1324123',
    email: 'intern@mail.com',
    school: 'UBC'

}

//devDoor to skip questions
const quickTeam = [ManagerO, EngineerO, internO];
const team = []

function devDoor(){
    team = quickTeam
    writeFile(team)
}

function init() {
  console.log("Starting...");
    managerQuestions();
    //  devDoor();
}

function addNextMember(){
    // console.log(team)
    inquirer
    .prompt([
      {
        type: "list",
        name: "employeeType",
        message: "Select an option: (Required)",
        choices: ["Add Engineer", "Add Intern", "Finish building the Team"],
        validate: (choiceSelection) => {
          if (choiceSelection) {
            return true;
          } else {
            return false;
          }
        },
      },
    ])
    .then((answers) => {
      const { employeeType } = answers;
      //scenario
      if (employeeType === "Add Engineer") {
        //Engineer Scenario
        engineerQuestions();
      } else if (employeeType === "Add Intern") {
        //Intern Scenario
        internQuestions();
      } else if (employeeType === "Finish building the Team") {
        //finish Scenario
        writeFile(team);
      }
    });
}

function managerQuestions() {
  inquirer
    .prompt([
      {
        type: "input",
        name: "managerName",
        message: "What is the Team Manager's Name? (Required)",
        validate: (managerNameInput) => {
          if (validator.isAlpha(managerNameInput,['en-US'])) {
            return true;
          } else {
            console.log("\n Name invalid, try again!");
            return false;
          }
        },
      },
      {
        type: "input",
        name: "managerId",
        message: "Enter your Employee Id (Required)",
        validate: (employeeIdInput) => {
          if (validator.isInt(employeeIdInput.toString())) {
            return true;
          } else {
            console.log("\n Employee ID is invalid, please try again");
            return false;
          }
        },
      },
      {
        type: "input",
        name: "managerEmail",
        message: "Enter your email: (Required)",
        validate: (emailInput) => {
          if (validator.isEmail(emailInput)) {
            return true;
          } else {
            console.log("\n invalid Email, please try again");
            return false;
          }
        },
      },
      {
        type: "input",
        name: "managerOfficeNumber",
        message: "Enter your Office Number: (Required)",
        validate: (officeNumberInput) => {
          if (validator.isInt(officeNumberInput.toString())) {
            return true;
          } else {
            console.log("\n Office Phone number invalid, Please try again");
            return false;
          }
        },
      },
    ])
    .then((answers) => {
      const { managerName, managerId, managerEmail, managerOfficeNumber } = answers;
      const manager = new Manager(
        managerName,
        managerId,
        managerEmail,
        managerOfficeNumber
      );
      team.push(manager);
 
      addNextMember();

     
    });
}

function engineerQuestions(){
    inquirer
    .prompt([
      {
        type: "input",
        name: "engineerName",
        message: "Enter the Engineer's Name (Required)",
        validate: (engineerNameInput) => {
            if (validator.isAlpha(engineerNameInput,['en-US'])) {
              return true;
            } else {
              console.log("\n Name invalid, try again!");
              return false;
            }
          },
      },
      {
        type: "input",
        name: "engineerId",
        message: "Enter the Engineer's Id (Required)",
        validate: (engineerIdInput) => {
            if (validator.isInt(engineerIdInput.toString())) {
              return true;
            } else {
              console.log("\n Employee ID is invalid, please try again");
              return false;
            }
          },
      },
      {
        type: "input",
        name: "engineerEmail",
        message: "Enter the Engineer's email (Required)",
        validate: (emailInput) => {
            if (validator.isEmail(emailInput)) {
              return true;
            } else {
              console.log("\n invalid Email, please try again");
              return false;
            }
          },
      },
      {
        type: "input",
        name: "engineerGithub",
        message: "Enter the Engineer's Github username (Required)",
        validate: (engineerGitHubInput) => {
          if (validator.isAlphanumeric(engineerGitHubInput,['en-US'])) {
            return true;
          } else {
            console.log("\n invalid Git Hub!");
            return false;
          }
        },
      },
    ])
    .then((answers) => {
      const { engineerName, engineerId, engineerEmail, engineerGithub } = answers;
      const engineer = new Engineer(
        engineerName,
        engineerId,
        engineerEmail,
        engineerGithub
      );
      team.push(engineer);

      //once the answers have been collected and passed into the object and a new instance of a object was created for this object, then the additional employee prompt is called
      addNextMember();

    });
}

function internQuestions() {
  inquirer
    .prompt([
      {
        type: "input",
        name: "internName",
        message: "Enter the Intern's Name (Required)",
        validate: (internNameInput) => {
            if (validator.isAlpha(internNameInput,['en-US'])) {
              return true;
            } else {
              console.log("\n Name invalid, try again!");
              return false;
            }
          },
      },
      {
        type: "input",
        name: "internId",
        message: "Enter the Intern's Id (Required)",
        validate: (internIDInput) => {
            if (validator.isInt(internIDInput.toString())) {
              return true;
            } else {
              console.log("\n Employee ID is invalid, please try again");
              return false;
            }
          },
      },
      {
        type: "input",
        name: "internEmail",
        message: "Enter the Intern's email (Required)",
        validate: (emailInput) => {
            if (validator.isEmail(emailInput)) {
              return true;
            } else {
              console.log("\n Invalid Email, please try again");
              return false;
            }
          },
      },
      {
        type: "input",
        name: "internSchool",
        message: "Enter the Intern's school name (Required)",
        validate: (internSchoolInput) => {
          if (validator.isAlpha(internSchoolInput,['en-US'])) {
            return true;
          } else {
            console.log("Invalid School Name");
            return false;
          }
        },
      },
    ])
    .then((answers) => {
      const { internName, internId, internEmail, internSchool } = answers;
      const intern = new Intern(
        internName,
        internId,
        internEmail,
        internSchool
      );
      team.push(intern);

      //once the answers have been collected and passed into the object and a new instance of a object was created for this object, then the additional employee prompt is called
      addNextMember();

      console.log(internName, internId, internEmail, internSchool);
    });
};

//function to write the final file based on the array team that has now all the team members
function writeFile(team) {
    // console.log("Finished team", team)
  const htmlFile = HTMLgen(team);

//   fs.writeFile("./dist/index.html", createHTMLFile, (err) => {
//     if (err) throw new Error(err);
//     console.log("index.html created!");
//   });
};



init();
