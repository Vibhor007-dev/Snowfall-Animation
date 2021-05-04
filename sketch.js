
var snow1,snow2,snow3,snow4,snow5;
var snow1Img, snow2Img, snow3Img, snow4Img, snow5Img
var bgimg;
function preload(){
  snow1Img=loadImage("snow4.webp");
  snow2Img=loadImage("snow4.webp");
  snow3Img=loadImage("snow4.webp");
  snow4Img=loadImage("snow4.webp");
  snow5Img=loadImage("snow4.webp");
}
function setup() {
  createCanvas(800,400);
  snow1=createSprite(200,80,20,20);
  snow1.addImage(snow1Img);
  snow1.scale=0.2;

  snow2=createSprite(300,80,20,20);
  snow2.addImage(snow1Img);
  snow2.scale=0.2;

  snow3=createSprite(400,80,20,20);
  snow3.addImage(snow1Img);
  snow3.scale=0.2;

  snow4= createSprite(500,80,20,20);
  snow4.addImage(snow1Img);
  snow4.scale=0.2;

  snow5= createSprite(600,80,20,20);
  snow5.addImage(snow1Img);
  snow5.scale=0.2;

  bgimg=loadImage("snow3.jpg");
}

function draw() {
  background(bgimg);  
  drawSprites();
  snow1.display();
  snow2.display();
  snow3.display();
  snow4.display();
  snow5.display();
  
    
  textSize(40);
  text("Snowfall Animation",400,380);
  fill("red");
  movement();
  drawSprites();
}
function movement(){
  if(frameCount%80===0) {
    console.log(frameCount);
    snow1.y=random(10,400);
    snow2.y=random(10,400);
    snow3.y=random(10,180);
    snow4.y=random(10,180);
    snow5.y=random(10,180);
}
}