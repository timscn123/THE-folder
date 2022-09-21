let xDrum1 = 150,
  yDrum1 = 75,
  xDrum2 = 275,
  yDrum2 = 75,
  xDrum3 = 75,
  yDrum3 = 175,
  xDrum4 = 350,
  yDrum4 = 175,
  xDrum5 = 210,
  yDrum5 = 210,
  drumDiameter = 100;

let stringLength = 200,
  stringWidth = 15,
  xString1 = 500,
  xString2 = 515,
  xString3 = 530,
  xString4 = 545,
  xString5 = 560,
  yString = 100;

function preload() {
  Sound1 = loadSound("assets/Drum1.wav");
  Sound2 = loadSound("assets/Drum2.mp3");
  Sound3 = loadSound("assets/Drum3.wav");
  Sound4 = loadSound("assets/Drum4.mp3");
  sound5 = loadSound("assets/Drum5.mp3");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(150);

  circle(xDrum1, yDrum1, drumDiameter);
  circle(xDrum2, yDrum2, drumDiameter);
  circle(xDrum3, yDrum3, drumDiameter);
  circle(xDrum4, yDrum4, drumDiameter);
  circle(xDrum5, yDrum5, 150);

  rect(xString1, yString, stringWidth, stringLength);
  rect(xString2, yString, stringWidth, stringLength);
  rect(xString3, yString, stringWidth, stringLength);
  rect(xString4, yString, stringWidth, stringLength);
  rect(xString5, yString, stringWidth, stringLength);
  ellipse(540, 400, 175, 225);
}

function draw() {}

function mousePressed() {
  if (dist(mouseX, mouseY, xDrum1, yDrum1) < drumDiameter / 2) {
    Sound1.play();
  }
  if (dist(mouseX, mouseY, xDrum2, yDrum2) < drumDiameter / 2) {
    Sound2.play();
  }
  if (dist(mouseX, mouseY, xDrum3, yDrum3) < drumDiameter / 2) {
    Sound3.play();
  }
  if (dist(mouseX, mouseY, xDrum4, yDrum4) < drumDiameter / 2) {
    Sound4.play();
  }
  if (dist(mouseX, mouseY, xDrum5, yDrum5) < 150 / 2) {
    sound5.play();
  }

  if (
    mouseX > xString1 &&
    mouseX < xString1 + stringWidth &&
    mouseY > yString &&
    mouseY < yString + stringLength
  ) {
    //Sound6.play();
    console.log("String 1");
  }
  if (
    mouseX > xString2 &&
    mouseX < xString2 + stringWidth &&
    mouseY > yString &&
    mouseY < yString + stringLength
  ) {
    //Sound7.play();
    console.log("String 2");
  }
  if (
    mouseX > xString3 &&
    mouseX < xString3 + stringWidth &&
    mouseY > yString &&
    mouseY < yString + stringLength
  ) {
    //Sound8.play();
    console.log("String 3");
  }
  if (
    mouseX > xString4 &&
    mouseX < xString4 + stringWidth &&
    mouseY > yString &&
    mouseY < yString + stringLength
  ) {
    //Sound9.play();
    console.log("String 4");
  }
  if (
    mouseX > xString5 &&
    mouseX < xString5 + stringWidth &&
    mouseY > yString &&
    mouseY < yString + stringLength
  ) {
    //Sound10.play();
    console.log("String 5");
  }
}
