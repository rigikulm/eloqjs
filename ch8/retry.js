// File: retry.js
//
// Requirements:
// Write a function primitiveMultiply that in 20 percent of cases multiplies
// two numbers and in the other 80 percent of cases raises an exception of
// type MultiplicatorUnitFailure. Write a function that wraps this clunky
// function and just keeps trying until a call succeeds, after which it
// returns the result

class MultiplicatorUnitFailure extends Error {};

function primitiveMultiply(x, y) {
    if (Math.random() > 0.2) {
        throw new MultiplicatorUnitFailure(`Could not multiply ${x} and ${y}`);
    } else {
        return x * y;
    }
}

function Multiply(x, y) {
    let result = null;

    while (result == null) {
        try {
            result = primitiveMultiply(x, y);
        } catch(e) {
            if (e instanceof MultiplicatorUnitFailure) {
                console.log('trying again...');
            }
        }
    }

    return result;
}

console.log(`Multiply(6, 12) = ${Multiply(6, 12)}`);