function setup() {
  const SIZE = 500; // Canvas size
  const SQUARE_SIZE = 50; // Size of each square
  createCanvas(SIZE + SQUARE_SIZE, SIZE + SQUARE_SIZE); // Extra space for markings
  background("black");

  noStroke();

  // Draw chessboard squares
  for (let row = 0; row < 8; row++) {
    for (let col = 0; col < 8; col++) {
      if ((row + col) % 2 === 0) {
        fill("white");
      } else {
        fill("brown");
      }
      rect(col * SQUARE_SIZE + 75, row * SQUARE_SIZE + 75, SQUARE_SIZE, SQUARE_SIZE);
    }
  }

  // Add markings for ranks (1-8) on the left and files (a-h) at the bottom
  textAlign(CENTER, CENTER);
  textSize(16);
  fill("white");

  for (let i = 0; i < 8; i++) {
    // Rank markings (numbers on the left)
    text(8 - i, SQUARE_SIZE / 2 + 30, i * SQUARE_SIZE + SQUARE_SIZE / 2 + 70 );

    // File markings (letters at the bottom)
    text(String.fromCharCode(97 + i), i * SQUARE_SIZE + SQUARE_SIZE / 2 + 75, SIZE + SQUARE_SIZE / 2 - 30);
  }
}