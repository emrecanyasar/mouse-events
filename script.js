document.getElementById('button').onclick=clickEvent;

function clickEvent() {
    var colorDiv = document.getElementById("onClick");
    colorDiv.style.backgroundColor= "#fcd64d";

    setTimeout(function(){
        colorDiv.style.backgroundColor = "white"
    },100);
}

function dblClickEvent() {
    var colorDiv = document.getElementById("ondblclick");
    colorDiv.style.backgroundColor= "#fcd64d";

    setTimeout(function(){
        colorDiv.style.backgroundColor = "white"
    },100);
}

function onContextMenu() {
    var colorDiv = document.getElementById("oncontextmenu");
    colorDiv.style.backgroundColor= "#fcd64d";
    var defaultButton = document.getElementById("button");
    defaultButton.addEventListener("contextmenu",(e)=>{e.preventDefault()});

    setTimeout(function(){
        colorDiv.style.backgroundColor = "white"
    },100);
}

function onMouseDown() {
    var colorDiv = document.getElementById("onmousedown");
    colorDiv.style.backgroundColor= "#fcd64d";

    setTimeout(function(){
        colorDiv.style.backgroundColor = "white"
    },100);
}

function onMouseEnter() {
    var colorDiv = document.getElementById("onmouseenter");
    colorDiv.style.backgroundColor= "#fcd64d";

    setTimeout(function(){
        colorDiv.style.backgroundColor = "white"
    },100);
}

function onMouseLeave() {
    var colorDiv = document.getElementById("onmouseleave");
    colorDiv.style.backgroundColor= "#fcd64d";

    setTimeout(function(){
        colorDiv.style.backgroundColor = "white"
    },100);
}

function onMouseMove() {
    var colorDiv = document.getElementById("onmousemove");
    colorDiv.style.backgroundColor= "#fcd64d";

    setTimeout(function(){
        colorDiv.style.backgroundColor = "white"
    },100);
}

function onMouseOut() {
    var colorDiv = document.getElementById("onmouseout");
    colorDiv.style.backgroundColor= "#fcd64d";

    setTimeout(function(){
        colorDiv.style.backgroundColor = "white"
    },100);
}
function onMouseOver() {
    var colorDiv = document.getElementById("onmouseover");
    colorDiv.style.backgroundColor= "#fcd64d";

    setTimeout(function(){
        colorDiv.style.backgroundColor = "white"
    },100);
}
function onMouseUp() {
    var colorDiv = document.getElementById("onmouseup");
    colorDiv.style.backgroundColor= "#fcd64d";

    setTimeout(function(){
        colorDiv.style.backgroundColor = "white"
    },100);
}