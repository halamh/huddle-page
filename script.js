document.addEventListener("DOMContentLoaded", function() {

let button = document.querySelector("button");

function changeColor() {
    button.style.backgroundColor = "hsl(300, 69%, 71%)";
    button.style.color = "white";
}

function restoreColor() {
    button.style.backgroundColor = "";
    button.style.color = "";
}

button.onmousedown = changeColor;
button.onmouseup = restoreColor;

});