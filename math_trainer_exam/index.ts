
let operator1 = 0
let operator2 = 0
let operator = 0
let message = ""
let solution = 0
let randomnum1 = 0
let randomnum2 = 0
let randomnum3 = 0
let answer = 0
function setup() {
    createCanvas(400, 400);
    background("black");
    operator2 = Math.floor(random(1, 101))
    operator1 = Math.floor(random(1, 101))
    operator = Math.floor(random(0, 3))
    randomnum1 = Math.floor(random(1, 1000))
    randomnum2 = Math.floor(random(1, 1000))
    let randomnum3 = Math.floor(random(1, 1000))
    answer =Math.floor(random(0, 3))


    fill("yellow")
    switch (operator) {
        case 0:
            message = "+"
            solution = operator1 + operator2
            break;

        case 1:
            message = "*"
            solution = operator1 * operator2
            break;
        case 2:
            message = "-"
            solution = operator1 - operator2
            break;
    }

      switch(answer){
    
    case 0:
    randomnum3 = solution
    break;

    case 1:
    randomnum2 = solution
    break;

    case 2:
    randomnum3 = solution
    break;
      }
    textSize(40)
    stroke("yellow")
    textAlign(RIGHT)
    text(`${operator1}`, width / 2.6, height / 4)
    textAlign(LEFT)
    text(`${operator2}`, width / 1.7, height / 4)
    textAlign(CENTER)
    text(`${message}`, width / 2, height / 4)
      textAlign(RIGHT)
    text(`${randomnum1}`, width / 3, height / 2)
    textAlign(CENTER)
    text(`${randomnum2}`, width / 2, height / 2)
    textAlign(LEFT)
    text(`${randomnum3}`, width / 1.6, height / 2)
    


    // mouseClicked function checks if the user clicked on the correct answer
    function mouseClicked() {
        if (mouseX < width /10 * 4 && mouseX > width /12 * 3 && mouseY < height/3*2)
        }



    }

    // mouseMoved function displays mouse coordinates as feedback
    function mouseMoved() {
        // This is a HELPER FUNCTION. It should make finding coordinates
        // easier for you. You DO NOT NEED to change this method!

        fill("black");
        noStroke();
        rect(0, height - 20, width, height); // Draws a rectangle to clear previous coordinates

        fill("white");
        textSize(10);
        textAlign(LEFT, BOTTOM); // Aligns coordinates text to bottom-left
        text(`${mouseX}/${mouseY}`, 5, height - 5); // Displays current mouse coordinates
    }
}