function setup() {
  createCanvas(600, 600);
  background("lightblue");
}

function mouseMoved() {
  const snap = 40; // marker must snap every 40 pixels
  const markerSize = 10; // size of marker

  background("lightblue");

  let x: number


  text(` ${mouseX}, ${mouseY}`, 5, height - 5)
  strokeWeight(3)
  stroke("with")

  rect(mouseX, mouseY, - 30, 0, 30)
  rect(mouseX, mouseY, 30, 0, 30)
  rect(mouseX, mouseY, 0, 30)
  rect(mouseX, mouseY, 0, -30)

}
