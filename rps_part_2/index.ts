// We declare constants to avoid repeating "magic numbers". 
// These numbers are used for positioning text and icons on the canvas.
// Note that we use all-caps for constants that represent 
// configuration values to make them easy to recognize.
const TEXT_LEFT = 30;
const STONE_LEFT = 50;
const PAPER_LEFT = 175;
const SCISSORS_LEFT = 300;
const ICON_WIDTH = 100;
const ICON_TOP = 75;
const ICON_HEIGHT = 100;

function setup() {
    createCanvas(500, 490);
    background("black");

    fill("yellow");
    textSize(30);
    text("Human:", TEXT_LEFT, 50);

    // Display the icons for "stone", "paper", and "scissors".
    textSize(75);
    const HUMAN_SYMBOLS_TOP = 150;
    text("🪨", STONE_LEFT, HUMAN_SYMBOLS_TOP);
    text("📃", PAPER_LEFT, HUMAN_SYMBOLS_TOP);
    text("✂️", SCISSORS_LEFT, HUMAN_SYMBOLS_TOP);
}

function mouseMoved() {
    // This function highlights the icon currently being hovered over by the mouse.
    // <<< Add code here to disable the hover effect once the user has made a choice
    noFill();
    strokeWeight(3);

    // In the following lines of code, we repeatedly check if the mouse
    // is vertically in the relevant area. Therefore, we calculate the boolean
    // value once and use the variable later multiple times.
    const isInVertical = mouseY >= ICON_TOP && mouseY < ICON_TOP + ICON_HEIGHT;

    // Check if the mouse is over the "stone" icon.
    if (isInVertical && mouseX >= STONE_LEFT && mouseX < STONE_LEFT + ICON_WIDTH) {
        stroke("yellow"); // Highlight with yellow.
    } else {
        stroke("black"); // Remove highlight by drawing in black.
    }
    // Draw a rectangle around the "stone" icon.
    rect(STONE_LEFT, ICON_TOP, ICON_WIDTH, ICON_HEIGHT);

    // Same for paper
    if (isInVertical && mouseX >= PAPER_LEFT && mouseX < PAPER_LEFT + ICON_WIDTH) {
        stroke("yellow");
    } else {
        stroke("black");
    }
    rect(PAPER_LEFT, ICON_TOP, ICON_WIDTH, ICON_HEIGHT);

    // Same for scissors
    if (isInVertical && mouseX >= SCISSORS_LEFT && mouseX < SCISSORS_LEFT + ICON_WIDTH) {
        stroke("yellow");
    } else {
        stroke("black");
    }
    rect(SCISSORS_LEFT, ICON_TOP, ICON_WIDTH, ICON_HEIGHT);
}
let selected: string = "";
let computer: string = "";
function mouseClicked() {
    if (computer === "") {
        const isInVertical = mouseY >= ICON_TOP && mouseY < ICON_TOP + ICON_HEIGHT;
        if (isInVertical && mouseX >= STONE_LEFT && mouseX < STONE_LEFT + ICON_WIDTH) {
            selected = "🪨"; 
        }

        if (isInVertical && mouseX >= PAPER_LEFT && mouseX < PAPER_LEFT + ICON_WIDTH) {
            selected = "📃"; 
        }
        if (isInVertical && mouseX >= SCISSORS_LEFT && mouseX < SCISSORS_LEFT + ICON_WIDTH) {
            selected = "✂️"
        }
        const computerChoice = Math.floor(random(0, 3));
        if (computerChoice === 0) {
            computer = "🪨"; 
        } else if (computerChoice === 1) {
            computer = "📃"; 
        } else if (computerChoice === 2) {
            computer = "✂️";
        }

      
        noStroke();
        fill("yellow");
        textSize(30);
        text("Computer:", TEXT_LEFT, 300);
        textSize(75);
        text(computer, 175, 300);

      
        let win: string = "";
        if (selected === computer) {
            win = "It's a tie!";
        } else if (
            (selected === "🪨" && computer === "✂️") || 
            (selected === "📃" && computer === "🪨") || 
            (selected === "✂️" && computer === "📃")    
        ) {
            win = "You win!"; 
        } else {
            win = "Computer wins!"; 
        }
        textSize(50);
        fill("yellow");
        text(win, TEXT_LEFT, 450);
    }
}


