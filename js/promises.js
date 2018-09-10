"use strict";

let ghAccessToken = localStorage.getItem("githubAccessToken");

function wait(n) {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve();
        }, n);
    });
}

wait(1000).then(() => console.log('You\'ll see this after 1 second'));
wait(3000).then(() => console.log('You\'ll see this after 3 seconds'));

function lastUserCommit(username = "justin-luoma") {
    return fetch(`https://api.github.com/users/${username}/events`, {headers: {'Authorization': `token ${ghAccessToken}`}});
}

lastUserCommit().then(response => response.json()).then(data => console.log(data));
