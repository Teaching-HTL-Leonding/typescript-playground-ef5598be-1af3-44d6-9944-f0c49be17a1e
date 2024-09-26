function setup() {
  createCanvas(650, 650);
}

function mouseMoved() {
  background("lightblue");

  noFill()
  circle(mouseX, mouseY, 20)
  circle(mouseX, mouseY, 40)

  strokeWeight(2)

  rect(mouseX, mouseY,- 30, 0, 30)
  rect(mouseX, mouseY, 30, 0, 30)
  rect(mouseX, mouseY, 0, 30)
  rect(mouseX, mouseY,0, -30)

}
