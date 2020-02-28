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

console.log(`isEven(2) = ${isEven(2)}`);
console.log(`isEven(1) = ${isEven(1)}`);
console.log(`isEven(0) = ${isEven(0)}`);
console.log(`isEven(77) = ${isEven(77)}`);
console.log(`isEven(52) = ${isEven(52)}`);
console.log(`isEven(-2) = ${isEven(-2)}`);
console.log(`isEven(-21) = ${isEven(-21)}`);
console.log(`isEven(-64) = ${isEven(-64)}`);