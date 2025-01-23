let nextSmiling = true

function setup() {
  createCanvas(500, 500);
  angleMode(DEGREES);

  // Function CALL
  // +------------------------------ Function name
  // |  +--------------------------- Function parameter
  // v  v
  smile(nextSmiling);
}
function mouseClicked(){
smile(nextSmiling)
}


function smile(happy: boolean) {
  push();
  translate(random(0, width), random(0, height));
  scale(0.1);




  stroke("black");
  strokeWeight(10);
  if (happy) {
    fill("yellow");
  } else {
    fill("lime");
  }

  circle(200, 200, 350);

  fill("black");
  circle(125, 125, 20);
  circle(275, 125, 20);


  if (happy) {
    arc(200, 250, 200, 150, 0, 180);
  } else {
    arc(200, 300, 200, 150, 180, 360);
  }


pop();
}
