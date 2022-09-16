function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);
}

function draw() {
  background(255);
  //noStroke();
  fill(71, 225, 12);
  orbitControl();
  rotateX(frameCount * 0.02);
  rotateY(frameCount * 0.02);
  box(windowWidth/2, windowHeight/2, 200);
}