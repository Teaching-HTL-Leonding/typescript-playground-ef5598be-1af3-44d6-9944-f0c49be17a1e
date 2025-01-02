// Set the initial fill levels for the silos. The fill levels are separated by commas.
const INITIAL_FILL = "3,7,8,3,10,2";
const SILO_MAX = 10; // Maximum fill for each silo
const CRICITAL_FILL = 8; // Critical fill level for each silo

// Store the fill values for the silos. Will be a value between 0 and SILO_MAX.
const silos: number[] = [];

// Constants for the layout
const CANVAS_HEIGHT = 500;
const CANVAS_WIDTH = 480;
const SILO_WIDTH = 50; // Width of each silo
const SILO_GAP = 25; // Gap between silos
const SILO_HEIGHT = 320; // Height of each silo
const SILOS_TOP = CANVAS_HEIGHT / 2 - SILO_HEIGHT / 2; // Y-coordinate of the top of the silos
const BUTTON_SIZE = 20; // Size of the buttons ("add" and "remove")
const BUTTON_GAP = 15; // Gap between the bottom of the buttons and the top of the silos
const BUTTON_TOP = SILOS_TOP - BUTTON_GAP - BUTTON_SIZE; // Y-coordinate of the top of the buttons

// Track which button is being hovered over
let hoveredButton: { siloIndex: number, isAdd: boolean } | null = null;

function setup() {
  createCanvas(CANVAS_WIDTH, CANVAS_HEIGHT);
  
  // Parse initial fill levels and populate silos array
  const fillLevels = INITIAL_FILL.split(',').map(Number);
  silos.push(...fillLevels.map(level => Math.min(Math.max(level, 0), SILO_MAX)));
}

function draw() {
  background("black");
  
  // Calculate the starting X position to center all silos
  const totalWidth = silos.length * SILO_WIDTH + (silos.length - 1) * SILO_GAP;
  const startX = (CANVAS_WIDTH - totalWidth) / 2;
  
  // Draw each silo and its buttons
  silos.forEach((fillLevel, index) => {
    const siloX = startX + index * (SILO_WIDTH + SILO_GAP);
    
    // Draw silo container
    stroke(255);
    noFill();
    rect(siloX, SILOS_TOP, SILO_WIDTH, SILO_HEIGHT);
    
    // Draw fill level
    const fillHeight = (fillLevel / SILO_MAX) * SILO_HEIGHT;
    const fillColor = fillLevel >= CRICITAL_FILL ? color(255, 0, 0) : color(0, 255, 0);
    fill(fillColor);
    noStroke();
    rect(siloX, SILOS_TOP + SILO_HEIGHT - fillHeight, SILO_WIDTH, fillHeight);
    
    // Draw fill level text
    fill(255);
    textAlign(CENTER, TOP);
    textSize(16);
    text(fillLevel.toString(), siloX + SILO_WIDTH/2, SILOS_TOP + SILO_HEIGHT + 10);
    
    // Draw add button
    const addButtonX = siloX;
    const isAddHovered = hoveredButton?.siloIndex === index && hoveredButton?.isAdd;
    drawButton(addButtonX, BUTTON_TOP, true, isAddHovered);
    
    // Draw remove button
    const removeButtonX = siloX + SILO_WIDTH - BUTTON_SIZE;
    const isRemoveHovered = hoveredButton?.siloIndex === index && !hoveredButton?.isAdd;
    drawButton(removeButtonX, BUTTON_TOP, false, isRemoveHovered);
  });
  
  // Update hover state
  updateHoverState();
}

function drawButton(x: number, y: number, isAdd: boolean, isHovered: boolean) {
  // Draw button background
  stroke(255);
  fill(isHovered ? color(100) : color(50));
  rect(x, y, BUTTON_SIZE, BUTTON_SIZE);
  
  // Draw button symbol (triangle)
  fill(255);
  noStroke();
  if (isAdd) {
    triangle(
      x + BUTTON_SIZE/2, y + 5,
      x + 5, y + BUTTON_SIZE - 5,
      x + BUTTON_SIZE - 5, y + BUTTON_SIZE - 5
    );
  } else {
    triangle(
      x + BUTTON_SIZE/2, y + BUTTON_SIZE - 5,
      x + 5, y + 5,
      x + BUTTON_SIZE - 5, y + 5
    );
  }
}

function updateHoverState() {
  const mousePos = { x: mouseX, y: mouseY };
  hoveredButton = null;
  
  const totalWidth = silos.length * SILO_WIDTH + (silos.length - 1) * SILO_GAP;
  const startX = (CANVAS_WIDTH - totalWidth) / 2;
  
  silos.forEach((_, index) => {
    const siloX = startX + index * (SILO_WIDTH + SILO_GAP);
    
    // Check add button
    if (isMouseOverButton(mousePos, siloX, BUTTON_TOP)) {
      hoveredButton = { siloIndex: index, isAdd: true };
    }
    
    // Check remove button
    if (isMouseOverButton(mousePos, siloX + SILO_WIDTH - BUTTON_SIZE, BUTTON_TOP)) {
      hoveredButton = { siloIndex: index, isAdd: false };
    }
  });
}

function isMouseOverButton(mousePos: { x: number, y: number }, buttonX: number, buttonY: number): boolean {
  return mousePos.x >= buttonX && 
         mousePos.x <= buttonX + BUTTON_SIZE && 
         mousePos.y >= buttonY && 
         mousePos.y <= buttonY + BUTTON_SIZE;
}

function mouseClicked() {
  if (hoveredButton) {
    const { siloIndex, isAdd } = hoveredButton;
    
    if (isAdd && silos[siloIndex] < SILO_MAX) {
      silos[siloIndex]++;
    } else if (!isAdd && silos[siloIndex] > 0) {
      silos[siloIndex]--;
    }
  }
}