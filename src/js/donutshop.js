class DonutMaker {
     constructor() {};
     donuts = 0;
     clicks = 0;
     multiplier = 1;
     multiplierCost = 10;
     multiplierCount = 0;
     autoclickers = 0;
     autoclickerCost = 100;

     ClickBtn() {
        this.donuts += 1*this.multiplier;
        this.clicks += 1*this.multiplier;
        updateCount();
     }

     purchaseAutoClicker() {
        this.autoclickers += 1;
        this.donuts -= this.autoclickerCost;
        this.autoclickerCost = this.autoclickerCost * 1.1;
        updatePrices();
     }

     purchaseMultiplier() {
        this.clicks -= this.multiplierCost;
        this.multiplierCost = this.multiplierCost * 1.1;
        this.multiplier = this.multiplier*1.2;
        this.multiplierCount += 1;
        updatePrices();
    }

     clickAutomatically() {
        this.donuts += 1*this.autoclickers*this.multiplier;
        updateCount();
    }

    reset(response){
       if (response == true) {
         this.donuts = 0;
         this.clicks = 0;
         this.multiplier = 1;
         this.multiplierCost = 10;
         this.multiplierCount = 0;
         this.autoclickers = 0;
         this.autoclickerCost = 100;
       }
    }
}