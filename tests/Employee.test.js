const employee = require('../lib/employee')

describe('Employee', () => {
  describe('InitializeJs', () => {
    test('Initializes Employee object', () => {
      const cb = new employee();
      expect(typeof cb).toBe("object");
    });
    test("Can set name attribute with constructor", () => {
      const name = "Andy";
      const cb = new employee(name, "Employee", 23, "andy@gmail.com");
      expect(cb.name).toBe(name);
    });
    test("Can set role attribute with constructor", () => {
      const role = "Employee";
      const cb = new employee("Andy", role, 23, "andy@gmail.com");
      expect(cb.getRole).toBe(role);
    });
    test("Can set id attribute with constructor", () => {
      const id = 23;
      const cb = new employee("Andy", "Employee", id, "andy@gmail.com");
      expect(cb.id).toBe(id);
    });
    test("Can set email attribute with constructor", () => {
      const email = "andy@gmail.com";
      const cb = new employee("Andy", "Employee", 23, email);
      expect(cb.email).toBe(email);
    });
  });


  describe("getInfo", () => {
    test("Does getName() method get name?", () => {
      const name = "Andy";
      const cb = new employee(name, "Employee", 23, "andy@gmail.com");
      expect(cb.getName()).toBe(getName);
    });
    test("Does getRole() method get role?", () => {
      const role = "Employee";
      const cb = new employee("Andy", role, 23, "andy@gmail.com");
      expect(cb.getRole()).toBe(getRole);
    });
    test("Does getId() method get Id?", () => {
      const id = 23;
      const cb = new employee("Andy", "Employee", id, "andy@gmail.com");
      expect(cb.getId()).toBe(getId);
    });
    test("Does getEmail() method get mail?", () => {
      const email = "Andy@gmail.com";
      const cb = new employee("Andy", "Employee", 23, email);
      expect(cb.getEmail()).toBe(getEmail);
    });
  });
});