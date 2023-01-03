function setup() {
  createCanvas(windowWidth, windowHeight);
 
  console.log(2 == 2 && 2 == '2'); 
console.log(2 == 2 && 2 == '2' && 2 === '2'); 
console.log(2 == 2 && 2 == '2' || 2!=2); 
console.log('hello' != 'Hello' && 'hello' !== 'Hello');
console.log('hello' != 'Hello' || 'hello' !== 'hello' && 'hello' !== 'heLLo');
console.log(2 === 2 || 2!=3 );
console.log(2 === 2 || 2!='2' && (true || false));

}

function draw() {
background(150);

  if (mouseX < windowWidth/2) { 
  circle(windowWidth/2, windowHeight/2, 200) }

  else if (mouseX > windowWidth/2) {
  rect(windowWidth/2-100, windowHeight/2-100, 200) }

  
}
