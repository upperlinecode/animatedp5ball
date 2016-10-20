var xspeed = 2;
var yspeed = 3;
var circlex = 0;
var circley = 250;
var bgColor;
var fillColor;

function setup() {
  createCanvas(500, 500);
  bgColor = color('#375E97');
  fillColor = color('#FB6542');
  
}

function draw() {
  background(bgColor);
  fill(fillColor);
  ellipse(circlex, circley, mouseX, mouseX);
  if((circlex+50 >= width && xspeed > 0) || (circlex - 50 <= 0 && xspeed < 0)){
    xspeed *= -1
  }
  if((circley+50 >= height && yspeed > 0) || (circley - 50 <= 0 && yspeed < 0)){
    yspeed *= -1
  }
  
  circlex += xspeed;
  circley += yspeed;
}

function mouseClicked() {
  bgColor = color(random(255), random(255), random(255));
  fillColor = color(random(255), random(255), random(255));
}