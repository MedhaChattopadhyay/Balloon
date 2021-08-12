var balloon,bimg,bimg2,database,bimg

function preload(){
  bg=loadImage("pro-C35 images/Hot Air Ballon-01.png");
  bimg=loadAnimation("pro-C35 images/Hot Air Ballon-02.png")
  bimg2=loadAnimation("pro-C35 images/Hot Air Ballon-02.png","pro-C35 images/Hot Air Ballon-02.png","pro-C35 images/Hot Air Ballon-02.png"
  ,"pro-C35 images/Hot Air Ballon-03.png","pro-C35 images/Hot Air Ballon-03.png","pro-C35 images/Hot Air Ballon-03.png",
  "pro-C35 images/Hot Air Ballon-04.png","pro-C35 images/Hot Air Ballon-04.png","pro-C35 images/Hot Air Ballon-04.png")
}
function setup() {
  
  createCanvas(1200,600);

  balloon= createSprite(250, 450, 150, 150);
  balloon.addAnimation("balloon1",bimg)
  balloon.scale=0.5
}

function draw() {
  background(bg);  

  if(keyDown(LEFT_ARROW)){
    balloon.x=balloon.x-10;
    balloon.y=balloon.y+0;
    balloon.addAnimation("balloon1",bimg2)
  }
  else if(keyDown(RIGHT_ARROW)){
    balloon.x=balloon.x+10;
    balloon.y=+balloon.y+0;
    balloon.addAnimation("balloon1",bimg2)
  }
  else if(keyDown(DOWN_ARROW)){
    balloon.x=balloon.x+0;
    balloon.y=balloon.y+10;
    balloon.addAnimation("balloon1",bimg2)
  }
  else if(keyDown(UP_ARROW)){
    balloon.x=balloon.x+0;
    balloon.y=balloon.y-10;
    balloon.addAnimation("balloon1",bimg2)
  }
  drawSprites();
}