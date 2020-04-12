
var r = 0;
var g = 50;
var b=255;

function setup(){

  createCanvas(1200,400);
}


function draw(){
  r = map(mouseX,0,1200,25,255);
  g = map(mouseX,0,1200,10,160);
  b = map(mouseX,0,1200,30,50);

  background(r,g,b);

  fill(255);

  ellipse(mouseX,200,30,30);

  

  drawSprites();
}