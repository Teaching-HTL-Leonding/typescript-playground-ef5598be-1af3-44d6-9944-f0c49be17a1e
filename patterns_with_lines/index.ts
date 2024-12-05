function setup() {
    createCanvas(601, 301);
    background("black");
    fill("aqua");
    noStroke();
    colorMode(HSB)
    textSize(50);
    textAlign(CENTER, CENTER);
    text("Move the mouse to start", 0, 0, width, height);
}

let linecoulor = 0
let rayColor = 0
function mouseMoved() {
    resetMatrix();
    background("black");
    noFill()




    let SIZE = 10
    for (let i = 0; i <= 601; i += 10) {
        push()
        for (let y = 0; y <= 601; y += 10) {
        stroke(rayColor, 100, 100)
            line(0, 0, 10, 5)
            line(10, 5, 0, 10)
            translate(0, 10)
        }
       pop()
        translate(10, 0)
      rayColor = (rayColor += 6)% 360
    }
    noStroke()
    resetMatrix()
    fill("black")
    rect(0, 280, 601, 30)
    fill("white")
    textSize(10)
    text(`${mouseX} of 601`, 50, 290)
}