const Employee = require('../lib/Employee');


// Create a new Employee
test("creates a new Employee Object", () => {
    const employee = new Employee("Zelda", 123, "zelda@mail.com");

    expect(employee.name).toEqual(expect.any(String));
    expect(employee.id).toEqual(expect.any(Number));
    expect(employee.email).toEqual(expect.stringContaining("@"));
})


//test getName Func
test("check if the getName returns correct data", () => {
    const employee = new Employee("Zelda", 123, "zelda@mail.com");

    expect(employee.getName()).toEqual(expect.stringContaining(employee.name.toString()));
})


//test getID func
test("check if the getId Method returns correct data", () => {
    const employee = new Employee("Zelda", 123, "zelda@mail.com");

    expect(employee.getId()).toEqual(expect.any(Number));
})


//test getID func
test("check if the getEmail method returns correct data", () => {
    const employee = new Employee("Zelda", 123, "zelda@mail.com");

    expect(employee.getEmail()).toEqual(expect.stringContaining(employee.email.toString()));
})