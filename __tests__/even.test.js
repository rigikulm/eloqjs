const isEven = require("../ch3/even");

describe('Chapter 3 tests for the isEven function', () => {
    test("0 is even", () => {
        expect(isEven(0)).toBeTruthy();
    });

    test("1 is NOT even", () => {
        expect(isEven(1)).not.toBeTruthy();
    });

    test("2 is even", () => {
        expect(isEven(2)).toBeTruthy();
    });

    test("77 is NOT even", () => {
        expect(isEven(77)).not.toBeTruthy();
    });

    test("62 is even", () => {
        expect(isEven(62)).toBeTruthy();
    });

    test("-31 is NOT even", () => {
        expect(isEven(-31)).not.toBeTruthy();
    });

    test("-44 is even", () => {
        expect(isEven(-44)).toBeTruthy();
    });
});
