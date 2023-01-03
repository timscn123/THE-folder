let Cx = 800
let Cy = 500
let CDia = 300
let falling = true

function setup() {
  createCanvas(windowWidth, windowHeight);
    
}

function draw() {
  background(0);
  circle(Cx, Cy, CDia)

  if (falling) {
    Cy += 2
  } else {
    Cy -= 2
  }

  if (Cy > windowHeight-CDia/2 || Cy < 0+CDia/2) {
    falling = !falling
  }
}
