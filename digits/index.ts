function setup() {
  const num: number = Math.floor(Math.random() * 1_000_000);
  createCanvas(700, 600);
  
  background("black");
  
  // Display the full number at the bottom of the canvas
  textAlign(CENTER, CENTER);
  fill("yellow");
  noStroke();
  textSize(32);
  text(num.toString(), width / 2, height - 20);  // Convert num to string
  
  // Draw rectangles for each digit position
  noFill();
  stroke("yellow");
  strokeWeight(2);

  rect(width / 14, height / 3, width / 9, height / 3);
  rect(width / 5, height / 3, width / 9, height / 3);
  rect(width / 3, height / 3, width / 9, height / 3);
  rect(width / 2.15, height / 3, width / 9, height / 3);
  rect(width / 1.65, height / 3, width / 9, height / 3);
  rect(width / 1.35, height / 3, width / 9, height / 3);
  
  // Set text properties for digits
  textAlign(CENTER, CENTER);
  textSize(20);
  
  // Extract and draw each digit in the respective rectangle
  text(`${Math.floor(num / 100000) % 10}`, width / 14 + width / 18, height / 3 + height / 6);
  text(`${Math.floor(num / 10000) % 10}`, width / 5 + width / 18, height / 3 + height / 6);
  text(`${Math.floor(num / 1000) % 10}`, width / 3 + width / 18, height / 3 + height / 6);
  text(`${Math.floor(num / 100) % 10}`, width / 2.15 + width / 18, height / 3 + height / 6);
  text(`${Math.floor(num / 10) % 10}`, width / 1.65 + width / 18, height / 3 + height / 6);
  text(`${num % 10}`, width / 1.35 + width / 18, height / 3 + height / 6);
}
