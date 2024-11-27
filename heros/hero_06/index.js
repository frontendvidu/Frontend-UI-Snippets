let column = document.getElementsByClassName("column");//HTML collection list
let headsetImage = document.getElementsByClassName("headset");//HTML Collection list


function showImage(x) {
    for(let i = 0;i<headsetImage.length;i++) {
        headsetImage[i].style.display = "none";
    }
    for(let i = 0;i<column.length;i++) {
        column[i].classList.remove("active");
    }

    headsetImage[x].style.display = "block";

    column[x].classList.add("active");




}

document.getElementById("defaultOpen").click();