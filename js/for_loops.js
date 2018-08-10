"use strict";

function showMultiplicationTable(num) {
    for (let i = 1; i <= 10; i++) {
        console.log(num.toString() + " + " + i.toString() + " = " + num * i);
    }
}

showMultiplicationTable(7);

function isNumeric(input) {
    return parseFloat(input) == input && !isNaN(parseFloat(input));
}

function isEven(input) {
    return isNumeric(input) && parseFloat(input) % 2 === 0;
}

for (let i = 1; i <= 10; i++) {
    let random = Math.floor(Math.random() * 200) + 20;
    if (isEven(random)) {
        console.log(random.toString() + " is even.");
    }
    console.log(random.toString() + " is odd.");
}

for (let i = 1; i < 10; i++) {
    console.log(i.toString().repeat(i));
}

for (let i = 100; i > 0; i -= 5) {
    console.log(i);
}
