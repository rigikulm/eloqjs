// min.js
//
// Write a function min that takes two arguments and returns their minimum

function minimum(a, b) {
    if (a < b) {
        return a;
    } else {
        return b;
    }
}

console.log(`minimum(3,7) = ${minimum(3,7)}`);
console.log(`minimum(3,-7) = ${minimum(3,-7)}`);
console.log(`minimum(-3,-7) = ${minimum(-3,-7)}`);