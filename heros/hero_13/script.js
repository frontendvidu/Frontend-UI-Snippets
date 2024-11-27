const slide = document.querySelectorAll("div.featured_article_slide");
let slideIndex = 0;
let intervalID = null;

//load initial function once the document get loaded
document.addEventListener("DOMContentLoaded", initial);

//initial slide (present active slide)
function initial () {
    slide[slideIndex].classList.add("featured_article_slide_active");
    intervalID = setInterval("nextSlide()",4000);
}

//use this function when the next button is clicked
function nextSlide() {
    slide[slideIndex].classList.remove("featured_article_slide_active");
    slideIndex++;
    if(slideIndex > 2) {
        slideIndex = 0;
        slide[slideIndex].classList.add("featured_article_slide_active");
    }
    slide[slideIndex].classList.add("featured_article_slide_active");
    clearInterval(intervalID);
}


//use this function to go back to the previous when previous button is clicked

function prevSlide() {
    slide[slideIndex].classList.remove("featured_article_slide_active");
    slideIndex--;
    if(slideIndex < 0) {
        slideIndex = 2;
        slide[slideIndex].classList.add("featured_article_slide_active");
    }
    slide[slideIndex].classList.add("featured_article_slide_active");
    clearInterval(intervalID);
}
