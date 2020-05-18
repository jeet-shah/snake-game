var snake,foodx,foody;

function setup() {
  createCanvas(800,800);
  snake = new Snake();
  foodlocation();
  frameRate(3);
}

function draw() {
  background(0);
  if(snake.eat(foodx,foody)){
    foodlocation();
  } 
  snake.update();
  snake.display();
  fill("red");
  rect(foodx,foody,20,20)
  drawSprites();
}

function foodlocation(){
  foodx = floor(random(0,20))*20;
  foody = floor(random(0,20))*20;
}

function keyPressed(){
  if (keyIsDown(UP_ARROW)){
    snake.xdir = 0;
    snake.ydir = -20;        
  }  
  if (keyIsDown(DOWN_ARROW)){
    snake.ydir = 20;
    snake.xdir = 0;
  }
  if (keyIsDown(LEFT_ARROW)){
    snake.xdir = -20;
    snake.ydir = 0;
  }
  if (keyIsDown(RIGHT_ARROW)){
    snake.xdir = 20;
    snake.ydir = 0;
  }
}