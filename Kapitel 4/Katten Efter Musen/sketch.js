let x, x1,
    y, y1,
    a, a1,
    b, b1,
    cX, cY,
    cX1, cY1,
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

  x1 = random(0, width);
  y1 = random(0, height);
  
  a = speed;
  b = 0;
  a1 = -speed;
  b1 = 0;

  cX = x + d/2
  cY= y + d/2
  cX1 = x1 + d/2
  cY1 = y1 + d/2
}

function draw() {
  background(30);
  image(img, x, y, d, d);
  image(pac, x1, y1, d, d);
  x += speed * a;
  y += speed * b;
  x1 += speed * a1;
  y1 += speed * b1;
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

  if (x1 + d >= width) {
    a1 = -speed;
    b1 = 0;
  }
  if (x1 <= 0) {
    a1 = speed;
    b1 = 0;
  }
  if (y1 + d >= height) {
    a1 = 0;
    b1 = -speed;
  }
  if (y1 < 0) {
    a1 = 0;
    b1 = speed;
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

  if (keyCode === 83) {
    b1 = speed;
    a1 = 0;
  }
  if (keyCode === 87) {
    b1 = -speed;
    a1 = 0;
  }
  if (keyCode === 65) {
    b1 = 0;
    a1 = -speed;
  }
  if (keyCode === 68) {
    b1 = 0;
    a1 = speed;
  }
}

function collisionCheck() {
  if (Math.sqrt((x1-x)^2 + (y1-y)^2) < d) {
x = random(0, width);
  y = random(0, height);
  }
  }
    
