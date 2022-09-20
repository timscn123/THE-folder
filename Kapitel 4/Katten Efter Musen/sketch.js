//declares various variables and assign constants to d/diameter and speed
let x, x1,
    y, y1,
    a, a1,
    b, b1,
    d = 60,
    pacspeed = 2.6,
    speed = 2;

//loads image for pacman and ghost
function preload() {
  img = loadImage("ghost.webp");
  pac = loadImage("pac.png");
}

function setup() {
  //creates canvas
  createCanvas(windowWidth, windowHeight);

  //randomizes starting position for ghost and pacman
  x = random(0, width);
  y = random(0, height);
  x1 = random(0, width);
  y1 = random(0, height);

  //ssigns speed value to x and y movement for ghost and pacman
  a = speed;
  b = 0;
  a1 = -pacspeed;
  b1 = pacspeed;

  //alerts player of controls
  alert(
    "Use the arrows to control the ghost. Pacman chases and the ghost must flee."
  );
}

function draw() {
  //draws background and pacman and ghost on top using their x,y position
  background(30);
  image(img, x, y, d, d);
  image(pac, x1, y1, d, d);
  
  //updates x,y position variables for ghost and pacman using speed constant
  x += speed * a;
  y += speed * b;
  x1 += pacspeed * a1;
  y1 += pacspeed * b1;
  
  //runs borderCheck and collisionCheck functions
  borderCheck();
  collisionCheck();
}

//function to check if the ghost/pacman is touching the edge of the canvas using their x,y position
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
    //b1 = 0;
  }
  if (x1 <= 0) {
    a1 = speed;
    //b1 = 0;
  }
  if (y1 + d >= height) {
    //a1 = 0;
    b1 = -speed;
  }
  if (y1 < 0) {
    //a1 = 0;
    b1 = speed;
  }
}


//function to control pacman using WASD and ghost using arrows
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
/*
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
  */
}

function collisionCheck() {
  //checks if the ghost is touching pacman using distance formula
  if (sqrt((x - x1) * (x - x1) + (y - y1) * (y - y1)) < d) {

    //resets player position on game end and notifies them
    x = random(0, width);
    y = random(0, height);
    x1 = random(0, width);
    y1 = random(0, height);
    alert("The ghost has been caught!");
  }
}
    
