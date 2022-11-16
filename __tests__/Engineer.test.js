const Engineer = require('../lib/Engineer');

//test creation of new Engineer Object
test("creates a new Engineer Object", () => {
    const engineer = new Engineer("Zelda", 123, "zelda@mail.com","SebasMelendez");
    //same tests from Employee
    expect(engineer.name).toEqual(expect.any(String));
    expect(engineer.id).toEqual(expect.any(Number));
    expect(engineer.email).toEqual(expect.stringContaining("@"));
    //new Engineer specific test
    expect(engineer.github).toEqual(expect.any(String));
})


//test getRole Method
test("Check if getRole Method returns correct data", () => {
    const engineer = new Engineer("Zelda", 123, "zelda@mail.com","SebasMelendez");

    expect(engineer.getRole()).toEqual("Engineer");
})


//test getGithub method
test("check if getGithub method returns correct data", () => {
    const engineer = new Engineer("Zelda", 123, "zelda@mail.com","SebasMelendez");

    expect(engineer.getGithub()).toEqual(expect.stringContaining(engineer.github.toString()));
})