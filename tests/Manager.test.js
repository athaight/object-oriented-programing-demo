const manager = require('../lib/manager')

describe('Manager', () => {
  describe('InitializeJs', () => {
    test('Initializes Manager object', () => {
      const cb = new manager();
      expect(typeof cb).toBe("object");
    });
    test("Can set name attribute with constructor", () => {
      const name = "Tucker";
      const cb = new manager(name, "Manager", 23, "Tucker@gmail.com", 555, "tbeauchamp");
      expect(cb.name).toBe(name);
    });
    test("Can set role attribute with constructor", () => {
      const role = "Manager";
      const cb = new manager(role, "Tucker", 23, "Tucker@gmail.com", 555, "tbeauchamp");
      expect(cb.getRole()).toBe(role);
    });
    test("Can set id attribute with constructor", () => {
      const id = 23;
      const cb = new manager("Tucker", id, "Manager", "Tucker@gmail.com", 555, "tbeauchamp");
      expect(cb.id).toBe(id);
    });
    test("Can set email attribute with constructor", () => {
      const email = "Tucker@gmail.com";
      const cb = new manager("Tucker", "Manager", email, 23,  555, "tbeauchamp");
      expect(cb.email).toBe(email);
    });
    test("Can set officeNumber attribute with constructor", () => {
      const officeNumber = 555;
      const cb = new manager("Tucker", "Manager", 23, officeNumber, "Tucker@gmail.com", "tbeauchamp");
      expect(cb.officeNumber).toBe(officeNumber);
    });
    test("Can set github attribute with constructor", () => {
      const github = "tbeauchamp";
      const cb = new manager("Tucker", "Manager", 23, "Tucker@gmail.com", github, 555);
      expect(cb.github).toBe(github);
    });
  });


  describe("getInfo", () => {
    test("Does getName() method get name?", () => {
      const name = "Tucker";
      const cb = new manager(name, "Manager", 23, "Tucker@gmail.com", 555, "tbeauchamp");
      expect(cb.getName()).toBe(name);
    });
    test("Does getRole() method get role?", () => {
      const role = "Manager";
      const cb = new manager("Tucker", role, 23, "Tucker@gmail.com", 555, "tbeauchamp");
      expect(cb.getRole()).toBe(role);
    });
    test("Does getId() method get Id?", () => {
      const id = 23;
      const cb = new manager("Tucker", id, "Manager", "Tucker@gmail.com", 555, "tbeauchamp");
      expect(cb.getId()).toBe(id);
    });
    test("Does getEmail() method get email?", () => {
      const email = "Tucker@gmail.com";
      const cb = new manager("Tucker", "Manager", email, 23, 555, "tbeauchamp");
      expect(cb.getEmail()).toBe(email);
    });
    test("Does getofficeNumber() method get Office number?", () => {
      const officeNumber = 555;
      const cb = new manager("Tucker", "Manager", 23, officeNumber, "Tucker@gmail.com", "tbeauchamp");
      expect(cb.getOfficeNumber()).toBe(officeNumber);
      });
    test("Does getGitHub() method get GitHub username?", () => {
      const github = "tbeauchamp"; 
      const cb = new manager("Tucker", "Manager", 23, "Tucker@gmail.com",  github, 555);
      expect(cb.getGitHub()).toBe(github);
    });
  });
});