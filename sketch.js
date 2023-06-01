function preload(){
  back = loadImage("background.jpg");
  trainImg = loadImage("train.png");
}

function setup(){
  createCanvas(400,600);
  bg = createSprite(200,200);
  bg.addImage(back);

  textSize(15);
  fill("black")
  text("PRESS RIGHT ARROW TO MOVE THE TRAIN",10,450);
  text("PRESS SPACE BAR TO STOP THE TRAIN",10,500);

  train = createSprite(170,320,40,40);
  train.addImage(trainImg);
  train.scale = 0.5;
}

function draw(){
  if(bg.x < 0){
    bg.x = 200;
  }
  
  if(keyDown("right_arrow")){
    bg.velocityX = -3
  }

  if(keyDown("space")){
    bg.velocityX = 0;
  }
  drawSprites();
}