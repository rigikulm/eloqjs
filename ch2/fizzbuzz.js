// File: fizzbuzz.js
//
// Write a program that uses console.log to print all the numbers from 1 to
// 100, with two exceptions. For numbers divisible by 3, print "Fizz" instead
// of the number, and for numbers divisible by 5 (and not 3), print "Buzz"
// instead.
//
// When you have that working, modify your program to print "FizzBuzz" for
// numbers that are divisible by both 3 and 5 (and still print "Fizz" or
// "Buzz" for numbers divisible by only one of those).

// More Efficient Implementation
function fizzbuzz(from, to) {
    for (let i = from; i <= to; i++) {
        let output = "";
        if (i % 3 === 0) output += "Fizz";
        if (i % 5 === 0) output += "Buzz";
        
        if (output.length > 0) {
            console.log(output);
        } else {
            console.log(i);
        }
    }
}


// My original Implementation
function fizzbuzz1(from, to) {
    for (let i = from; i <= to; i++) {
        let isModThree = (i % 3) === 0;
        let isModFive = (i % 5) === 0;
        if (isModThree && isModFive) {
            console.log("FizzBuzz");
        }
        else if (isModThree) {
            console.log("Fizz");
        }
        else if (isModFive) {
            console.log("Buzz");
        }
        else {
            console.log(i);
        }
    }
}

fizzbuzz(1, 100);