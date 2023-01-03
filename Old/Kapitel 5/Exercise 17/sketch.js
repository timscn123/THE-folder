/*Lav en løkke, der tilføje de lige tal i en liste og de ulige tal i en anden liste. 
Skriv de lige tal tilfældige steder i højre side af kanvas og de ulige tal, tilfældige steder, i venstre side af kanvas. */

let numberAmount = 100;
let numberList = [];
let evenNumbers = [];
let unevenNumbers = [];
let padding = 20;

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(150);

  for (let i = 1; i < numberAmount + 1; i++) {
    numberList.push(i);
  }

  for (let i = 1; i < numberAmount + 1; i++) {
    if (numberList[i] % 2 == 0) {
      evenNumbers.push(numberList[i]);
    } else {
      unevenNumbers.push(numberList[i]);
    }
  }

  textSize(15);

  for (let i = 0; i < unevenNumbers.length; i++) {
    text(
      unevenNumbers[i],
      random(padding, windowWidth / 2 - padding),
      random(padding, windowHeight - padding)
    );
  }

  for (let i = 0; i < evenNumbers.length; i++) {
    text(
      evenNumbers[i],
      random(windowWidth / 2 + padding, windowWidth - padding),
      random(padding, windowHeight - padding)
    );
  }
  line(windowWidth / 2, 0, windowWidth / 2, windowHeight);
}

function draw() {}
