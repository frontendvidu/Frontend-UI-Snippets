let prevImage = document.querySelectorAll(".images img");
let mainImage = document.querySelectorAll(".center img");
let slideIndex = 0;
let size = document.querySelectorAll(".size span");
let color =  document.getElementsByClassName("color_circle");
let icon = document.getElementsByClassName("plain_heart");

function changeImage(x) {
    slideIndex = x;
    for(let i = 0;i<prevImage.length;i++) {
        prevImage[i].classList.remove("active");
    }

    for(let i = 0;i<mainImage.length;i++) {
        mainImage[i].style.display = "none";
    }

    if(slideIndex<0) {
        slideIndex = prevImage.length-1;
    } else if(slideIndex>prevImage.length-1) {
        slideIndex = 0;
       
    } else {
        slideIndex = x;
    }
    
    prevImage[slideIndex].classList.add("active");
    mainImage[slideIndex].style.display = "block";

    
}

function nextSlide() {
    slideIndex += 1;
    changeImage(slideIndex);
}

function prevSlide() {
    slideIndex -= 1;
    changeImage(slideIndex);
}

function activeSize(event) {
    for(let i = 0;i<size.length;i++) {
        size[i].classList.remove("active");
    }
    event.currentTarget.classList.add("active");
}

function activeColor(event) {
    for(let i = 0;i<color.length;i++) {
        color[i].classList.remove("active");
    }
    event.currentTarget.classList.add("active");
}

function iconChange(){
    icon[0].classList.toggle("heart-filled");
}



changeImage(0)