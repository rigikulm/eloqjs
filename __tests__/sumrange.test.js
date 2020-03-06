const {range, sum} = require("../ch4/sumrange");

describe('Chapter 4 tests for range and sum functions', () => {
    test("sum([1,2,3]) is 6", () => {
        expect(sum([1,2,3])).toBe(6);
    });

    test("Empty array sum([]) is 0", () => {
        expect(sum([])).toBe(0);
    });

    test("sum([1, 5, 7, 11, -6]) is 18", () => {
        expect(sum([1, 5, 7, 11, -6])).toBe(18);
    });

    test("range(1, 3) returns [1, 2, 3]", () => {
        expect(range(1,3)).toEqual(expect.arrayContaining([1,2,3]));
    });

    test("range(-1, 3) returns [-1, 0, 1, 2, 3]", () => {
        expect(range(-1,3)).toEqual(expect.arrayContaining([-1, 0, 1,2,3]));
    });

    test("range(0, 4) returns [0, 1, 2, 3, 4]", () => {
        expect(range(0,4)).toEqual(expect.arrayContaining([0, 1, 2, 3, 4]));
    });

    test("sum(range(1, 3)) returns 6", () => {
        expect(sum(range(1,3))).toBe(6);
    });

    test("sum(range(1, 10)) returns 55", () => {
        expect(sum(range(1,10))).toBe(55);
    });
});