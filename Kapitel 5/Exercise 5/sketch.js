function setup() {
  createCanvas(windowWidth, windowHeight);
  background(150);
  noFill();
  for (let i = 0; i < 30; i++) {
    circle(windowWidth / 2, windowHeight / 2, i * 10);
  }
}
