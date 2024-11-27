let menu = document.querySelectorAll(".menu .hamburger");
let menuBox = document.getElementsByClassName("reponsive_menu");//HTML COLLECTION LIST
function openMenu() {
    menuBox[0].style.display = "block";
    menu[0].style.display = "none";
}

function closeMenu(){
    menuBox[0].style.display = "none";
    menu[0].style.display = "block";
}