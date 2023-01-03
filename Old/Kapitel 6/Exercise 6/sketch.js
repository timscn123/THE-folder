//Lav en funktion der som input tager tre sidelængder 
//og efterfølgende konstruerer en trekant med de vinkler 
//og angivelser af sidelængderne, som beregnes ved brug af de trigonometriske funktioner.


function setup() {
  createCanvas(windowWidth, windowHeight);
  background(150);
  
  trekant(200, 200, 200);
}

function draw() {
  
}

function trekant(a, b, c) {
  let A = Math.acos((a*a + c*c - b*b) / (2*a*c));
  let B = Math.acos((a*a + b*b - c*c) / (2*a*b));
  let C = Math.acos((b*b + c*c - a*a) / (2*b*c));
  console.log(A, B, C);

  angleMode(DEGREES);
  
  line(width/2-50, height/2+50, width/2-50+b, height/2+50);
}