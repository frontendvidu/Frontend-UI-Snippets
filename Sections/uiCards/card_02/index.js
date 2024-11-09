let card = document.getElementsByClassName("cards");
let outer = document.getElementById("outer");

function next() {
    outer.style.scrollBehavior = "smooth";
    outer.scrollLeft += 300;


}

function previous() {
    outer.style.scrollBehavior = "smooth";
    outer.scrollLeft -= 300;


}

function onWheel(event) {
    event.preventDefault();
    outer.scrollLeft += event.deltaY;
    outer.style.scrollBehavior = "auto";



}