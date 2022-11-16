// @collaps

//Generate Manager Card
function generateManager(manager) {
  return `
  <div class="card column">
  <header class="card-header has-background-primary">
    <p class="card-header-title has-text-white">
    ${manager.name}
    </p>
  </header>
  <div class="card">
      <div class="card-content">
        <div class="content">
          <h5 id="managerrole1">Manager</h5>
          <div id="manager">
              <h6 id="managerid1">Id: ${manager.id} </h6>
              <a href="mailto:${manager.email}">${manager.email}</a>
              <h6 id="managerofficenumber1">Office #: ${manager.officeNumber} </h6>
          </div>
        </div>
      </div>
    </div>
</div>
    `;


}

//Generate Engineer Card
function generateEngineer(engineer) {
  return `
  <div class="card column">
  <header class="card-header has-background-info">
    <p class="card-header-title has-text-white">
    ${engineer.name}
    </p>
  </header>
  <div class="card">
      <div class="card-content">
        <div class="content">
          <h5 id="managerrole1">Engineer</h5>
          <div id="manager">
              <h6 id="managerid1">Id: ${engineer.id} </h6>
              <a href="https://github.com/${engineer.github}" target="_blank">${engineer.github}</a>
          </div>
        </div>
      </div>
    </div>
</div>
    `;


}

//Generate Intern Card
function generateIntern(intern) {
  return `
  <div class="card column">
  <header class="card-header has-background-warning">
    <p class="card-header-title has-text-white">
    ${intern.name}
    </p>
  </header>
  <div class="card">
      <div class="card-content">
        <div class="content">
          <h5 id="managerrole1">Engineer</h5>
          <div id="manager">
              <h6 id="managerid1">Id: ${intern.id} </h6>
              <a href="mailto:${intern.email}">${intern.email}</a>
              <h6 id="internschool1">School: ${intern.school} </h6>
          </div>
        </div>
      </div>
    </div>
</div>
    `;


}

//function to generate the complete page
function generateCompletePage(employeeHTMLString) {
  // console.log(employeeHTMLString)
  return `
  <!DOCTYPE html>
  <html lang="en">
  
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Team Profile Generator</title>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.2/css/all.min.css">
    <link href="https://fonts.googleapis.com/css?family=Public+Sans:300i,300,500&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bulma@0.9.4/css/bulma.min.css">
    <link rel="stylesheet" href="style.css">
  </head>
  
  <body>
    <header>
          <nav class="navbar" role="navigation" aria-label="main navigation">
              <div class="navbar-brand">
                <a class="navbar-item" href="">
                  <img src="https://bulma.io/images/bulma-logo.png" width="112" height="28">
                </a>
              </div>
              <div id="navbarBasicExample" class="navbar-menu">
                </div>
              </div>
            </nav>
    </header>
      <main>
          <div class="card">
              <div class="card-content">
                <div class="content columns">
                      <!-- Employee Cards -->  
                      ${employeeHTMLString}
  
                  
                  
                </div>
              </div>
            </div>
      </main>
  </body>
  </html>
    `;
}

//prepare all data for Generation
function HTMLgen(data) {
  const htmlArray = [];
  console.log("data", data);

  // go role by role
  for (let i = 0; i < data.length; i++) {
    // console.log("doing", role )

    const currentEmployee = data[i];
    const role = currentEmployee.getRole();

    //Manager
    if (role === "Manager") {
      console.log("Now Generating:", role);
      const managerCard = generateManager(currentEmployee);
      htmlArray.push(managerCard);
    }

    //Engineer
    if (role === "Engineer") {
      console.log("Now Generating:", role);
      const engineerCard = generateEngineer(currentEmployee);
      htmlArray.push(engineerCard);
    }

    //Intern
    if (role === "Intern") {
      console.log("Now Generating:", role);
      const InternCard = generateIntern(currentEmployee);
      htmlArray.push(InternCard);
    }
  }

  //use the array to make one HTML string
  const employeeHTMLString = htmlArray.join("");

  //put it together
  const finalHTMLString = generateCompletePage(employeeHTMLString);
  return finalHTMLString;
}

//export of the HTMLgen to the main file
module.exports = HTMLgen;


