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
const TEXT_HUMAN_TOP = 150




function setup() {
    createCanvas(500, 490);
    background("black");

    fill("yellow");
    textSize(30);
    text("Human:", TEXT_LEFT, 50);
    textSize(80)
    text("🪨", STONE_LEFT, TEXT_HUMAN_TOP)
    text("📃", PAPER_LEFT, TEXT_HUMAN_TOP)
    text("✂️", SCISSORS_LEFT, TEXT_HUMAN_TOP)

}
let human: string = ""
let computer: string = ""
function mouseMoved() {

    if (human == "")
        noFill()
    strokeWeight(5)

    const mouseInPosission = mouseX >= ICON_TOP && mouseY < ICON_HEIGHT + ICON_HEIGHT
    if (mouseInPosission && mouseX >= STONE_LEFT && mouseX < STONE_LEFT + ICON_WIDTH) {
        stroke("yellow")
    }else stroke("black")
    rect(STONE_LEFT,ICON_TOP, ICON_WIDTH, ICON_HEIGHT)

      if (mouseInPosission && mouseX >= PAPER_LEFT && mouseX < PAPER_LEFT + ICON_WIDTH) {
        stroke("yellow")
    }else stroke("black")
    rect(PAPER_LEFT,ICON_TOP, ICON_WIDTH, ICON_HEIGHT)

 if (mouseInPosission && mouseX >= SCISSORS_LEFT && mouseX < SCISSORS_LEFT + ICON_WIDTH) {
        stroke("yellow")
    }else stroke("black")
    rect(SCISSORS_LEFT,ICON_TOP, ICON_WIDTH, ICON_HEIGHT)


    }
