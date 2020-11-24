function setup() {
  createCanvas(1600,400);
  Speed=random(223,321)
  weight=random(30,52)
  thickness=random(22,83)
   bullet =createSprite(50, 200, 50, 5);
  bullet.velocityX=Speed
  bullet.shapeColor=color("white")
  wall=createSprite(1200,200,thickness,200)
  wall.shapeColor=color("cyan")
}

function draw() {
  background("black");  
  
  if(hasCollided(bullet,wall)){
    bullet.velocityX=0
    var damage=0.5*weight*Speed*Speed/(thickness*thickness*thickness)
  
  if(damage>10){
    wall.shapeColor=color("green") 
  }
  if(damage<10 ){
    wall.shapeColor=color("red")
  }
  
}
  drawSprites();
}
function hasCollided(obj1,obj2){
obj1rightedge=obj1.x+obj1.width
obj2leftedge=obj2.x
if(obj1rightedge>=obj2leftedge){
return true
}
return false 
}