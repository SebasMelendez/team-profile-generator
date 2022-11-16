const Manager = require('../lib/Manager');

//test creation of Manager
test("creates a new Manager Object", () => {
    const manager = new Manager("Zelda", 123, "zelda@mail.com",180-225-2252);

    expect(manager.officeNumber).toEqual(expect.any(Number));
})


//test getRole 
test("check gerRole Method", () => {
    const manager = new Manager("Zelda", 123, "zelda@mail.com",180-225-2252);

    expect(manager.getRole()).toEqual("Manager");
})