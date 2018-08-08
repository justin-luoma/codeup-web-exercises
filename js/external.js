"use strict";

console.log("Hello from external javascript!");

// alert("Welcome to my Website!");
//
// var color = prompt("What's your favorite color?");
//
// alert(color + " is your favorite color!");

// TODO
// You have rented some movies for your kids:
// The little mermaid (for 3 days), Brother Bear (for 5 days, they love it),
// and Hercules (1 day, you don't know yet if they're going to like it).
// If price for a movie per day is $3, how much will you have to pay?

var little_mermaid = prompt("How long are you keeping The Little Mermaid for?");

var brother_bear = prompt("How long are you keeping The Borther Bear for?");

var hercules = prompt("How long are you keeping The Hercules for?");

var cost = prompt("How does do movies cost per day?");

var total = (Number(little_mermaid) + Number(brother_bear) + Number(hercules)) * Number(cost);

alert("Your total with be: " + total);

// TODO
// Suppose you're working as a contractor for 3 companies: Google,
// Amazon and Facebook, they pay you a different rate per hour.
// Google pays $400, Amazon $380, and Facebook $350. How much will you
// receive in payment for this week? You worked 10 hours for Facebook,
// 6 hours for Google and 4 hours for Amazon.

// TODO
// A student can be enrolled to a class only if the class is not full
// and the class schedule does not conflict with her current schedule.

var classIsFull = false;
var studentsScheduleConflicts = false;
var studentCanJoinClass = !classIsFull && !studentsScheduleConflicts;

// TODO
// the password must be at least 5 characters
// the password must not include the username
// the username must be no more than 20 characters
// neither the username or password can start or end with whitespace

var username = 'codeup';
var password = 'notastrongpassword';

var passwordMeetsLength = password.length >= 5;
var passwordContainsUsername = password.includes(username);
var usernameMeetsLength = username.length <= 20;
var passwordNotTrimed = password.trim() != password;
var usernameNotTrimed = username.trim() != username;

var validCreds = passwordMeetsLength && !passwordContainsUsername &&
    usernameMeetsLength && passwordNotTrimed && usernameNotTrimed;
