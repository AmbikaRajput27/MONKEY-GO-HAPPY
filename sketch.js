var monkey , monkey_running;
var banana ,bananaImage;
var obstacle, obstacleImage;
var foodGroup, obstacleGroup;
var score, ground;
var survivalTime;

function preload()
{
 monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png");
  
  bananaImage = loadImage("banana.png");
  obstaceImage = loadImage("obstacle.png");
 
  foodGroup= new Group();
  obstacleGroup= new Group();
  
}



function setup() {
  createCanvas(670, 400);
  score=0;
  survivalTime=0;
  
   monkey=createSprite(90,370,10,10);
  monkey.addAnimation("monkey_running",monkey_running)
  monkey.scale=0.1;
  
 ground=createSprite(0,400,1500,10);
  

 }
function draw() {
  background("green")
  
  if(keyDown("space")&&monkey.y >= 350)
  {
    monkey.velocityY=-11;
  }
  monkey.velocityY = monkey.velocityY + 0.4;
  monkey.collide(ground);
  
ground.velocityX =-7 ;
 ground.x = ground.width/2;
    
 if(World.frameCount%200===0){
    fruits();
 }
  
  if(World.frameCount%300===0){
    stones();
 }
  
  if(monkey.isTouching(foodGroup)){
  foodGroup.destroyEach();
   score=score+5;
      }
  
  drawSprites()
  stroke("white");
  text(20);
  fill("white") ;
  text("Score: "+ score, 500,50);
  
  stroke("black");
  text(20);
  fill("black");
  var survivalTime=Math.round(frameCount/frameRate());
  text("Survival Time: "+ survivalTime,100,50)
  
}

function fruits()
{
  banana=createSprite(670,Math.round(random(170,230)),10,10);
  banana.addImage(bananaImage);
  banana.scale=0.1;
  banana.velocityX=-5;
  foodGroup.add(banana);
}

function stones()
{
  obstacle=createSprite(670,380,10,10);
  obstacle.addImage(obstaceImage);
  obstacle.velocityX=-6;
  obstacle.scale=0.2;
  obstacleGroup.add(obstacle);
}





