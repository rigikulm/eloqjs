// File: even.js
//
// Here’s another way to define whether a positive whole number is even or odd:
//   - Zero is even.
//   - One is odd.
//    - For any other number N, its evenness is the same as N –2.
// Define a recursive function isEven corresponding to this description

function isEven(n) {
    let result;

    switch (n) {
        case 0:
            result = true;
            break;
        case 1:
            result = false;
            break;
        default:
            result = isEven(n - 2);
    }
    return result;
}

console.log(`isEven(2) = ${isEven(2)}`);
console.log(`isEven(1) = ${isEven(1)}`);
console.log(`isEven(0) = ${isEven(0)}`);
console.log(`isEven(77) = ${isEven(77)}`);
console.log(`isEven(52) = ${isEven(52)}`);
console.log(`isEven(-2) = ${isEven(-2)}`);