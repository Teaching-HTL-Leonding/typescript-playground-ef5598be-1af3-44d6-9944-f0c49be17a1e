function setup() {
  createCanvas(400, 400);
  background("lightgray");

  // Define relative sizes and positions based on canvas width and height
  const headWidth = width * 0.50; // Head size as 50% of the canvas width
  const headHeight = height * 0.50; // Head size as 50% of the canvas width
  const headX = width / 2 - headWidth / 2; // Center the head horizontally
  const headY = height / 2 - headHeight / 2; // Center the head vertically
  const mouthWidht = headWidth * 0.5
  const mouthHeight = headHeight * 0.1
  const mouthX = width / 2 - headWidth * 0.25
  const mouthY = height / 2 + headHeight * 0.2
  const eyeX1 = width / 2 - headWidth * 0.25
  const eyeY1 = height / 2 - headHeight * 0.25
  const eyeX2 = width / 2 + headWidth * 0.25
  const eyeY2 = height / 2 - headHeight * 0.25
  const lineX1 = width / 2
  const lineY1 = height / 2 - headHeight/ 2
  const lineX2 = width / 2
  const lineY2 = height / 2 - headHeight *0.75
  const antX = width / 2 
  const antY = height / 2 - headHeight *0.75



  // Draw the robot's head
  fill("gray");
  rect(headX, headY, headWidth, headHeight);
  fill("white")
  rect(mouthX, mouthY, mouthWidht, mouthHeight)
  fill("black")
  circle(eyeX1, eyeY1, 40)
  circle(eyeX2, eyeY2, 40)
  line(lineX1, lineY1, lineX2, lineY2)
  fill("white")
  circle(antX, antY, 20)
 


}
