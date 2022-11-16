const Intern = require('../lib/Intern');


//test Intern Creation 
test("check intern creation", () => {
    const intern = new Intern("Zelda", 123, "zelda@mail.com","KU");

    expect(intern.school).toEqual(expect.any(String));
})

//test getSchool Method for data
test("Check getSchool Method for correct data", () => {
    const intern = new Intern("Zelda", 123, "zelda@mail.com","KU");

    expect(intern.getSchool()).toEqual(expect.stringContaining(intern.school.toString()))
})


//test getRole method
test("check getRole Method for Interns", () => {
    const intern = new Intern("Zelda", 123, "zelda@mail.com","KU");

    expect(intern.getRole()).toEqual("Intern");
})