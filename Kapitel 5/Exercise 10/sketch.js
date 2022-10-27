// 10. Tegn 10 tilfældige punkter på dit canvas i 10 forskellige farver.
let x = 0;
let y = 0;
let d = 0;

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(150);
  for (let i = 0; i < 10; i++) {
    x = random(0, width);
    y = random(0, height);
    d = random(0, 100);
    fill(random(255), random(255), random(255));
    circle(x, y, d);
  }
}

function draw() {}
