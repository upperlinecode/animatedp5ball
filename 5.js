


//Create global variables to determine starting location and diameter of circle
circlex = 250;
circley = 250;
circleDiameter = 100;
// Create a xSpeed global variable - this will determine the movement of the ellipse on the x-axis
xSpeed = 1; //We set it to 1 so it moves 1 unit per frame.
// Same as above for y speed:
ySpeed = 2;

// Create global variables for background and circle fill:
var bgColor;
var fillColor;

var boing;

function preload() {
  boing = loadSound('boing.wav');
}


function setup() {
  createCanvas(500, 500);
  bgColor = color(0);
  fillColor = color(250,100,100);
}

function draw() {
  background(bgColor); // redraw the background every time draw is run. (gets rid of the 'trail')
  fill(fillColor);
  ellipse(circlex, circley, circleDiameter, circleDiameter);

  //We need to change the direction of the circle when it hits borders.
  // If the x coordinate of the circle plus one half of its width is the same as 0 or the width of the canvas then
  // reverse the speed by multiplying the speed in question by -1.

  if((circlex+50 >= width && xSpeed > 0) || (circlex - 50 <= 0 && xSpeed < 0)){
    xSpeed *= -1
    //play the boing sound when the ball hits the sides
    boing.play();
  }
  if((circley+50 >= height && ySpeed > 0) || (circley - 50 <= 0 && ySpeed < 0)){
    ySpeed *= -1
    //play the boing sound when the ball hits the top or bottom
    boing.play();
  }

  circlex += xSpeed //Add the speed variable to the x coordinate of the circle every time draw() is run
  circley += ySpeed
}

//listener function that changes background and fill based on mouse click.
function mouseClicked() {
  bgColor = color(random(255), random(255), random(255));
  fillColor = color(random(255), random(255), random(255));
}
