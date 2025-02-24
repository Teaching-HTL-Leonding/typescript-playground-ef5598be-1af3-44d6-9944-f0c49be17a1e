let numberOfKeypresses = 0;

function setup() {
    createCanvas(800, 500);
    angleMode(DEGREES);

    // Draw the screen one time
    redraw();
    noLoop(); // Stop calling draw() automatically
}

function draw() {
    background("white");

    drawSnowman(numberOfKeypresses);
}

function keyPressed() {
    numberOfKeypresses++;

    drawSnowman(numberOfKeypresses);

    // Refresh the screen one time
    redraw();
}
