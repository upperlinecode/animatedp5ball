//Create global variables to determine starting location and diameter of circle
circlex = 250;
circley = 250;
circleDiameter = 100;
// Create a xSpeed global variable - this will determine the movement of the ellipse on the x-axis
xSpeed = 1; //We set it to 1 so it moves 1 unit per frame.
// Same as above for y speed:
ySpeed = 2;

function setup() {
  createCanvas(500, 500);
}

function draw() {
  background(0); // redraw the background every time draw is run. (gets rid of the 'trail')
  ellipse(circlex, circley, circleDiameter, circleDiameter);

  //We need to change the direction of the circle when it hits borders.
  // If the x coordinate of the circle plus one half of its width is the same as 0 or the width of the canvas then
  // reverse the speed by multiplying the speed in question by -1.

  if((circlex+50 >= width && xSpeed > 0) || (circlex - 50 <= 0 && xSpeed < 0)){
    xSpeed *= -1
  }
  if((circley+50 >= height && ySpeed > 0) || (circley - 50 <= 0 && ySpeed < 0)){
    ySpeed *= -1
  }

  circlex += xSpeed //Add the speed variable to the x coordinate of the circle every time draw() is run
  circley += ySpeed
}
