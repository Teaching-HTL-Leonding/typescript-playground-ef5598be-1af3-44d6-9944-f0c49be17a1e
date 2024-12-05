function setup() {
    createCanvas(601, 301);
    background("black");
    fill("aqua");
    noStroke();

    textSize(50);
    textAlign(CENTER, CENTER);
    text("Move the mouse to start", 0, 0, width, height);
}

function mouseMoved() {
    resetMatrix();
    background("black");
    strokeWeight(2);

    noFill();
    stroke("aqua");

    // <<< Add your code here
noFill()
stroke("aqua")
let SIZE = 10
for (let i = 0; i <= 601; i += 10) {
    push()

    for (let y = 0; y<= 601; y+=10){

        line(0,0,10, 5)
        line(10, 5, 0, 10)
        translate(0, 10)
    } 
    pop()
    translate(10,0)
}
resetMatrix
fill("black")
rect(0, 200, 600, 30)
fill("white")
textSize(6)
text(`$(mouseX)of 601`, 30, 200)
}
