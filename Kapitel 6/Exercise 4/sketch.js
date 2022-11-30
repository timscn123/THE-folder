let x1;
let y1;
let d1;
let clickCount = 0;

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(150);
  x1 = random(0, width);
  y1 = random(0, height);
  d1 = random(1, 100);
  circle(x1, y1, d1);
}

function draw() {
  if (mouseIsPressed) {
    circleClick(x1, y1, d1);
  }
}

function circleClick(circleX, circleY, circleD) {
  let x = mouseX;
  let y = mouseY;

  if (dist(x, y, circleX, circleY) < circleD / 2) {
    console.log("Circle clicked");
  }
}
