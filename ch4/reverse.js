// File: reverse.js
//
// reverseArray:
// Takes an array as argument and produces a new array that has the same
// elements in the inverse order.
//
// reverseArrayInPlace:
// The second, reverseArrayInPlace, does what the reverse method does: it
// modifies the array given as argument by reversing its elements.

function reverseArray(input) {
    let array = [];
    for (let val of input) {
        array.unshift(val);
    }
    return array;
}

function reverseArrayInPlace(array) {
    let last = array.length - 1;
    for (let i = 0; i < last/2; i++) {
        let tmp = array[i];
        array[i] = array[last - i];
        array[last - i] = tmp;
    }
}

exports.reverseArray = reverseArray;
exports.reverseArrayInPlace = reverseArrayInPlace;