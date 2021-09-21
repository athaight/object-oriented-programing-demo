const manager = require('../lib/manager')

describe('Manager', () => {
  describe('InitializeJs', () => {
    test('Initializes Manager object', () => {
      const cb = new manager();
      expect(typeof cb).toBe("object");
    });
    test("Can set name attribute with constructor", () => {
      const name = "Andy";
      const cb = new manager(name, "Manager", 23, "andy@gmail.com", 555-555-5555, "athaight");
      expect(cb.name).toBe(name);
    });
    test("Can set role attribute with constructor", () => {
      const role = "Manager";
      const cb = new manager("Andy", role, 23, "andy@gmail.com", 555-555-5555, "athaight");
      expect(cb.role).toBe(role);
    });
    test("Can set id attribute with constructor", () => {
      const id = 23;
      const cb = new manager("Andy", "Manager", id, "andy@gmail.com", 555-555-5555, "athaight");
      expect(cb.id).toBe(id);
    });
    test("Can set email attribute with constructor", () => {
      const email = "andy@gmail.com";
      const cb = new manager("Andy", "Manager", 23, email, 555-555-5555, "athaight");
      expect(cb.email).toBe(email);
    });
    test("Can set officeNumber attribute with constructor", () => {
      const officeNumber = 555-555-5555;
      const cb = new manager("Andy", "Manager", 23, "andy@gmail.com", officeNumber, "athaight");
      expect(cb.officeNumber).toBe(officeNumber);
    });
    test("Can set github attribute with constructor", () => {
      const github = "athaight";
      const cb = new manager("Andy", "Manager", 23, "andy@gmail.com", 555-555-5555, github);
      expect(cb.github).toBe(github);
    });
  });


  describe("getInfo", () => {
    test("Does getName() method get name?", () => {
      const name = "Andy";
      const cb = new manager(name, "Manager", 23, "andy@gmail.com", 555-555-5555, "athaight");
      expect(cb.getName()).toBe(getName);
    });
    test("Does getRole() method get role?", () => {
      const role = "Manager";
      const cb = new manager("Andy", role, 23, "andy@gmail.com", 555-555-5555, "athaight");
      expect(cb.getRole()).toBe(getRole);
    });
    test("Does getId() method get Id?", () => {
      const id = 23;
      const cb = new manager("Andy", "Manager", id, "andy@gmail.com", 555-555-5555, "athaight");
      expect(cb.getId()).toBe(getId);
    });
    test("Does getEmail() method get mail?", () => {
      const email = "Andy@gmail.com";
      const cb = new manager("Andy", "Manager", 23, email, 555-555-5555, "athaight");
      expect(cb.getEmail()).toBe(getEmail);
    });
    test("Does getofficeNumber() method get mail?", () => {
      const officeNumber = 555-555-5555;
      const cb = new manager("Andy", "Manager", 23, "andy@gmail.com", officeNumber, "athaight");
      expect(cb.getOfficeNumber()).toBe(getOfficeNumber);
      });
    test("Does getGitHub() method get GitHub username?", () => {
      const github = "athaight"; 
      const cb = new manager("Andy", "Manager", 23, "andy@gmail.com", 555-555-5555, github);
      expect(cb.getGitHub()).toBe(getGitHub);
    });
  });
});