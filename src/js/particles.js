const canvas = document.getElementById("canvas");
const context = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const donutImage = new Image();
donutImage.src = "/src/images/donut_transparent.png";

let particleArray = [];
const maxSize = 200;

let now = Date.now();
let then = Date.now();
let delta = (then - now) / 1000; //how many seconds passed

class ConfettiDonut {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.xMomentum = Math.random()*400 - 200;
        this.yMomentum = Math.random()*400 - 200;
        this.rotation = 0;
        this.opacity = 1;
        this.size = 0.1;
    }

    draw(){
        context.save();
        context.globalAlpha = this.opacity;
        context.translate(this.x, this.y);
        context.rotate(Math.PI / 180 * this.rotation);
        context.drawImage(donutImage, (-donutImage.width / 4) * this.size, (-donutImage.height / 4) * this.size, (donutImage.width / 2)*this.size, (donutImage.height / 2) * this.size);
        context.restore();
    }

    update() {
        this.rotation += 1;
        this.opacity -= .5 * delta;
        this.x += this.xMomentum * delta;
        this.y += this.yMomentum * delta;
    }
}

class CelebrationDonut {
    constructor() {
        this.x = Math.random()*canvas.width;
        this.y = 0;
        this.xMomentum = Math.random()*10;
        this.yMomentum = Math.random()*10;
        this.rotation = 0;
        this.opacity = 1;
        this.size = 0.5;
    }

    draw(){
        context.save();
        context.globalAlpha = this.opacity;
        context.translate(this.x, this.y);
        context.rotate(Math.PI / 180 * this.rotation);
        context.drawImage(donutImage, (-donutImage.width / 4) * this.size, (-donutImage.height / 4) * this.size, (donutImage.width / 2)*this.size, (donutImage.height / 2) * this.size);
        context.restore();
    }

    update() {
        this.rotation += 1;
        this.opacity -= 0.3 * delta;
        this.y += this.yMomentum;
    }
}

//init (initial values)
function init() {
    particleArray = [];
}

//animate (handles putting all these pieces together)
function animate(){
    requestAnimationFrame(animate);
    now = Date.now();
    delta = (now - then) / 1000; //updates time variable
    //console.log(1/delta);
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    context.clearRect(0,0,canvas.width, canvas.height);
    particleArray.forEach(function(particle){
        particle.update();
        particle.draw();
    });
    particleArray = particleArray.filter(function(particle){
        return particle.opacity >= 0.05; //&& particle.size >= .1;
        
    });
    then = Date.now();
}

function confettiDonut(event){
    let x = event.pageX;
    let y = event.pageY;

    for (let i = 1; i < 6; i++) {
        particleArray.push(new ConfettiDonut(x, y));
    }
}

function celebrationDonut() {
    for (let j = 1; j < 51; j++) {
        particleArray.push(new CelebrationDonut())
    }
}

// setInterval(function() {
//     if (myDonutMaker.donuts > 10 || myDonutMaker.donuts > 100 || myDonutMaker.donuts > 1000 || myDonutMaker.donuts > 10000 || myDonutMaker.donuts > 100000 || myDonutMaker.donuts > 10000000)
//      celebrationDonut();
// }, 1000);

document.getElementById('donut-button').addEventListener('click', confettiDonut);

init();
animate();