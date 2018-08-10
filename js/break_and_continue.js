"use strict";

let number;

while (true) {
    number = prompt("Enter a number between 1 and 50.");
    if (!isEven(number) && number <= 50) {
        break;
    }
}

for (let i = 1; i <= 50; i++) {
    if (number == i) {
        console.log("Yikes! Skipping number: " + i.toString());
        continue;
    }
    if (!isEven(i)) {
        console.log("Here is a odd number: " + i.toString());
    }
}
