const {arrayToList, listToArray} = require('../ch4/arraytolist');
const {inspect} = require('util');

describe('Chapter 4 tests for reverseArray and reverseArrayInPlace', () => {
    test("arrayToList([1, 2, 3]) results in {value:1, next}->{value:2, next}->{value:3, next: null}", () => {
        let array = [1, 2, 3];
        let list = arrayToList(array);
        let node = list;
        for (let i = 0; i < array.length - 1; i++) {
            expect(node.value).toBe(array[i]);
            node = node.next;
        }
    });

    test("arrayToList([3, 4, 5, 6, 7, 8, 9, 0]) results in matching linked list", () => {
        let array = [3, 4, 5, 6, 7, 8, 9, 0];
        let list = arrayToList(array);
        let node = list;
        for (let i = 0; i < array.length - 1; i++) {
            expect(node.value).toBe(array[i]);
            node = node.next;
        }
    });

    test("listToArray({value: 1}->{value:2}->{value:3} results in [1, 2, 3]", () => {
        let result = [1, 2, 3];
        let node1 = {value: 1, next: null};
        let node2 = {value: 2, next: null};
        let node3 = {value: 3, next: null};
        node1.next = node2;
        node2.next = node3;

        expect(listToArray(node1)).toEqual(expect.arrayContaining(result));
    });
});