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
    // fetch all events for the user
    return (fetch(`https://api.github.com/users/${username}/events`, {headers: {'Authorization': `token ${ghAccessToken}`}})
        // parse response json
            .then(response => response.json())
            .then(data => {
                // find the first event of type PushEvent and return the last commit url in the payload
                for (event of data) {
                    if (event.type === "PushEvent") {
                        let l = event.payload.commits.length;
                        return event.payload.commits[l - 1].url;
                    }
                }
            })
            .then(url => {
                // we now have the url of the latest commit we need to fetch the commit data from github
                return (fetch(url, {headers: {'Authorization': `token ${ghAccessToken}`}})
                    // parse the response json again
                        .then(response => response.json())
                        // return the date of the commit
                        .then(data => data.commit.committer.date)
                );
            })
    );
}

lastUserCommit().then(data => console.log(data));
