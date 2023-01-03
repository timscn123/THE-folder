function setup() {
  createCanvas(windowWidth, windowHeight);
  background(150);
  line(0, height / 2, width, height / 2);
  rectMode(CENTER);
  for (let i = 0; i < 10; i++) {
    rect(i * 100 + 60, height / 2, 80, 60);
  }
}
