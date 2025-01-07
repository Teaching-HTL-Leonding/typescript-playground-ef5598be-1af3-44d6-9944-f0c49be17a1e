const circlesCenterX: number[] = [];
const circlesCenterY: number[] = [];
const circlesDiameter: number[] = [];
const circlesFill: string[] = [];
const circlesCreatedAt: number[] = [];
const circlesLifespan: number[] = [];
let nextCircle = 0;
const maxDiameter = 150;

const availableColors = [
  "pink",
  "yellow",
  "aqua",
  "lime",
  "red",
  "gold",
];

// setup runs once at the start
function setup() {
  createCanvas(400, 400);
}

// draw runs continuously in a loop
function draw() {
  background("black");

  // Add a new circle at random intervals
  if (millis() >= nextCircle) {
    const d = random(10, maxDiameter);  // Random diameter between 10 and maxDiameter
    circlesDiameter.push(d);            
    circlesCenterX.push(random(d / 2, width - d / 2));
    circlesCenterY.push(random(d / 2, height - d / 2));
    circlesFill.push(random(availableColors));
    circlesCreatedAt.push(millis());
    circlesLifespan.push(random(2000, 5000)); // Random lifespan between 2 and 5 seconds
    nextCircle = millis() + random(500, 2000);
  }

  // Display and update circles
  noStroke();
  for (let i = circlesDiameter.length - 1; i >= 0; i--) {
    if (millis() - circlesCreatedAt[i] > circlesLifespan[i]) {
      // Remove expired circles
      circlesDiameter.splice(i, 1);
      circlesCenterX.splice(i, 1);
      circlesCenterY.splice(i, 1);
      circlesFill.splice(i, 1);
      circlesCreatedAt.splice(i, 1);
      circlesLifespan.splice(i, 1);
    } else {
      // Draw the circle
      fill(circlesFill[i]);
      circle(circlesCenterX[i], circlesCenterY[i], circlesDiameter[i]);
    }
  }
}

// Helper functions
function millis(): number {
  return Date.now();
}

function random(min: number, max: number): number {
  return Math.random() * (max - min) + min;
}

function random<T>(array: T[]): T {
  return array[Math.floor(Math.random() * array.length)];
}

function createCanvas(width: number, height: number): void {
  // Assuming this function sets up the canvas
  console.log(`Canvas created with width ${width} and height ${height}`);
}

function background(color: string): void {
  // Assuming this function sets the background color
  console.log(`Background color set to ${color}`);
}

function noStroke(): void {
  // Assuming this function disables stroke
  console.log("Stroke disabled");
}

function fill(color: string): void {
  // Assuming this function sets the fill color
  console.log(`Fill color set to ${color}`);
}

function circle(x: number, y: number, diameter: number): void {
  // Assuming this function draws a circle
  console.log(`Circle drawn at (${x}, ${y}) with diameter ${diameter}`);
}
