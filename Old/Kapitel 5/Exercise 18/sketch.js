//Skriv et program, der finder det største element i en liste, printer det i konsollen og fjerner det fra listen.
//Gentag denne procedure(gerne med en løkke inde i en løkke) indtil listen er tom.
//Brug evt.en eller flere af operationerne push, unshift, pop, shift, slice.

array = [7, 4, 5, 6, 9, 1, 2, 8, 3, 10];
let high;
let index;
let cycles = array.length;

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(150);

  for (let i = 0; i < cycles; i++) {
    high = 0;
    for (let x = 0; x < cycles; x++) {
      if (array[x] > high) {
        high = array[x];
        index = x;
      }
    }
    console.log(high);
    array.splice(index, 1);
  }
}
