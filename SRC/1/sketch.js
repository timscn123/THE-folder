let xShow, yShow;
let x0, x1;
let iterate;
let a = 0.01,
  b = 0,
  c = 0;

let a2, b2;

let lina = 1,
  linb = 1,
  lina1 = 0;

let inputa, inputb, inputc, button, inputa1, inputb1, button1;
let graph, linGraph;
let v1, v2;

function setup() {
  createCanvas(windowWidth, windowHeight);

  strokeWeight(1.5);

  v1 = createVector(0, 0);
  v2 = createVector(0, 0);

  inputa = createInput();
  inputb = createInput();
  inputc = createInput();
  inputa1 = createInput();
  inputb1 = createInput();

  inputa.position(40, windowHeight - 90);
  inputb.position(40, windowHeight - 60);
  inputc.position(40, windowHeight - 30);
  inputa1.position(windowWidth - 250, windowHeight - 60);
  inputb1.position(windowWidth - 250, windowHeight - 30);

  button = createButton("Go");
  button1 = createButton("Go");

  button.size(50, 20);
  button1.size(50, 20);
  button.position(220, windowHeight - 30);
  button1.position(windowWidth - 70, windowHeight - 30);
  button.mousePressed(parseText);
  button1.mousePressed(parseTextLinear);

  graph = new Graph("quadratic");
  diff(graph.type);
  linGraph = new Graph("linear");
  diff(linGraph.type);

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
    "Quadratic function: " + a + "x^2 + " + b + "x + " + c,
    35,
    windowHeight - 120 + 15
  );
  text("a:", windowWidth - 285, windowHeight - 45);
  text("b:", windowWidth - 285, windowHeight - 15);
  text(
    "Linear function: " + lina + "x + " + linb,
    windowWidth - 250,
    windowHeight - 75
  );

  line(0, windowHeight / 2, windowWidth, windowHeight / 2);
  line(windowWidth / 2, 0, windowWidth / 2, windowHeight);

  textSize(20);
  text("(" + xShow + ", " + yShow + ")", 10, 25);

  graph.draw();
  linGraph.draw();
}

function parseText() {
  a = parseFloat(inputa.value());
  b = parseFloat(inputb.value());
  c = parseFloat(inputc.value());
  graph.setValues(a, b, c);
  diff(graph.type);
}

function parseTextLinear() {
  lina = parseFloat(inputa1.value());
  linb = parseFloat(inputb1.value());
  linGraph.setValues(lina, linb);
  diff(linGraph.type);
}

class Graph {
  constructor(type) {
    this.a = 0;
    this.b = 0;
    this.c = 0;
    this.type = type;
  }

  calcY(x) {
    return -(a * x * x + b * x + c);
  }

  calcYLinear(x) {
    return -(lina * x + linb);
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

    if (this.type == "quadratic") {
      for (let i = -windowWidth / 2 + 1; i < windowWidth; i++) {
        v1.set(i + windowWidth / 2, graph.calcY(i) + windowHeight / 2);
        vertex(v1.x, v1.y);
      }
    } else if (this.type == "linear") {
      for (let i = -windowWidth / 2 + 1; i < windowWidth; i++) {
        v2.set(i + windowWidth / 2, linGraph.calcYLinear(i) + windowHeight / 2);
        vertex(v2.x, v2.y);
      }
    }
    endShape();
  }
}

function diff() {
  a2 = b;
  b2 = c;
  lina1 = linb;
}

function newtonRaphson(a, b, c, a1, b1, guess, precision, macRuns) {
  for (let i = 0; i < maxRuns; i++) {
    if (Math.abs(graph.calcY - linGraph.calcYLinear) < precision) {
      return x0;
    }
  }
}
