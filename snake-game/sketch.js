var snake;
var scl=20;
var food;
var l_screen;



function setup() {
  l_screen = 600;
  createCanvas(l_screen, l_screen);
  snake = new Snake();
  frameRate(5);
  // food = createVector(random(width),random(height));
  pickLocation();
}

function pickLocation(){
  var cols = floor(width/scl);
  var rows = floor(height/scl);
  food = createVector(floor(random(cols)),floor(random(rows)));
  food.mult(scl);
}



function draw() {
  background(51);
  snake.death();
  snake.show();
  snake.update();
  
  if (snake.eat(food)){
    pickLocation();
  }
  
  
  fill(255,0,100);
  rect(food.x,food.y,scl,scl);
}

function keyPressed(){
  if (keyCode == UP_ARROW){
    snake.dir(0,-1);
  }else if (keyCode == DOWN_ARROW){
    snake.dir(0,1);
  }else if (keyCode == RIGHT_ARROW){
    snake.dir(1,0);
  }else if (keyCode == LEFT_ARROW){
    snake.dir(-1,0);
  }
}

