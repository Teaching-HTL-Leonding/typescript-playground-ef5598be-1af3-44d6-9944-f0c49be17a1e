function setup() {
    const SIZE = 500;
    const SQUARE_SIZE = 50;

    createCanvas(SIZE, SIZE);
    background("black");
    noStroke();

    // Single while loop for drawing the chessboard
    let square = 0;
    while (square < 64) { // 64 squares total (8x8)
        // Calculate row and column from single index
        let row = Math.floor(square / 8);  // Integer division for row
        let col = square % 8;              // Modulo for column

        // Calculate position
        let x = col * SQUARE_SIZE + 50;
        let y = (7 - row) * SQUARE_SIZE + 50;   // Flip vertically

        // Set color based on position
        if ((row + col) % 2 === 0) {
            fill("white");
        } else {
            fill("#8B4513");
        }

        // Draw square
        rect(x, y, SQUARE_SIZE, SQUARE_SIZE);
        square++;
    }

    // Single while loop for all markings
    textSize(16);
    textAlign(CENTER, CENTER);
    fill("white");

    let index = 0;
    while (index < 16) { // 8 files + 8 ranks = 16 markings
        if (index < 8) {
            // Draw files (a-h)
            let x = index * SQUARE_SIZE + SQUARE_SIZE/2 + 50;
            let y = SIZE - 30;
            text(String.fromCharCode(97 + index), x, y);
        } else {
            // Draw ranks (1-8)
            let rankIndex = index - 8;
            let x = 30;
            let y = (7 - rankIndex) * SQUARE_SIZE + SQUARE_SIZE/2 + 50;
            text(rankIndex + 1, x, y);
        }
        index++;
    }
}