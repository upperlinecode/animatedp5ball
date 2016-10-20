//Create global variables to determine starting location and diameter of circle
circlex = 250;
circley = 250;
circleDiameter = 100;
// Create a xSpeed global variable - this will determine the movement of the ellipse on the x-axis
xSpeed = 1; //We set it to 1 so it moves 1 unit per frame.


function setup() {
  createCanvas(500, 500);
}

function draw() {
  ellipse(circlex, circley, circleDiameter, circleDiameter);
  circlex += xSpeed //Add the speed variable to the x coordinate of the circle every time draw() is run
}
