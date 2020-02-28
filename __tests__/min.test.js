const minimum = require("../ch3/min");

describe('Chapter 3 tests for the minimum function', () => {
    test("3 is less than 7", () => {
        expect(minimum(3, 7)).toBe(3);
    });

    test("-7 is less than 3", () => {
        expect(minimum(3, -7)).toBe(-7);
    });

    test("-7 is less than -3", () => {
        expect(minimum(-3, -7)).toBe(-7);
    });
});
