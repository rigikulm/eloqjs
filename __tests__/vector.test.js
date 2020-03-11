const {Vec} = require("../ch6/vector");

describe('Chapter 6 tests for the Vec class', () => {
    test("Length of Vec(3,4) is 5", () => {
        let v = new Vec(3,4);
        expect(v.length).toBe(5);
    });

    test("Length of Vec(20,99) is 101", () => {
        let v = new Vec(20, 99);
        expect(v.length).toBe(101);
    });

    test("Length of Vec(68,285) is 293", () => {
        let v = new Vec(68, 285);
        expect(v.length).toBe(293);
    });

    test("Vec(1,1) plus Vec(2,2) is Vec(3,3", () => {
        let v1 = new Vec(1,1);
        let v2 = new Vec(2,2);

        expect(v1.plus(v2)).toEqual({x: 3, y: 3});
    });

    test("Vec(1,1) plus Vec(2,4) is Vec(3,5", () => {
        let v1 = new Vec(1,1);
        let v2 = new Vec(2,4);

        expect(v1.plus(v2)).toEqual({x: 3, y: 5});
    });

    test("Vec(1,1) plus Vec(-2,-3) is Vec(-1,-2)", () => {
        let v1 = new Vec(1,1);
        let v2 = new Vec(-2,-3);

        expect(v1.plus(v2)).toEqual({x: -1, y: -2});
    })

    test("Vec(1,1) minus Vec(2,2) is Vec(-1,-1)", () => {
        let v1 = new Vec(1,1);
        let v2 = new Vec(2,2);

        expect(v1.minus(v2)).toEqual({x: -1, y: -1});
    });

    test("Vec(1,1) minus Vec(-2,-2) is Vec(3,-3)", () => {
        let v1 = new Vec(1,1);
        let v2 = new Vec(-2,-2);

        expect(v1.minus(v2)).toEqual({x: 3, y: 3});
    });
});