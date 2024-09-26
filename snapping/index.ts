function setup() {
  createCanvas(600, 600);
  background("lightblue");
}

function mouseMoved() {
  const snap = 40; // marker must snap every 40 pixels
  const markerSize = 10; // size of marker

  background("lightblue");

  let x: number= Math.round(mouseX / 40)*40
  let y: number= Math.round(mouseY / 40)*40
  
  text(` ${x}, ${y}`, 5, height - 5)
  strokeWeight(3)
  stroke("with")

  rect(x, y, - 30, 0, 30)
  rect(x, y, 30, 0, 30)
  rect(x, y, 0, 30)
  rect(x, y, 0, -30)

}
