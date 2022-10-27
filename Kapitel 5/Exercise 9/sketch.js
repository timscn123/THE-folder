let xLod = -50;
let yVand = 10;
let lineWidth = 5;
let lineCount = 10;

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(150);
  frameRate(10);
  xLod = lineCount * lineWidth * -1;
  yVand = lineCount * lineWidth * -1;
}

function draw() {
  background(150);

  for (let i = 0; i < 1; i++) {
    for (let i = 0; i < lineCount; i++) {
      line(xLod, 0, xLod, height);
      xLod += lineWidth;
    }
    xLod -= lineWidth * lineCount - 5;
  }

  for (let i = 0; i < 1; i++) {
    for (let i = 0; i < lineCount; i++) {
      line(0, yVand, width, yVand);
      yVand += lineWidth;
    }
    yVand -= lineWidth * lineCount - 5;
  }

  if (xLod > width) {
    xLod = lineCount * lineWidth * -1;
  }

  if (yVand > height) {
    yVand = lineCount * lineWidth * -1;
  }
}
