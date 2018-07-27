"use strict";

var request = new XMLHttpRequest();
request.open('GET', 'https://api.github.com/repos/justin-luoma/codeup_web_exercises/contents', true);
request.onload = function () {
    // Begin accessing JSON data here
    var data = JSON.parse(this.response);
    if (request.status >= 200 && request.status < 400) {
        // for (var i = 0; i < data.length; i++) {
        //     var obj = data[i];
        //     for (var key in obj) {
        //         if (key === "name") {
        //             console.log(obj[key]);
        //         }
        //     }
        // }
        data.forEach(function (obj) {
            var fileName = obj.name;
            if (fileName.endsWith(".html")) {
                if (fileName === "index.html") {
                    return;
                }
                var contentDiv = document.getElementById("menu-list");
                var li = document.createElement("li");
                // li.setAttribute("class", "luxbar-item");
                var liA = document.createElement("a");
                liA.setAttribute("href", "#");
                liA.setAttribute("onclick",
                    "changePage('https://justin-luoma.github.io/codeup_web_exercises/" + fileName + "')");
                var linkText = fileName.replace(".html", "");
                liA.innerText = linkText;
                li.appendChild(liA);
                contentDiv.appendChild(li);
                // aTag.setAttribute("href", "https://justin-luoma.github.io/codeup_web_exercises/" + fileName);
                // aTag.innerHTML = fileName;
                // contentDiv.appendChild(aTag);
                // contentDiv.appendChild(document.createElement("br"));
            }
        });
        // data.forEach(file => {
        //     var fileName = file.name
        // // console.log(fileName);
        // if (fileName.endsWith(".html")) {
        //     // console.log(fileName)
        //       var contentDiv = document.getElementById("page-content");
        //     var aTag = document.createElement('a');
        //     aTag.setAttribute('href', "https://justin-luoma.github.io/codeup_web_exercises/" + fileName);
        //     aTag.innerHTML = fileName;
        //     contentDiv.appendChild(aTag);
        //     contentDiv.appendChild(document.createElement('br'));
        //    }
        // });
    } else {
        console.log("there was an error")
    }
};

function sendRequest() {
    request.send();
}

window.onload = sendRequest;

function changePage(page) {
    var iframe = document.getElementById("iframe");
    iframe.src = page;
}

// Show an element
var show = function (elem) {

    // Get the natural height of the element
    var getHeight = function () {
        elem.style.display = 'block'; // Make it visible
        var height = elem.scrollHeight + 'px'; // Get it's height
        elem.style.display = ''; //  Hide it again
        return height;
    };

    var height = getHeight(); // Get the natural height
    elem.classList.add('is-visible'); // Make the element visible
    elem.style.height = height; // Update the max-height

    // Once the transition is complete, remove the inline max-height so the content can scale responsively
    // window.setTimeout(function () {
    //     elem.style.height = '';
    // }, 350);

};

// Hide an element
var hide = function (elem) {

    // Give the element a height to change from
    elem.style.height = elem.scrollHeight + 'px';

    // Set the height back to 0
    window.setTimeout(function () {
        elem.style.height = '0';
    }, 1);

    // When the transition is complete, hide it
    window.setTimeout(function () {
        elem.classList.remove('is-visible');
    }, 350);

};

// Toggle element visibility
var toggle = function (elem, timing) {

    // If the element is visible, hide it
    if (elem.classList.contains('is-visible')) {
        hide(elem);
        return;
    }

    // Otherwise, show it
    show(elem);

};

// Listen for click events
document.addEventListener('click', function (event) {

    // Make sure clicked element is our toggle
    if (!event.target.classList.contains('toggle')) return;

    // Prevent default link behavior
    event.preventDefault();

    // Get the content
    var content = document.querySelector(event.target.hash);
    if (!content) return;

    // Toggle the content
    toggle(content);

}, false);