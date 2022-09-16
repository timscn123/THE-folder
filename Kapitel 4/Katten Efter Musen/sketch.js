let x,
    y,
    a,
    b,
    d = 40,
    speed = 2;

//loads image
function preload() {
  img = loadImage("ghost.webp");
  pac = loadImage("pac.png");
}

//creates canvas, randomizes starting position and sets speed
function setup() {
  createCanvas(windowWidth, windowHeight);
 
  x = random(0, width);
  y = random(0, height);
  
  a = speed;
  b = 0;
}

function draw() {
  background(30);
  image(img, x, y, d, d);
  x += speed * a;
  y += speed * b;
  borderCheck();
}

function borderCheck() {
  if (x + d >= width) {
    a = -speed;
    b = 0;
  }
  if (x <= 0) {
    a = speed;
    b = 0;
  }
  if (y + d >= height) {
    a = 0;
    b = -speed;
  }
  if (y < 0) {
    a = 0;
    b = speed;
  }
}

function keyPressed() {
  if (keyCode === DOWN_ARROW) {
    b = speed;
    a = 0;
  }
  if (keyCode === UP_ARROW) {
    b = -speed;
    a = 0;
  }
  if (keyCode === LEFT_ARROW) {
    b = 0;
    a = -speed;
  }
  if (keyCode === RIGHT_ARROW) {
    b = 0;
    a = speed;
  }
}

function pacMove() {
  if (keyIsDown(83)) {
    b = speed;
    a = 0;
  }
  if (keyIsDown(87)) {
    b = -speed;
    a = 0;
  }
  if (keyIsDown(65)) {
    b = 0;
    a = -speed;
  }
  if (keyIsDown(68)) {
    b = 0;
    a = speed;
  }
}
