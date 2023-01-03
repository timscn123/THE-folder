let inputFirst, inputLast, button, greeting;
function setup() {
  // create canvas
  createCanvas(710, 400);

  inputFirst = createInput();
  inputLast = createInput();
  inputFirst.position(20, 80);
inputLast.position(inputFirst.x, inputFirst.y + inputFirst.height + 10);

  button = createButton("submit");
  button.position(inputLast.x + inputLast.width, inputLast.y);
  button.mousePressed(greet);

  greeting = createElement("h2", "what is your name?");
  greeting.position(20, 5);

  textAlign(CENTER);
  textSize(50);
}

function greet() {
  const name = inputFirst.value();
  const name2 = inputLast.value();
  greeting.html("hello " + name + " " + name2 + "!");
  inputFirst.value("");
  inputLast.value("");
}
