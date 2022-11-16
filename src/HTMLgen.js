// @collapse

//Generate Manager Card
function generateManager(manager) {

    return `
    <div class="col-3 s12 m12 l4">
        <div class="card">
        <div class="card-top">
            <img src="images/manager.png" />
            <h3 class="card-title" id="managername1">${manager.name} </h3>   
            <h5 id="managerrole1">Manager</h5>   
        </div>
            <div id="manager">
                <h6 id="managerid1">Id: ${manager.id} </h6>
                <a href="mailto:${manager.email}">${manager.email}</a>
                <h6 id="managerofficenumber1">Office #: ${manager.officeNumber} </h6>
            </div>
        </div>
    </div>
    `;
}


//Generate Engineer Card
function generateEngineer(engineer) {
    return `
    <div class="col-3 s12 m12 l4">
        <div class="card">
        <div class="card-top">
                <img src="images/engineer.png" />
                <h3 class="card-title" id="engineername1">${engineer.name} </h3>  
                <h5 id="engineerrole1">Engineer </h5>
            </div>
            <div id="engineer">
                <h6 id="engineerid1">Id: ${engineer.id} </h6>
                <a href="mailto:${engineer.email}">${engineer.email}</a>
                <div>
                <a href="https://github.com/${engineer.github}" target="_blank">${engineer.github}</a>
                </div>
            </div>
        </div>
    </div>
    `;

}


//Generate Intern Card
function generateIntern(intern) {
    return `
    <div class="col-3 s12 m12 l4">
        <div class="card">
        <div class="card-top">
                <img src="images/student.png" />
                <h3 class="card-title" id="internname1">${intern.name}</h3>
                <h5 id="internrole1">Intern</h5>
             </div>
            <div id="engineer">
                <h6 id="internid1">Id: ${intern.id}</h6>
                <a href="mailto:${intern.email}">${intern.email}</a>
                <h6 id="internschool1">School: ${intern.school} </h6>
            </div>
        </div>
    </div>
    `;

}


//function to generate the complete page
function generateCompletePage(employeeHTMLString) {
    return`
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
            <div class="jumbotron jumbotron-fluid">
                <div class="container">
                    <h1 class="display-6">My Team</h1>
                </div>
            </div>
      </header>
        <main>
            <div class="container" >
            <div class="row" id="employees">
                    <!-- Employee Cards -->
                    ${employeeHTMLString}
            </div>
            </div>
        </main>
  </body>
  </html>
    `
}


//prepare all data for Generation
function HTMLgen(data) {

    const htmlArray = []
    console.log("data",data);

    // go role by role
    for (let i = 0; i < data.length; i++) {

        //Manager
        if(data[i].getRole === "Manager") {
            const managerCard = generateManager(data[i])
            htmlArray.push(managerCard);

        }

        //Engineer
        if (data[i].getRole === "Engineer") {
            const engineerCard = generateEngineer(data[i]);
            htmlArray.push(engineerCard);
        }

        //Intern
        if (data[i].getRole === "Intern") {
            const InternCard = generateIntern(data[i]);
            htmlArray.push(InternCard);
        }

    }

    //use the array to make one HTML string
    const employeeHTMLString = htmlArray.join("")

    //put it together
    const finalHTMLString = generateCompletePage(employeeHTMLString);
    return finalHTMLString;

}


//export of the HTMLgen to the main file
module.exports = HTMLgen;