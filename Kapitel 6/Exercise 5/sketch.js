function setup() {
  createCanvas(windowWidth, windowHeight);
  background(150);
  gradTilRad(90);
  radTilGrad(Math.PI);
}

function draw() {}

function gradTilRad(a) {
  let b = a * (Math.PI / 180);
  console.log(b);
  return b;
}

function radTilGrad(a) {
  let b = (a / (Math.PI * 2)) * 360;
  console.log(b);
  return b;
}
