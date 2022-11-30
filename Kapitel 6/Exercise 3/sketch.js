let x1 = 90;
let y1 = 50;
let d1 = 60;

let x2 = 100;
let y2 = 100;
let d2 = 50;

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(150);
 
  circle(x1, y1, d1);
  circle(x2, y2, d2);

  overlap(x1, y1, d1, x2, y2, d2);
}

function draw() {}

function overlap(circle1x, circle1y, circle1r, circle2x, circle2y, circle2r) {
  let distance = abs(dist(circle1x, circle1y, circle2x, circle2y));
  console.log(distance);

  if (distance < ((circle1r + circle2r)/2)) {
    console.log("overlap");
  } else {
    console.log("no overlap");
  }
}

/*
if (dist(x1, y1, x2, y2) < (d1 + d2)/2) {
  console.log("overlap");
}
*/