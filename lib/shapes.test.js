const {Circle, Square, Triangle} = require('../lib/shapes.js');

describe("Circle", () => {
    test("render method should generate the correct SVG code for a blue circle", () => {
      const shape = new Circle();
      shape.setColor("blue");
      const result = shape.render();
      expect(result).toEqual(
        '<circle cx="150" cy="115" r="80" fill="blue"/>'
      );
    });
  });

describe("Triangle", () => {
    test("render method should generate the correct SVG code for a blue triangle", () => {
      const shape = new Triangle();
      shape.setColor("blue");
      const result = shape.render();
      expect(result).toEqual(
        '<polygon points="150, 18 244, 182 56, 182" fill="blue"/>'
      );
    });
  });

  describe("Square", () => {
    test("render method should generate the correct SVG code for a blue square", () => {
      const shape = new Square();
      shape.setColor("blue");
      const result = shape.render();
      expect(result).toEqual(
        '<rect x="73" y="40" width="160" height="160" fill="blue"/>'
      );
    });
  });