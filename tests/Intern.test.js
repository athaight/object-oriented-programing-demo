const intern = require('../lib/intern')

describe('Intern', () => {
  describe('InitializeJs', () => {
    test('Initializes Intern object', () => {
      const cb = new intern();
      expect(typeof cb).toBe("object");
    });
    test("Can set name attribute with constructor", () => {
      const name = "Billy";
      const cb = new intern(name, "Intern", 23, "billy@gmail.com", "Trilogy", "billyboi");
      expect(cb.name).toBe(name);
    });
    test("Can set role attribute with constructor", () => {
      const role = "Intern";
      const cb = new intern("Billy", role, 23, "billy@gmail.com", "Trilogy", "athaight");
      expect(cb.role).toBe(role);
    });
    test("Can set id attribute with constructor", () => {
      const id = 23;
      const cb = new intern("Billy", "Intern", id, "Intern", "billy@gmail.com", "Trilogy", "athaight");
      expect(cb.id).toBe(id);
    });
    test("Can set email attribute with constructor", () => {
      const email = "billy@gmail.com";
      const cb = new intern("Billy", "Intern", 23, email, "Trilogy", "athaight");
      expect(cb.email).toBe(email);
    });
    test("Can set school attribute with constructor", () => {
      const school = "Trilogy";
      const cb = new intern("Billy", "Intern", 23, "billy@gmail.com", school, "athaight");
      expect(cb.school).toBe(school);
    });
    test("Can set github attribute with constructor", () => {
      const github = "athaight";
      const cb = new intern("Billy", "Intern", 23, "billy@gmail.com", "Trilogy", github);
      expect(cb.github).toBe(github);
    });
  });


  describe("getInfo", () => {
    test("Does getName() method get name?", () => {
      const name = "Billy";
      const cb = new intern(name, "Intern", 23, "billy@gmail.com", "Trilogy", "athaight");
      expect(cb.getName()).toBe(name);
    });
    test("Does getRole() method get role?", () => {
      const cb = new intern("Billy", role, 23, "billy@gmail.com", "Trilogy", "athaight");
      expect(cb.getRole()).toBe(role);
    });
    test("Does getId() method get Id?", () => {
      const id = 23;
      const cb = new intern("Billy", "Intern", id, "billy@gmail.com", "Trilogy", "athaight");
      expect(cb.getId()).toBe(id);
    });
    test("Does getEmail() method get mail?", () => {
      const email = "billy@gmail.com";
      const cb = new intern("Billy", "Intern", 23, email, "Trilogy", "athaight");
      expect(cb.getEmail()).toBe(email);
    });
    test("Can set school attribute with constructor", () => {
      const school = "Trilogy";
      const cb = new intern("Billy", "Intern", 23, "billy@gmail.com", school, "athaight");
      expect(cb.getSchool).toBe(school);
    });
    test("Does getGitHub() method get GitHub username?", () => {
      const github = "athaight";
      const cb = new intern("Billy", "Intern", 23, "billy@gmail.com", "Trilogy", github);
      expect(cb.getGitHub()).toBe(github);
    });
  });
});