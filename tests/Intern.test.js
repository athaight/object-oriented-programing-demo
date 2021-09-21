const intern = require('../lib/intern')

describe('Intern', () => {
  describe('InitializeJs', () => {
    test('Initializes Intern object', () => {
      const cb = new intern();
      expect(typeof cb).toBe("object");
    });
    test("Can set name attribute with constructor", () => {
      const name = "Andy";
      const cb = new intern(name, 23, "andy@gmail.com", "Trilogy", "athaight");
      expect(cb.name).toBe(name);
    });
    test("Can set role attribute with constructor", () => {
      const role = "Intern";
      const cb = new intern("Andy", role, 23, "andy@gmail.com", "Trilogy", "athaight");
      expect(cb.role).toBe(role);
    });
    test("Can set id attribute with constructor", () => {
      const id = 23;
      const cb = new intern("Andy", "Intern", id, "andy@gmail.com", "Trilogy", "athaight");
      expect(cb.id).toBe(id);
    });
    test("Can set email attribute with constructor", () => {
      const email = "andy@gmail.com";
      const cb = new intern("Andy", "Intern", 23, email, "Trilogy", "athaight");
      expect(cb.email).toBe(email);
    });
    test("Can set roomNumber attribute with constructor", () => {
      const github = 555;
      const cb = new intern("Andy", "Intern", 23, "andy@gmail.com", "Trilogy", github);
      expect(cb.github).toBe(github);
    });
  });


  describe("getInfo", () => {
    test("Does getName() method get name?", () => {
      const name = "Andy";
      const cb = new intern(name, "Intern", 23, "andy@gmail.com", "Trilogy", "athaight");
      expect(cb.getName()).toBe(getName);
    });
    test("Does getRole() method get role?", () => {
      const cb = new intern("Andy", role, 23, "andy@gmail.com", "Trilogy", "athaight");
      expect(cb.getRole()).toBe("Intern");
    });
    test("Does getId() method get Id?", () => {
      const id = 23;
      const cb = new intern("Andy", "Intern", id, "andy@gmail.com", "Trilogy", "athaight");
      expect(cb.getId()).toBe(getId);
    });
    test("Does getEmail() method get mail?", () => {
      const email = "Andy@gmail.com";
      const cb = new intern("Andy", "Intern", 23, email, "Trilogy", "athaight");
      expect(cb.getEmail()).toBe(getEmail);
    });
    test("Does getGitHub() method get GitHub username?", () => {
      const cb = new intern("Andy", "Intern", 23, "andy@gmail.com", "Trilogy", "athaight");
      expect(cb.getGitHub()).toBe(getGitHub);
    });
  });
});