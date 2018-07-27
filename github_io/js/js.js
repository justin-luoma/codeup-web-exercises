"use strict";

var request = new XMLHttpRequest();
request.open('GET', 'https://api.github.com/repos/justin-luoma/codeup_web_exercises/contents', true);
request.onload = function () {
    // Begin accessing JSON data here
    var data = JSON.parse(this.response);
    if (request.status >= 200 && request.status < 400) {
        data.forEach(function (obj) {
            var fileName = obj.name;
            if (fileName.endsWith(".html")) {
                if (fileName === "index.html") {
                    return;
                }
                var contentDiv = document.getElementById("menu-list");
                var li = document.createElement("li");
                var liA = document.createElement("a");
                liA.setAttribute("href", "#");
                liA.setAttribute("onclick",
                    "changePage('https://justin-luoma.github.io/codeup_web_exercises/" + fileName + "')");
                var linkText = fileName.replace(".html", "");
                liA.innerText = linkText;
                li.appendChild(liA);
                contentDiv.appendChild(li);
            }
        });
    } else {
        console.log("there was an error")
    }
};

function sendRequest() {
    request.send();
}


function changePage(page) {
    var iframe = document.getElementById("iframe");
    iframe.src = page;
}

var getHeight = function (elem) {
    elem.style.display = 'block'; // Make it visible
    var height = elem.scrollHeight + 'px'; // Get it's height
    elem.style.display = ''; //  Hide it again
    return height;
};

// Show an element
var show = function (elem) {
    elem.style.display = "table";
    elem.style.opacity = "100";
    elem.classList.add('is-visible'); // Make the element visible
};

// Hide an element
var hide = function (elem) {

    elem.style.opacity = "0";
    // When the transition is complete, hide it
    window.setTimeout(function () {
        elem.classList.remove('is-visible');
        elem.style.display = "none";
    }, 750);

};

var hideMsg = function () {
    hide(document.getElementById("message"));
};

var showMsg = function () {
    show(document.getElementById("message"));
};

function messageShow() {
    showMsg();
    setTimeout(function () {
        hideMsg()
    }, 5000);
}

function windowLoaded() {
    sendRequest();
    messageShow();
}

window.onload = windowLoaded;
