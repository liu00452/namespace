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


        div.addEventListener("click", Click);
        div.addEventListener("mouseover", mouseOver);
        div.addEventListener("mouseout", mouseOut);
   
    
function Click(){
        this.style.borderColor = "pink";
        this.style.backgroundColor = "gray";
        console.log(this);
         }
        
function mouseOver(e){
        e.target.classList.toggle("highlight");
        console.log(e);
    }

 function  mouseOut(e){
        e.target.classList.toggle("highlight");
        e.target.removeAttribute('style');
        console.log(e);
    }}
};

    
