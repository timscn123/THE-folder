let x = 0;
let y = 0;

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(150);
  let navne = [
    "Alma",
    "Oscar",
    "Ida",
    "Karl",
    "Clara",
    "William",
    "Ella",
    "Oliver",
    "Olivia",
    "Alfred",
  ];

  for (let i = 0; i < navne.length; i++) {
    textSize(navne[i].length * 6);
    text(navne[i], random(50, windowWidth - 50), random(50, windowHeight - 50));
  }
}

function draw() {}
