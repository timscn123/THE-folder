/*Lav en løkke, der tilføje de lige tal i en liste og de ulige tal i en anden liste. 
Skriv de lige tal tilfældige steder i højre side af kanvas og de ulige tal, tilfældige steder, i venstre side af kanvas. */

let numberAmount = 100;
let numberList = [];
let evenNumbers = [];
let unevenNumbers = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(150);

  for (let i = 1; i < numberAmount + 1; i++) {
    numberList.push(i);
  }

  for (let i = 1; i < numberAmount + 1; i++) {
    if (numberList[i] % 2 == 0) {
      //console.log("even")
      evenNumbers.push(numberList[i]);
    } else {
      //console.log("not even");
      unevenNumbers.push(numberList[i]);
    }
  }
  console.log(evenNumbers);
  console.log(unevenNumbers);
}

function draw() {}
