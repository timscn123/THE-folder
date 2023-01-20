let xShow, yShow;
let x1, x2;
let iterate;
let a = 1,
  b = 1,
  c = 1,
  y;
let a2, b2, c2;
let f, f2;
let inputa, inputb, inputc, button;
let graph;
let v1, v2;

function setup() {
  createCanvas(windowWidth, windowHeight);

  strokeWeight(1.5);

  v1 = createVector(0, 0);
  v2 = createVector(0, 0);

  inputa = createInput();
  inputb = createInput();
  inputc = createInput();
  inputa.position(40, windowHeight - 90);
  inputb.position(40, windowHeight - 60);
  inputc.position(40, windowHeight - 30);
  button = createButton("Go");
  button.size(50, 20);
  button.position(220, windowHeight - 30);
  button.mousePressed(parseText);

  graph = new Graph();

  rectMode(CENTER);
}

function draw() {
  fill(0);
  strokeWeight(2);
  xShow = mouseX - windowWidth / 2;
  yShow = -(mouseY - windowHeight / 2);

  background(150);
  text("a:", 10, windowHeight - 90 + 15);
  text("b:", 10, windowHeight - 60 + 15);
  text("c:", 10, windowHeight - 30 + 15);
  text(
    "Current function: " + a + "x^2 + " + b + "x + " + c,
    10,
    windowHeight - 120 + 15
  );
  line(0, windowHeight / 2, windowWidth, windowHeight / 2);
  line(windowWidth / 2, 0, windowWidth / 2, windowHeight);

  textSize(20);
  text("(" + xShow + ", " + yShow + ")", 10, 25);

  //rect(mouseX, mouseY, 50, 50)
  graph.draw();
}

/*
function Rapson(guess, f, f2) {
  iterate = true;
  x1 = guess;
  while (iterate) {
    if (!(x2 == x1)) {
      x2 = x1 - f(x1) / f2(x1);
    } else {
      iterate = false;
    }
  }
}
*/

function parseText() {
  a = parseFloat(inputa.value());

  b = parseFloat(inputb.value());

  c = parseFloat(inputc.value());
  graph.setValues(a, b, c);
}

class Graph {
  constructor() {
    this.a = 1;
    this.b = 1;
    this.c = 1;
  }

  calcY(x) {
    return -(a * x * x + b * x + c);
  }

  setValues(a, b, c) {
    this.a = a;
    this.b = b;
    this.c = c;
  }

  draw() {
    beginShape();
    noFill();
    strokeWeight(4);
    for (let i = -windowWidth / 2 + 1; i < windowWidth; i++) {
      v1.set(i + windowWidth / 2, graph.calcY(i) + windowHeight / 2);
      vertex(v1.x, v1.y);
    }
    endShape();
  }
}
