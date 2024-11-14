function setup() {
    // We have a square canvas. The side length is defined by the constant SIZE.
    const SIZE = 400;
    // Your job is to draw a grid on the canvas. The distance between the grid lines is defined by the constant GRID.
    const GRID = 25;

    createCanvas(SIZE, SIZE);
    background("black");

    strokeWeight(0.25);
    stroke("lightgray");

    // Draw a grid by using a while loop.
    
    // Part 1: Draw vertical lines
    // Here you see how to use a while loop.
    let i = GRID;            // STEP 1: Initialize the loop variable
    while (i < SIZE) {       // STEP 2: Check the loop condition
        line(i, 0, i, SIZE);
        line(0, i, SIZE, i); // STEP 3: Do whatever you want to do repeatedly
        i += GRID; 
                  // STEP 4: Update the loop variable
    }
    // Part 2: Draw horizontal lines
    // <<< Write your code here
}
