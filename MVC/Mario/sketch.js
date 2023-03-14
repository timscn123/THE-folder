let bJump, bMove, bCrouch


function setup() {
  createCanvas(windowWidth, windowHeight);
  background(150);
  bJump = createButton('Jump');
  bJump.position(0, 0);
  bJump.mousePressed(jumpButton);
}

function draw() {
  
}
