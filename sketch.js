var moving,o1,o2,o3


function setup() {
  createCanvas(800,400);
  o1=createSprite(400, 200, 50, 50);
  o1.shapeColor="red"
  o2=createSprite(50, 200, 50, 50);
  o2.shapeColor="red"
  o3=createSprite(600, 200, 50, 50);
  o3.shapeColor="red"
  moving=createSprite(400, 200, 70, 80);
  moving.shapeColor="red"
  o2.velocityX=5;
  o3.velocityX=-5;
}

function draw() {
  background("yellow");  
moving.x= mouseX
moving.y= mouseY
if(isTouch(moving,o2)){
  moving.shapeColor="green"
  o2.shapeColor="green"

}
else{
  moving.shapeColor="red"
  o2.shapeColor="red"

}

bounceoff(o2,o3)

  drawSprites();
}




