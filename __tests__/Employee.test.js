const Employee = require('../lib/Employee');


// Create a new Employee
test("creates a new Employee Object", () => {
    const employee = new Employee("Zelda", 123, "zelda@mail.com");

    expect(employee.name).toEqual(expect.any(String));
    expect(employee.id).toEqual(expect.any(Number));
    expect(employee.email).toEqual(expect.stringContaining("@"));
})





