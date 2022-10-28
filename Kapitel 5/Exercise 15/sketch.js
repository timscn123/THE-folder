function setup() {
  createCanvas(windowWidth, windowHeight);
  background(150);
  let sum = 0;
  for (let i = 1; i < 101; i++) {
    sum = sum + i;
  }
  console.log(sum);
}

function draw() {}
