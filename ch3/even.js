// File: even.js
//
// Here’s another way to define whether a positive whole number is even or odd:
//   - Zero is even.
//   - One is odd.
//    - For any other number N, its evenness is the same as N –2.
// Define a recursive function isEven corresponding to this description

function isEven(n) {
    if (n === 0) {
        return true;
    }
    else if (n === 1) {
        return false;
    }
    else if ( n < 0) {  // bug fix to handle negative numbers
        return isEven(-n);
    }
    else {
        return isEven(n -2);
    }
}

module.exports = isEven;