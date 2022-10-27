let x = 0;
let y = 0;
let w = 800 / 8;
let color = false;

function setup() {
  createCanvas(800, 800);
  background(150);
  for (let i = 0; i < 8; i++) {
    for (let i = 0; i < 8; i++) {
      color = !color;

      if (color == true) {
        fill(114, 83, 65);
      } else {
        fill(227, 217, 196);
      }

      rect(x, y, w);
      x += 800 / 8;
    }
    color = !color;
    x = 0;
    y += 800 / 8;
  }
}
