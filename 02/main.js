// Triangle
let chars = "#";
while (chars.length < 7) {
    console.log(chars);
    chars = chars + "#";
}

// Fizzbuzz
for (let i = 1; i <= 100; i++) {
    if (i % 3 == 0 && i % 5 == 0) {
        console.log("FizzBuzz");
    } else if (i % 3 == 0) {
        console.log("Fizz");
    } else if (i % 5 == 0) {
        console.log("Buzz");
    } else {
        console.log(i);
    }
}

// Chessboard
let board_width = 16;
let board_height = 8;
let prev = "#";
let row;
for (let i = 0; i < board_height; i++) {
    row = "";

    if (prev === "#") {
        prev = " ";
    } else {
        prev = "#";
    }

    for (let j = 0; j < board_width; j++) {
        if (prev === "#") {
            row = row + " ";
            prev = " ";
        } else {
            row = row + "#";
            prev = "#";
        }
    }
    console.log(row);
}
