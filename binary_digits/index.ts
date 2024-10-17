function setup() {
const num = Math.floor(random(0, 64));
  const lastDigit1 = num % 2
  const numwithoutlastdigit1 = Math.floor(num / 2)
  const lastDigit2 = numwithoutlastdigit1 % 2
  const numwithoutlastdigit2 = Math.floor(numwithoutlastdigit1 / 2)
  const lastDigit3 = numwithoutlastdigit2 % 2
  const numwithoutlastdigit3 = Math.floor(numwithoutlastdigit2 / 2)
  const lastDigit4 = numwithoutlastdigit3 % 2
  const numwithoutlastdigit4 = Math.floor(numwithoutlastdigit3 / 2)
  const lastDigit5 = numwithoutlastdigit4 % 2
  const numwithoutlastdigit5 = Math.floor(numwithoutlastdigit4 / 2)
  const lastDigit6 = numwithoutlastdigit5 % 2
  const numwithoutlastdigit6 = Math.floor(numwithoutlastdigit5 / 2)


  createCanvas(800, 600);
  background("black");

  fill("yellow");
  strokeWeight(2);
  textAlign(CENTER, CENTER);
  textSize(30);
  text(`${lastDigit6}`, width / 14, height / 3, width / 9, height / 3);
  text(`${lastDigit5}`, width / 5, height / 3, width / 9, height / 3);
  text(`${lastDigit4}`, width / 3, height / 3, width / 9, height / 3);
  text(`${lastDigit3}`, width / 2.15, height / 3, width / 9, height / 3);
  text(`${lastDigit2}`, width / 1.68, height / 3, width / 9, height / 3);
  text(`${lastDigit1}`, width / 1.38, height / 3, width / 9, height / 3);

  textAlign(CENTER, CENTER);
  fill("yellow");
  noStroke();
  text(num, width / 2, height - 20);

  stroke("yellow");
  noFill();
  strokeWeight(2);
  rect(width / 14, height / 3, width / 9, height / 3);
  rect(width / 5, height / 3, width / 9, height / 3);
  rect(width / 3, height / 3, width / 9, height / 3);
  rect(width / 2.15, height / 3, width / 9, height / 3);
  rect(width / 1.68, height / 3, width / 9, height / 3);
  rect(width / 1.38, height / 3, width / 9, height / 3);

}