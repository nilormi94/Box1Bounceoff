var box1;

function setup() {
  createCanvas(400, 00);
 
  box1 = new Box(100,100,50,50,3,4);
 
  
}

function draw() {
  background(220);
  box1.show();
  box1.move();
  box1.bounce();
  
}
