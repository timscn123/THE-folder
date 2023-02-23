//creates global variables
let xShow, yShow;
let x0, x1;
let a = 0.01,
  b = 0,
  c = -100;
let ca, cb, cc, r;
let a2, b2;
let lina = 2,
  linb = 0;
let inputa, inputb, inputc, button, inputa1, inputguess, inputb1, button1, buttonguess;
let graph, linGraph;
let v1, v2, collide;
let guess = 1;

//runs at start
function setup() {
  //creates canvas and sets stroke weight for input fields and buttons
  createCanvas(windowWidth, windowHeight);
  strokeWeight(1.5);

  //creates vectors for calculating and showing graphs
  v1 = createVector(0, 0);
  v2 = createVector(0, 0);
  collide = createVector(0, 0);

  //creates input fields for a, b, c for the quadratic function and a, b for the linear function
  inputa = createInput();
  inputa.value(a);
  inputb = createInput();
  inputb.value(b);
  inputc = createInput();
  inputc.value(c);
  inputa1 = createInput();
  inputa1.value(lina);
  inputb1 = createInput();
  inputb1.value(linb);
  inputguess = createInput();
  inputguess.value(guess);

  inputa.position(40, windowHeight - 90);
  inputb.position(40, windowHeight - 60);
  inputc.position(40, windowHeight - 30);
  inputa1.position(windowWidth - 250, windowHeight - 60);
  inputb1.position(windowWidth - 250, windowHeight - 30);
  inputguess.position(10, 120);

  //creates buttons for the input fields
  button = createButton("Go");
  button1 = createButton("Go");
  buttonguess = createButton("Go");

  button.size(50, 20);
  button1.size(50, 20);
  buttonguess.size(50, 20);
  button.position(220, windowHeight - 30);
  button1.position(windowWidth - 70, windowHeight - 30);
  buttonguess.position(190, 120);
  button.mousePressed(parseText);
  button1.mousePressed(parseTextLinear);
  buttonguess.mousePressed(parseGuess);

  //creates graph and linGraph objects
  graph = new Graph();
  linGraph = new LinGraph();
}

//runs every frame
function draw() {
  //sets color and strokeWeight for the graph
  fill(0);
  strokeWeight(2);

  //sets xShow and yShow to the mouse position
  xShow = mouseX - windowWidth / 2;
  yShow = -(mouseY - windowHeight / 2);

  //sets the background color
  background(150);

  //creates textboxes for describing the input fields by "fixing" it to the sides of the window
  text("Guess:", 10, 110);
  text("a:", 10, windowHeight - 90 + 15);
  text("b:", 10, windowHeight - 60 + 15);
  text("c:", 10, windowHeight - 30 + 15);
  text("a:", windowWidth - 285, windowHeight - 45);
  text("b:", windowWidth - 285, windowHeight - 15);

  //displays the current quadratic function in the "Quadratic function:" textbox
  text(
    "Quadratic function: " + a + "x^2 + " + b + "x + " + c,
    35,
    windowHeight - 120 + 15
  );

  //displays the current linear function in the "Linear function:" textbox
  text(
    "Linear function: " + lina + "x + " + linb,
    windowWidth - 250,
    windowHeight - 75
  );

  //runs newtonRaphson function to fill the "Collides at:" textbox
  newtonRaphson(a, b, c, lina, linb, guess, 0.0001, 1000);

  //displays the collisionvector in the "Collides at:" textbox
  text(
    "Collides at: (" + collide.x.toFixed(0) + "," + collide.y.toFixed(0) + ")",
    10,
    60
  );

  //draws the x and y axis
  line(0, windowHeight / 2, windowWidth, windowHeight / 2);
  line(windowWidth / 2, 0, windowWidth / 2, windowHeight);

  //sets textsize to 20 and displays the mouse position in the coordinatesystem
  textSize(20);
  text("Pointer at: (" + xShow + ", " + yShow + ")", 10, 25);

  //draws the graphs using the draw() function in the Graph and LinGraph class
  graph.draw();
  linGraph.draw();
}

//runs when the "Go" button is pressed
function parseText() {
  //parses the input fields for the quadratic function, converts them to float and sets the values of the graph object
  a = parseFloat(inputa.value());
  b = parseFloat(inputb.value());
  c = parseFloat(inputc.value());
}

//runs when the "Go" button is pressed
function parseTextLinear() {
  //parses the input fields for the linear function, converts them to float and sets the values of the linGraph object
  lina = parseFloat(inputa1.value());
  linb = parseFloat(inputb1.value());
}

function parseGuess() {
  guess = parseFloat(inputguess.value());
}

//creates class Graph to draw the quadratic function
class Graph {
  //runs when the object is created setting the type to "quadratic"
  constructor() {
    this.type = "quadratic";
  }

  //defines the draw function within the Graph class
  draw() {
    //begins the shape, makes it not fill the shape and sets the strokeWeight to 4
    beginShape();
    noFill();
    strokeWeight(4);

    //for loop that draws the graph across the window
    for (let i = -windowWidth / 2 + 1; i < windowWidth; i++) {
      //calculates coordinates from the x value and sets the vector v1 to the coordinates
      v1.set(
        i + windowWidth / 2,
        -calcY(i, graph.type, false) + windowHeight / 2
      );

      //uses P5.js vertex function to draw the graph from vector v1
      vertex(v1.x, v1.y);
    }
    //ends the shape
    endShape();
  }
}

//creates class LinGraph to draw the linear function
class LinGraph {
  //runs when the object is created setting the type to "linear"
  constructor() {
    this.type = "linear";
  }

  //defines the draw function within the LinGraph class
  draw() {
    //begins the shape, makes it not fill the shape and sets the strokeWeight to 4
    beginShape();
    noFill();
    strokeWeight(4);

    //for loop that draws the graph across the window
    for (let i = -windowWidth / 2 + 1; i < windowWidth; i++) {
      //calculates coordinates from the x value and sets the vector v2 to the coordinates
      v2.set(
        i + windowWidth / 2,
        -calcY(i, linGraph.type, false) + windowHeight / 2
      );

      //uses P5.js vertex function to draw the graph from vector v2
      vertex(v2.x, v2.y);
    }
    //ends the shape
    endShape();
  }
}

//calculates the y value of the mathematical function depending on the type of function and whether it is the function or the derivative
function calcY(x, type, diff) {
  //quadratic function
  if (type == "quadratic") {
    if (diff == false) {
      return a * x * x + b * x + c;

      //derivative of quadratic function
    } else if (diff == true) {
      return 2 * a * x + b;
    }
  }

  //linear function
  if (type == "linear") {
    if (diff == false) {
      return lina * x + linb;

      //derivative of linear function
    } else if (diff == true) {
      return lina;
    }
  }
}

//runs the Newton Raphson algorithm using the parameters a, b, c, a1, b1, guess, precision and maxRuns
//guess is the first guess, precision is the precision of the result and maxRuns is the maximum amount of times the algorithm runs
function newtonRaphson(a, b, c, a1, b1, guess, precision, maxRuns) {
  //sets first guess using the guess parameter
  x0 = guess;

  //runs the algorithm maxRuns times
  for (let i = 0; i < maxRuns; i++) {
    //checks if the difference between the y values of the quadratic and linear function is smaller than the precision
    //(and if they collide)
    if (
      Math.abs(calcY(x0, graph.type, false) - calcY(x0, linGraph.type, false)) <
      precision
    ) {
      //if true, sets the collide vector to the x and y value of the point where the functions collide
      collide.set(x0, calcY(x0, graph.type, false));

      //returns the x value of the point where the functions collide
      return x0;
    }
    //if the previous if statement is false, calculates the next guess using the Newton Raphson algorithm
    x1 =
      x0 -
      (calcY(x0, graph.type, false) - calcY(x0, linGraph.type, false)) /
        (calcY(x0, graph.type, true) - calcY(x0, linGraph.type, true));
    x0 = x1;
  }
}
