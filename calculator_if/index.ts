const MARGIN_NUM = 10

let num: number = 0
let lineHeight: number = 0
let cellWidth: number = 0

function setup() {
    createCanvas(300, 600)
    lineHeight = height / 5
    cellWidth = width / 3
}

function draw() {
    background("lightgray")

    stroke(15);
    line(cellWidth, 0, cellWidth, height);
    line(cellWidth * 2, 0, cellWidth * 2, height);
    line(0, lineHeight, width, lineHeight);
    line(0, lineHeight * 2, width, lineHeight * 2);
    line(0, lineHeight * 3, width, lineHeight * 3);
    line(0, lineHeight * 4, width, lineHeight * 4);

    textSize(55);
    fill("black")
    textAlign(CENTER, CENTER)
    text("7", cellWidth * 0.5, lineHeight * 1.5);
    text("8", cellWidth * 1.5, lineHeight * 1.5);
    text("9", cellWidth * 2.5, lineHeight * 1.5);
    text("4", cellWidth * 0.5, lineHeight * 2.5);
    text("5", cellWidth * 1.5, lineHeight * 2.5);
    text("6", cellWidth * 2.5, lineHeight * 2.5);
    text("1", cellWidth * 0.5, lineHeight * 3.5);
    text("2", cellWidth * 1.5, lineHeight * 3.5);
    text("3", cellWidth * 2.5, lineHeight * 3.5);
    text("C", cellWidth * 2.5, lineHeight * 4.5);
    text("0", cellWidth * 1.5, lineHeight * 4.5);

textSize(24);
    text(num, width / 2, lineHeight / 2);
    textSize(32);

    fill("white");
    rect(MARGIN_NUM, MARGIN_NUM, width - 2 * MARGIN_NUM, lineHeight - 2 * MARGIN_NUM)

}
let selected: string = "";
function mouseClicked() {


}
