
function setup() {

  const num = Math.floor(random(0, 4096));
  const lastDigit1 = num % 16
  const numwithoutlastdigit1 = Math.floor(num / 16)
  const lastDigit2 = numwithoutlastdigit1 % 16
  const numwithoutlastdigit2 = Math.floor(numwithoutlastdigit1 / 16)
  const lastDigit3 = numwithoutlastdigit2 % 16
  const numwithoutlastdigit3 = Math.floor(numwithoutlastdigit2 / 16)

  createCanvas(600, 600);
  textAlign(CENTER, CENTER);
  fill("yellow");

  background("black");
  noStroke();
  text(num, width / 2, height - 20);

  fill("yellow");
  strokeWeight(2);
  textAlign(CENTER, CENTER);
  textSize(30);
  noFill()
stroke("yellow")
  rect(width / 3, height / 3, width / 9, height / 3)
  rect(width / 2.15, height / 3, width / 9, height / 3)
  rect(width / 1.68, height / 3, width / 9, height / 3)

  if (lastDigit3 === 10) {
    text("A", width / 3, height / 3, width / 9, height / 3)
  } else if (lastDigit3 === 11) {
    text("B", width / 3, height / 3, width / 9, height / 3)
  } else if (lastDigit3 === 12) {
    text("C", width / 3, height / 3, width / 9, height / 3)
  } else if (lastDigit3 === 13) {
    text("D", width / 3, height / 3, width / 9, height / 3)
  } else if (lastDigit3 === 14) {
    text("E", width / 3, height / 3, width / 9, height / 3)
  } else if (lastDigit3 === 15) {
    text("F", width / 3, height / 3, width / 9, height / 3)
  } else {
    text(`${lastDigit3}`,width / 3, height / 3, width / 9, height / 3) 
  }
  
  if (lastDigit1 === 10) {
    text("A", width / 2.15, height / 3, width / 9, height / 3)
  } else if (lastDigit1 === 11) {
    text("B",width / 2.15, height / 3, width / 9, height / 3)
  } else if (lastDigit1 === 12) {
    text("C", width / 2.15, height / 3, width / 9, height / 3)
  } else if (lastDigit1 === 13) {
    text("D", width / 2.15, height / 3, width / 9, height / 3)
  } else if (lastDigit1 === 14) {
    text("E", width / 2.15, height / 3, width / 9, height / 3)
  } else if (lastDigit1 === 15) {
    text("F", width / 2.15, height / 3, width / 9, height / 3)
  } else {
    text(`${lastDigit1}`, width / 2.15, height / 3, width / 9, height / 3)
  }


if (lastDigit2 === 10) {
    text("A", width / 1.68, height / 3, width / 9, height / 3)
  } else if (lastDigit2 === 11) {
    text("B",width / 1.68, height / 3, width / 9, height / 3)
  } else if (lastDigit2 === 12) {
    text("C", width / 1.68, height / 3, width / 9, height / 3)
  } else if (lastDigit2 === 13) {
    text("D", width / 1.68, height / 3, width / 9, height / 3)
  } else if (lastDigit2 === 14) {
    text("E", width / 1.68, height / 3, width / 9, height / 3)
  } else if (lastDigit2 === 15) {
    text("F", width / 1.68, height / 3, width / 9, height / 3)
  } else {
    text(`${lastDigit2}`, width / 1.68, height / 3, width / 9, height / 3)
  }
  }