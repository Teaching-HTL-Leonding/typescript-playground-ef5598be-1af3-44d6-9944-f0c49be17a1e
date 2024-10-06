function setup() {
    createCanvas(400, 200);
    background("black");
    noStroke();

fill("yellow")
rect(0, 0, width /2 , height *0.50)
fill("green")
rect(width /2, 0,  width /2, height *0.50)
fill("red")
rect(width /2,  height /2, width /2, height*0.50)
fill("blue")
rect(0,  height /2, width /2, height*0.50)
fill("black")
rect(width /4, height *0.4, 200, 40)

}

function mouseClicked() {
    let message: string

     if (mouseX < width / 2 && mouseY < height / 2) {
        message = "Yellow"
    } else if (mouseX >= width / 2 && mouseY < height / 2) {
        message = "Green"
    } else if (mouseX < width / 2 && mouseY >= height / 2) {
        message = "Blue"
    } else {
        message = "Red"
    }

fill(0, 350)
rect(width /4, height *0.4, 200, 40)

fill("white")
    textSize(30)
    textAlign(CENTER)
    text(message, width / 2, height - 90)
}

