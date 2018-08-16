"use strict";

function allIndexesOf(arr, value) {
    if (Array.isArray(arr)) {
        let found = [];
        arr.forEach((elm, i) => {
            if (elm === value) {
                found.push(i);
            }
        });
        return found;
    }
}

let fruits = ["apple", "banana", "orange", "apple", "pineapple"];

console.log(allIndexesOf(fruits, "apple") + " should return the array [0, 3]");
console.log(allIndexesOf(fruits, "guava") + " should return the array []");
console.log(allIndexesOf(fruits, "pineapple") + " should return [4]");

function removeAll(arr, value) {
    if (Array.isArray(arr)) {
        let newArr = arr.slice();
        if (newArr.indexOf(value) !== newArr.lastIndexOf(value)) {
            newArr.splice(newArr.indexOf(value), 1);
            return removeAll(newArr, value);
        } else if (newArr.indexOf(value) > 0) {
            newArr.splice(newArr.indexOf(value), 1);
            return newArr;
        }
        return arr;
    }
}

function removeAllReduce(arr, value) {
    let newArr = arr.slice();
    if (newArr.includes(value)) {
        let tempString = "";
        newArr.reduce((acc, cur) => {
            if (tempString === "" && acc !== value) {
                tempString = acc + ",";
            }
            if (cur !== value) {
                tempString += cur + ",";
            }
        });
        return tempString.substring(0, tempString.length - 1).split(",");
    }
    return arr;
}

function removeAllWhile(arr, value) {
    let newArr = arr.slice();
    while (newArr.includes(value)) {
        newArr.splice(newArr.indexOf(value), 1);
    }
    return newArr;
}

function removeAllPush(arr, value) {
    let newArr = [];
    arr.forEach((elm) => {
        if (elm !== value) {
            newArr.push(value);
        }
    });
    return newArr;
}

let bugs = ["mosquito", "ant", "scorpion", "ant", "ant", "mosquito", "typo", "reference error", "type error"];

console.log(removeAll(bugs, "ant"));
console.log('should return ["mosquito", "scorpion", "mosquito", "typo", "reference error", "type error"]');
console.log(removeAll(bugs, "mosquito"));
console.log('should return ["ant", "scorpion", "ant", "ant", "typo", "reference error", "type error"]');
console.log(removeAll(bugs, "roach"));
console.log('should return the original array');

console.log(removeAllReduce(bugs, "ant"));
console.log(removeAllReduce(bugs, "mosquito"));
console.log(removeAllReduce(bugs, "roach"));

console.log(removeAllWhile(bugs, "ant"));
console.log(removeAllWhile(bugs, "mosquito"));
console.log(removeAllWhile(bugs, "roach"));

console.log(removeAllPush(bugs, "ant"));
console.log(removeAllPush(bugs, "mosquito"));
console.log(removeAllPush(bugs, "roach"));
