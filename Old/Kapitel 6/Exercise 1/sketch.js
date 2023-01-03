function setup() {
  createCanvas(windowWidth, windowHeight);
  background(150);
  add();
  add(5, 6);
}

function draw() {}

function add(a = 2, b = 3) {
  let sum = a + b;
  console.log(sum);
}
