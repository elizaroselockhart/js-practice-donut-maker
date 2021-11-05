let donutDisplay = document.getElementById("donut-display");
let clickDisplay = document.getElementById("click-display");
let autoclickerCount = document.getElementById("autoclickers-purchased");
let multiplierCount = document.getElementById("multipliers-purchased");
let ACPurchaseBtn = document.getElementById("autoclicker-purchase-button");
let MultPurchaseBtn = document.getElementById("donut-multiplier-purchase-button");
let resetBtn = document.getElementById("reset-button");

let myDonutMaker = new DonutMaker();

function updateCount() {
    donutDisplay.innerHTML = (`${myDonutMaker.donuts.toFixed(0)}`);
    clickDisplay.innerHTML = (`${myDonutMaker.clicks.toFixed(0)}`);
    autoclickerCount.innerHTML = ("You have " + myDonutMaker.autoclickers + " autoclickers!");
    multiplierCount.innerHTML = (`You have ${myDonutMaker.multiplierCount} donut multipliers!
    <p>Your multiplier is ${myDonutMaker.multiplier.toFixed(2)}.</p>`);
}

function updatePrices() {
    ACPurchaseBtn.innerText = (`BUY: ${myDonutMaker.autoclickerCost.toFixed(0)} DONUTS`);
    MultPurchaseBtn.innerText = (`BUY: ${myDonutMaker.multiplierCost.toFixed(0)} CLICKS`);
}

resetBtn.addEventListener("click", function() {
    const userResponse = confirm("Are you sure you want to reset?");
    myDonutMaker.reset(userResponse);
});

let milestonePwr = 1;

setInterval(function() {
    myDonutMaker.clickAutomatically();
    if (myDonutMaker.donuts > myDonutMaker.autoclickerCost){
        ACPurchaseBtn.disabled = false;
        ACPurchaseBtn.classList.add("purchasebtn");
    }
    else {
        ACPurchaseBtn.disabled = true;
        ACPurchaseBtn.classList.remove("purchasebtn");
    }

    if (myDonutMaker.clicks > myDonutMaker.multiplierCost){
            MultPurchaseBtn.disabled = false;
            MultPurchaseBtn.classList.add("purchasebtn");
        }
    else {
        MultPurchaseBtn.disabled = true;
        MultPurchaseBtn.classList.remove("purchasebtn");
    }
    if (Math.pow(10, milestonePwr) <= myDonutMaker.donuts)
    {
        celebrationDonut();
        milestonePwr++;
    }
 }, 1000
);