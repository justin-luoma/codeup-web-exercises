"use strict";

// turtle, a lion, a tiger, a bear, a field of grain, a beach, a river, and a lake.

(function () {
    let i = 0;
    let bgArray = ["../img/turtle.jpg", "../img/lion.jpg", "../img/tiger.jpg", "../img/bear.jpg", "../img/grain.jpg", "../img/beach.jpg", "../img/river.jpg", "../img/lake.jpg"];
    let intervalID = setInterval(() => {
        if (i === bgArray.length) {
            i = 0;
        }
        let body = document.body;
        // body.style.backgroundRepeat = "no-repeat";
        // body.style.backgroundSize = "cover";
        // body.style.backgroundImage = "url(" + bgArray[i] + ")";
        body.id = "img-" + i;
        i++;
    }, 2000);
})();

