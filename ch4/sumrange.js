// File" sumrange.js
//
// Part 1:
// Write a range function that takes two arguments, start and end, and
// returns an array containing all the numbers from start up to (and including)
// end.
//
// Part 2:
// Write a sum function that takes an array of numbers and returns the sum of
// these numbers. Run the example program and see whether it does indeed return
// 55.

function range(start, end) {
    let array = [];
    for (let i = start; i <= end; i++) {
        array.push(i);
    }
    return array;
}

function sum(numbers) {
    let val = 0;
    // Notice that we are using `of` which gives the value of each array item.
    // If we had used `in` it would have given the keys, which for an array are
    // the indices as strings "0", "1", "2" etc.
    for (let num of numbers) {
        val += num;
    }
    return val;
}

exports.range = range;
exports.sum = sum;