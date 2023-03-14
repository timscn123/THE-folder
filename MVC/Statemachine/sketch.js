let bSubmit, bResolve, bReject
let stateMachine

function setup() {
  createCanvas(400, 400);
  bSubmit = createButton('Submit');
  bSubmit.position(0, 0);
  bSubmit.mousePressed(submitButton);
  bResolve = createButton('Resolve');
  bResolve.position(0, 50);
  bResolve.mousePressed(resolveButton);
  bReject = createButton('Reject');
  bReject.position(0, 100);
  bReject.mousePressed(rejectButton);
  stateMachine = new StateMachine()
  frameRate(10);
}

function draw() {
  background(255, 255, 255);
  view(stateMachine);
}

//Inspiration
//https://24ways.org/2018/state-machines-in-user-interfaces/
//https://musing-rosalind-2ce8e7.netlify.app/?machine=%7B%22key%22%3A%22login%20form%22%2C%22initial%22%3A%22start%22%2C%22states%22%3A%7B%22start%22%3A%7B%22on%22%3A%7B%22SUBMIT%22%3A%22loading%22%7D%7D%2C%22loading%22%3A%7B%22on%22%3A%7B%22REJECT%22%3A%22error%22%2C%22RESOLVE%22%3A%22success%22%7D%7D%2C%22error%22%3A%7B%22on%22%3A%7B%22SUBMIT%22%3A%22loading%22%7D%7D%2C%22success%22%3A%7B%7D%7D%7D 

//Model
class StateMachine{
  constructor(){
    this.currentState='start'
  }

  transition(event) {
    switch (this.currentState) {
        case 'start':
            if (event == 'SUBMIT') {
              this.currentState='loading';
            }
            break;
        case 'loading':
            if (event == 'RESOLVE') {
              this.currentState='success';
            } else if (event == 'REJECT') {
              this.currentState='error';
            }
            break;
        case 'success':
            // Accept no further events
            break;
        case 'error':
            if (event == 'SUBMIT') {
              this.currentState='loading';
            }
            break;
        default:
            // This should never occur
            this.currentState=undefined;
    }
  }
} 

//View - This could be made to a class also
function view(model){
  text("The current state is: "+model.currentState,100,200)
  switch(model.currentState){
    case 'start':
      bSubmit.show()
      bReject.hide()
      bResolve.hide()
      text("Type in your password and submit",100,100)
      break;
    case 'loading':
      bSubmit.hide()
      bReject.show()
      bResolve.show()
      text("A valid password is resolved. An invalid password is rejected",100,100,170,100)
      break;  
    case 'success':
      bSubmit.hide()
      bReject.hide()
      bResolve.hide()
      text("You did it - hit F5 to reset",100,100)
      break;
    case 'error':
      bSubmit.show()
      bReject.hide()
      bResolve.hide()
      text("Try again",100,100,100,100)
      break;
  }
}



//Controller - This could be made to a class also
function submitButton(){
  let activeEvent='SUBMIT';
  stateMachine.transition(activeEvent)
}

function resolveButton(){
  let activeEvent='RESOLVE';
  stateMachine.transition(activeEvent)
}

function rejectButton(){
  let activeEvent='REJECT';
  stateMachine.transition(activeEvent)
}









