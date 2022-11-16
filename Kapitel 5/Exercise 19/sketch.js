//Tegn en masse linjer der roterer om det samme centrum vha af løkker.

let x = 0;
let amount = 10


function setup() {
  createCanvas(windowWidth, windowHeight);
  background(150);
  
  
}

function draw() {
 for (let i = 0; i < amount; i++) {
   line(
     0,
     windowHeight / 2 - 10 * (amount / 2) * i,
     windowWidth,
     windowHeight / 2 - 10 * (amount / 2)
   );
   rotate(10);
 }
}
