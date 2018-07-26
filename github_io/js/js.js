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
                    "changePage('https://justin-luoma.github.io/codeup_web_exercises/" +fileName + "')");
                var linkText = fileName.replace(".html","");
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