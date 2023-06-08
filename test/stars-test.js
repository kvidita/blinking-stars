const { deepStrictEqual } = require("assert");
const { describe, it } = require("node:test");
const { Stars } = require("../src/star.js")

describe("Stars", () => {
  it("should give the columns of star's position", () => {
    const position = { column: 20, row: 12 };
    const lifeTime = 5;
    const testStar = new Stars(position, lifeTime);
    const actual = testStar.position.column;
    const expected = 20;
    deepStrictEqual(actual, expected);
  });

  it("should give the rows of  the star's position", () => {
    const position = { column: 20, row: 12 };
    const lifeTime = 5;
    const testStar = new Stars(position, lifeTime);
    const actual = testStar.position.row;
    const expected = 12;
    deepStrictEqual(actual, expected);
  });

  it("should give the life of the star", () => {
    const position = { column: 10, row: 8 };
    const lifeTime = 5;
    const testStar = new Stars(position, lifeTime);
    const actual = testStar.life;
    const expected = 5;
    deepStrictEqual(actual, expected);
  })
});