var seaImg
var shipImg1
function preload(){
  seaImg1=loadImage("sea.png")
  shipImg1=loadAnimation("ship-1.png","ship-2.png","ship-3.png","ship-4.png")

}

function setup(){
  createCanvas(400,400);
  sea=createSprite(200,200,400,400)
  sea.addImage(seaImg1)
  sea.scale=0.3
 sea.velocityX = -2
 

  ship= createSprite(150,200,100,100)
  ship.addAnimation("shiprunning",shipImg1)
  ship.scale = 0.2
}

function draw() {


 background("blue")
if(sea.x < 0){
  sea.x=sea.width/8
}
 


 drawSprites()
}