const {reverseArray, reverseArrayInPlace} = require("../ch4/reverse");

describe('Chapter 4 tests for reverseArray and reverseArrayInPlace', () => {

    test("reverseArray([1, 2, 3]) returns [3, 2, 1]", () => {
        expect(reverseArray([1, 2, 3])).toEqual(expect.arrayContaining([3, 2, 1]));
    });

    test("reverseArray([]) returns []", () => {
        expect(reverseArray([])).toEqual(expect.arrayContaining([]));
    });

    test("reverseArray([-1, 2, 16, -88]) returns [-88, 16, 2, -1]", () => {
        expect(reverseArray([-1, 2, 16, -88])).toEqual(expect.arrayContaining([-88, 16, 2, -1]));
    });

    test("reverseArrayInPlace([1, 2, 3, 4]) results in  [4, 3, 2, 1]", () => {
        let input = [1, 2, 3, 4];
        let result = [4, 3, 2, 1];
        reverseArrayInPlace(input);
        expect(input).toEqual(expect.arrayContaining(result));
    });

    test("reverseArrayInPlace([1, 2, 3, 4, 5, 6, 7]) results in  [7, 6, 5, 4, 3, 2, 1]", () => {
        let input = [1, 2, 3, 4, 5, 6, 7];
        let result = [7, 6, 5, 4, 3, 2, 1];
        reverseArrayInPlace(input);
        expect(input).toEqual(expect.arrayContaining(result));
    });
});