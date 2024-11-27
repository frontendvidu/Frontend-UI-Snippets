let prices = document.getElementsByClassName("price_value"); // Node list for prices
let text = document.querySelectorAll(".price p"); // Corrected selector for "/per month/annum"
let monthly = document.getElementsByClassName("monthly");
let annum = document.getElementsByClassName("annually");

function annualPrices() {
    // Change price values to annual prices
    prices[0].innerHTML = "$100";
    prices[1].innerHTML = "$400";
    prices[2].innerHTML = "$600";
    
    // Change text to "/per annum"
    text[0].innerHTML = "/per annum";
    text[1].innerHTML = "/per annum";
    text[2].innerHTML = "/per annum";

    // event.currentTarget.classList.add("active");
    
    monthly[0].classList.remove("active");
    annum[0].classList.add("active");
}

function monthlyPrices() {
    // Change price values to monthly prices
    prices[0].innerHTML = "$20";
    prices[1].innerHTML = "$120";
    prices[2].innerHTML = "$240";
    
    // Change text to "/per month"
    text[0].innerHTML = "/per month";
    text[1].innerHTML = "/per month";
    text[2].innerHTML = "/per month";

    annum[0].classList.remove("active");
    monthly[0].classList.add("active");
}
