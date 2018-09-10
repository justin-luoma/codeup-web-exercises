"use strict";

const users = [
    {
        id: 1,
        name: 'ryan',
        email: 'ryan@codeup.com',
        languages: ['clojure', 'javascript'],
        yearsOfExperience: 5
    },
    {
        id: 2,
        name: 'luis',
        email: 'luis@codeup.com',
        languages: ['java', 'scala', 'php'],
        yearsOfExperience: 6
    },
    {
        id: 3,
        name: 'zach',
        email: 'zach@codeup.com',
        languages: ['javascript', 'bash'],
        yearsOfExperience: 7
    },
    {
        id: 4,
        name: 'fernando',
        email: 'fernando@codeup.com',
        languages: ['java', 'php', 'sql'],
        yearsOfExperience: 8
    },
    {
        id: 5,
        name: 'justin',
        email: 'justin@codeup.com',
        languages: ['html', 'css', 'javascript', 'php'],
        yearsOfExperience: 9
    }
];

let triLingual = users.filter((user) => {
    return user.languages.length >= 3;
});
console.log(triLingual);

let emails = users.map((user) => {
    return user.email;
});
console.log(emails);

let yearsOfExperience = users.reduce((total, user) => {
    return total + user.yearsOfExperience;
}, 0);
console.log(yearsOfExperience);
console.log(yearsOfExperience / users.length);

let longestEmail = users.reduce((longest, user) => {
    return longest < user.email.length ? user.email.length : longest;
}, 0);
console.log(longestEmail);

let usersString = users.reduce((s, user, i, users) => {
    return s + `${(i === users.length - 1) ? (user.name + ".") : (user.name + ", ")}`;
}, "Your instructors are: ");
console.log(usersString);

let uniqueLanguages = users.reduce((l, user) => {
    for (let lang of user.languages) {
        if (!l.includes(lang)) {
            l.push(lang);
        }
    }
    return l;
}, []);
console.log(uniqueLanguages);