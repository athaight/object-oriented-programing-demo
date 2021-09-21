const engineer = require('../lib/engineer')

describe('Engineer', () => {
  describe('InitializeJs', () => {
    test('Initializes Engineer object', () => {
      const cb = new engineer();
      expect(typeof cb).toBe("object");
    });
    test("Can set name attribute with constructor", () => {
      const name = "Andy";
      const cb = new engineer(name, "Engineer", 23, "andy@gmail.com", "athaight");
      expect(cb.name).toBe(name);
    });
    test("Can set role attribute with constructor", () => {
      const role = "Engineer";
      const cb = new engineer("Andy", role, 23, "andy@gmail.com", "athaight");
      expect(cb.role).toBe(role);
    });
    test("Can set id attribute with constructor", () => {
      const id = 23;
      const cb = new engineer("Andy", "Engineer", id, "andy@gmail.com", "athaight");
      expect(cb.id).toBe(id);
    });
    test("Can set email attribute with constructor", () => {
      const email = "andy@gmail.com";
      const cb = new engineer("Andy", "Engineer", 23, email, "athaight");
      expect(cb.email).toBe(email);
    });
    test("Can set github attribute with constructor", () => {
      const github = "athaight";
      const cb = new engineer("Andy", "Engineer", 23, "andy@gmail.com", github);
      expect(cb.github).toBe(github);
    });
  });


  describe("getInfo", () => {
    test("Does getName() method get name?", () => {
      const name = "Andy";
      const cb = new engineer(name, "Engineer", 23, "andy@gmail.com", "athaight");
      expect(cb.getName()).toBe(getName);
    });
    test("Does getRole() method get role?", () => {
      const role = "Engineer";
      const cb = new engineer("Andy", role, 23, "andy@gmail.com", "athaight");
      expect(cb.getRole()).toBe(getRole);
    });
    test("Does getId() method get Id?", () => {
      const id = 23;
      const cb = new engineer("Andy", "Engineer", id, "andy@gmail.com", "athaight");
      expect(cb.getId()).toBe(getId);
    });
    test("Does getEmail() method get mail?", () => {
      const email = "Andy@gmail.com";
      const cb = new engineer("Andy", "Engineer", 23, email, "athaight");
      expect(cb.getEmail()).toBe(getEmail);
    });
    test("Does getGitHub() method get GitHub username?", () => {
      const github = "athaight"; 
      const cb = new engineer("Andy", "Engineer", 23, "andy@gmail.com", github);
      expect(cb.getGitHub()).toBe(getGitHub);
    });
  });
});