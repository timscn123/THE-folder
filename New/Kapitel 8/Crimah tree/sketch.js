;

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(150);
  t1 = new Tree(width / 2, height / 2);
  b1 = new Baubel(width / 2, height / 2, 3);
  b2 = new Baubel(width / 2 + 40, height / 2 + 80, 2);
  b3 = new Baubel(width / 2 - 60, height / 2 + 150, 1);
  b4 = new Baubel(width / 2 + 90, height / 2 + 210, 3);
  b5 = new Baubel(width / 2 - 100, height / 2 + 270, 2);
  b6 = new Baubel(width / 2 - 10, height / 2 + 240, 1);
  [t1, b1, b2, b3, b4, b5, b6].forEach((obj) => obj.draw());
}

class Tree {
  constructor(x, y) {
    this.xpos = x;
    this.ypos = y;
    this.width = 300;
    this.height = 300;
    this.layers = 3;
  }

  draw() {
    noStroke();
    rectMode(CENTER);
    fill(150, 75, 0);
    rect(this.xpos, this.ypos + this.height, this.width / 4, this.height / 2);

    fill(0, 150, 0);
    for (let i = 0; i < this.layers; i++) {
      triangle(
        this.xpos,
        this.ypos - i * 40,
        this.xpos - this.width / 2,
        this.ypos + this.height - i * 60,
        this.xpos + this.width / 2,
        this.ypos + this.height - i * 60
      );
    }
  }
}

class Baubel {
  constructor(x, y, colorNumber) {
    this.xpos = x;
    this.ypos = y;
    this.radius = 17;
    this.color = colorNumber;
  }

  draw() {
    stroke(255, 204, 0);
    strokeWeight(2);
    line(this.xpos, this.ypos, this.xpos, this.ypos - 20);

    noStroke();
    if (this.color == 1) {
      fill(255, 0, 0);
    } else if (this.color == 2) {
      fill(0, 255, 0);
    } else if (this.color == 3) {
      fill(0, 0, 255);
    }

    circle(this.xpos, this.ypos, this.radius);
  }
}
