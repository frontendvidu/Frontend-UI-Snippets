let buttons = document.getElementsByClassName("btn-size"); //html collection list
let count = 1;
let value = document.getElementsByClassName("quantity-number");

function activeButton(event) {
    for(let i = 0;i<buttons.length;i++) {
        buttons[i].classList.remove("active");
    }

    event.currentTarget.classList.add("active");
}

function incrementer() {
    count += 1;    
    value[0].innerHTML = count;
}

function decrementer() {
    count -= 1;
    if(count < 0){
        value[0].innerHTML = 0;
        count = 0;
    } else {
        value[0].innerHTML = count;
    }
    
}

