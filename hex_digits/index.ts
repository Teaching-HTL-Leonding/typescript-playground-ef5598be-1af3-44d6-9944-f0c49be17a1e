function setup() {
  const num = Math.floor(random(0, 4096));
  const lastDigit1 = num % 16
  const numwithoutlastdigit1 = Math.floor(num / 16)
  const lastDigit2 = numwithoutlastdigit1 % 16
  const numwithoutlastdigit2 = Math.floor(numwithoutlastdigit1 / 16)
  const lastDigit3 = numwithoutlastdigit2 % 16
  const numwithoutlastdigit3 = Math.floor(numwithoutlastdigit2 / 16)
  const lastDigit4 = numwithoutlastdigit3 % 16
  const numwithoutlastdigit4 = Math.floor(numwithoutlastdigit3 / 16)
  const lastDigit5 = numwithoutlastdigit4 % 16
  const numwithoutlastdigit5 = Math.floor(numwithoutlastdigit4 / 16)
  const lastDigit6 = numwithoutlastdigit5 % 16
  const numwithoutlastdigit6 = Math.floor(numwithoutlastdigit5 / 16)

  createCanvas(800, 600)
  background("black")
  fill("yellow");
  strokeWeight(2);
  textAlign(CENTER, CENTER);
  textSize(30);
  text(`${Math.floor(num / 16 * 16) % 16}`, width / 2.15 + width / 18, height / 3 + height / 6);
  text(`${Math.floor(num / 16) % 16}`, width / 1.65 + width / 18, height / 3 + height / 6);
  text(`${num % 16}`, width / 1.35 + width / 18, height / 3 + height / 6);

  textAlign(CENTER, CENTER);
  fill("yellow");
  noStroke();
  text(num, width / 2, height - 20);

  if (lastDigit1 === 10)
    text("A", width / 2.15 + width / 18, height / 3 + height / 6)
    fill("black")
    stroke("yellow")
  rect(width / 2.15, height / 3, width / 9, height / 3)
  if (lastDigit1 === 11)
  fill("black")
  stroke("yellow")
    text("B", width / 2.15 + width / 18, height / 3 + height / 6)
    fill("black")
    stroke("yellow")
  rect(width / 2.15, height / 3, width / 9, height / 3)
  if (lastDigit1 === 12)
    text("C", width / 2.15 + width / 18, height / 3 + height / 6)
    fill("black")
    stroke("yellow")
  rect(width / 2.15, height / 3, width / 9, height / 3)
  if (lastDigit1 ===13)
  text("D",width / 2.15, height / 3, width / 9, height / 3)
  if





  stroke("yellow");
  noFill();
  strokeWeight(2);

  rect(width / 2.15, height / 3, width / 9, height / 3);
  rect(width / 1.68, height / 3, width / 9, height / 3);
  rect(width / 1.38, height / 3, width / 9, height / 3);

}