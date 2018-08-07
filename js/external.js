"use strict";

console.log("Hello from external javascript!");

// alert("Welcome to my Website!");
//
// var color = prompt("What's your favorite color?");
//
// alert(color + " is your favorite color!");

var little_mermaid = prompt("How long are you keeping The Little Mermaid for?");

var brother_bear = prompt("How long are you keeping The Borther Bear for?");

var hercules = prompt("How long are you keeping The Hercules for?");

var cost = prompt("How does do movies cost per day?");

var total = (Number(little_mermaid) + Number(brother_bear) + Number(hercules)) * Number(cost);

alert("Your total with be: " + total);