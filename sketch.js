var bullet,wall;
var speed,weight,thickness;
var restart,restartImg;

function preload(){
  restartImg = loadImage("restart.png");
}

function setup() {
  createCanvas(1600,400);

  speed=Math.round(random(223,321));
  weight=Math.round(random(30,52));
  thickness=Math.round(random(22,83));

  bullet=createSprite(10,200,50,10);
  bullet.velocityX=speed;
  bullet.shapeColor="white";

  wall=createSprite(1200,200,thickness,height/2);
  wall.shapeColor=color(80,80,80);
  wall.debug=true;

  restart=createSprite(800,350,20,20);
  restart.addImage(restartImg);
  
}

function draw() {
  background("black"); 
  text("weight :"+weight,800,10);
  text("speed :"+speed,800,25);
  text("thickness :"+thickness,800,35);

  if(hasCollided(bullet,wall)){
    bullet.velocityX=0;
    var damage =0.5*weight*speed*speed/(thickness*thickness*thickness);
    
    if(damage>10){
      wall.shapeColor="red";
    }

    if(damage<10){
      wall.shapeColor="green";
    }
  }

  if(mousePressedOver(restart)){
    reset();
  }
  
  drawSprites();
}

function reset(){
  bullet.x=20;
  thickness=Math.round(random(22,83));
  speed=Math.round(random(223,321));
  weight=Math.round(random(30,52));

  bullet.velocityX=speed;
  bullet.shapeColor="white";

  wall.width=thickness
  wall.shapeColor=color(80,80,80);
}

function hasCollided(lbullet,lwall){
  bulletRightEdge=lbullet.x+lbullet.width;
  wallLeftEdge=lwall.x;
  if(bulletRightEdge>=wallLeftEdge)
  {
    return true 
  }
  return false;
}