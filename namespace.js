/********************************
Filename: namespace.js
Author: Abigail
Description: 
Date: 2018-10-24
*********************************/
var LIU00452 = {
    init: function init() {
        let div = document.createElement("div");
        div.className = "box";
        div.textContent = "liu00452";

        let boxes = document.getElementById("boxes");
        boxes.appendChild(div);


        div.addEventListener("click", LIU00452.Click);
        div.addEventListener("mouseover", LIU00452.mouseOver);
        div.addEventListener("mouseout", LIU00452.mouseOut);
    },
    Click: function () {
        this.style.borderColor = "pink";
        this.style.backgroundColor = "gray";
        console.log(this);
    },

    mouseOver: function (e) {
        e.target.classList.toggle("highlight");
        console.log(e);
    },

    mouseOut: function (e) {
        e.target.classList.toggle("highligght");
        e.target.removeAttribute('style');
        console.log(e);
    }
};
