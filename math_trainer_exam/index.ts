
let operator1 = 0
let operator2 = 0
let operator: string = ""
function setup() {
    createCanvas(400, 400);
    background("black");
    operator2 = Math.floor(random(1, 101))
    operator1 = Math.floor(random(1, 101))

    textSize(55)
    stroke("yellow")
    textAlign(RIGHT)
    text(`${operator1}`, width / 3, height / 4)
    textAlign(LEFT)
    text(`${operator2}`, width / 1.8, height / 4)

    if(operator===1)

    // mouseClicked function checks if the user clicked on the correct answer
    function mouseClicked() {
        // <<< TODO: Add your code here


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