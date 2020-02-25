// File: chessboard.js
//
// Write a program that creates a string that represents an 8×8 grid, using
// new-line characters to separate lines. At each position there will either
// be a 'SPC' or a '#' character to represent the chessboard.

function drawChessboard(size) {
    let output = "";
    for (let i = 0; i < size*size; i++) {
        row = Math.floor(i / size) % 2;
        if ((i + row) % 2 === 0) {
            output += "#";
        } else {
            output += " ";
        }

        if ((i+1) % size === 0) output += "\n";
    }
    console.log(output);
}

drawChessboard(4);
console.log("-----------------");
drawChessboard(8);
console.log("-----------------");
drawChessboard(12);