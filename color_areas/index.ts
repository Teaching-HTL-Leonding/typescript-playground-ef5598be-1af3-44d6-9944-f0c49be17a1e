
function setup() {
    createCanvas(400, 200);
    background("black");
    noStroke();
    fill("yellow")
    rect(0, 0, width / 3, height * 0.75)
    fill("green")
    rect(width / 3, 0, width / 3, height * 0.75)
    fill("red")
    rect(width * 2 / 3, 0, width / 3, height * 0.75)
}

function mouseClicked() {
    let message: string

    if (mouseX < width / 3) {
        message = "yellow"
    } else if (mouseX < width / 3 * 2) {
        message = "green"
    } else {
        message = "red"
    }
background("black")
    fill("white")
    textSize(30)
    textAlign(CENTER)
    text(`${message}`, 200, 180)
}

