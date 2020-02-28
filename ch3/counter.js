// File: counter.js
//
// Write a function called countChar that accepts a string, and a second
// argument that indicates the character that is to be counted.
//

function countChar(message, ch) {
    let count = 0;
    for (let i = 0; i < message.length; i++) {
        if ( ch == message[i]) {
            count++;
        }
    }

    return count; 
}

let msg = "This is a test";
console.log(`countChar(${msg}, "t") --> ${countChar(msg, "t")}`);

msg = "A man a plan a canal panama";
console.log(`countChar(${msg}, "a") --> ${countChar(msg, "a")}`);