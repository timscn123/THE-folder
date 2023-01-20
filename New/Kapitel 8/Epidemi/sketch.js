let x;
let y;
let radius;
let r1;
let r2;
let n;
let mennesker = [];
let smittede = 0;
let rask = 0;

function setup() {
  x = windowWidth / 2;
  y = windowHeight / 2;
  r1 = 1;
  r2 = 1;
  radius = 5;
  n = 100;

  createCanvas(windowWidth, windowHeight);

  for (let i = 0; i < n; i++) {
    mennesker.push(
      new Menneske(
        random(0, windowWidth),
        random(0, windowHeight),
        radius,
        random(-5, 5),
        random(-5, 5)
      )
    );
  }
  mennesker[0].smittet = true;
}

function draw() {
  background(150);
  fill(0);
  textSize(20);
  text("Antal mennesker: " + n, 20, 20);
  text("Antal smittede: " + smittede, 20, 40);
  text("Antal rask: " + rask, 20, 60);

  for (let i = 0; i < n; i++) {
    if (mennesker[i].smittet == true && mennesker[i].måltSyg == false) {
      smittede++;
      mennesker[i].måltSyg = true;
    }
    if (mennesker[i].rask == true && mennesker[i].måltRask == false) {
      rask++;
      mennesker[i].måltRask = true;
      smittede = smittede - 1;
    }
  }

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (i != j) {
        let afstand = dist(
          mennesker[i].x,
          mennesker[i].y,
          mennesker[j].x,
          mennesker[j].y
        );
        if (
          afstand < radius * 2 &&
          (mennesker[i].smittet == true || mennesker[j].smittet == true) &&
          (mennesker[i].rask == false || mennesker[j].rask == false)
        ) {
          console.log("menneske " + i + " og " + j + " rørte");
          mennesker[i].smittet = true;
          mennesker[i].farve = color(255, 0, 0);
        }
      }
    }
  }

  for (let i = 0; i < n; i++) {
    if (mennesker[i].smittet == true) {
      mennesker[i].framesSyg++;
    }
    if (mennesker[i].framesSyg > 350) {
      mennesker[i].rask = true;
      mennesker[i].smittet = false;
      mennesker[i].farve = color(0, 255, 0);
    }
  }

  for (let i = 0; i < n; i++) {
    mennesker[i].draw();
    mennesker[i].collision(windowWidth, windowHeight);
  }
}

class Menneske {
  constructor(x, y, radius, retning_x, retning_y) {
    this.x = x;
    this.y = y;
    this.radius = radius;
    this.retning_x = retning_x;
    this.retning_y = retning_y;
    this.farve = color(random(0, 50), random(0, 255), random(0, 255));
    this.smittet = false;
    this.måltSyg = false;
    this.framesSyg = 0;
    this.rask = false;
    this.måltRask
  }

  draw() {
    fill(this.farve);
    circle(this.x, this.y, this.radius * 2);
  }

  collision(windowWidth, windowHeight) {
    if (this.x + this.radius > windowWidth) {
      this.retning_x = -this.retning_x;
    }
    if (this.x - this.radius <= 0) {
      this.retning_x = -this.retning_x;
    }
    if (this.y + this.radius > windowHeight) {
      this.retning_y = -this.retning_y;
    }
    if (this.y - this.radius <= 0) {
      this.retning_y = -this.retning_y;
    }
    this.x = this.x + this.retning_x;
    this.y = this.y + this.retning_y;
  }
}
