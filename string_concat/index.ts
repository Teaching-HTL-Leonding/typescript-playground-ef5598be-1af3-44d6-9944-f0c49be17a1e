let clicks: string[] = []

function setup() {
  createCanvas(530, 530)
  textSize(20)
}

function draw() {
  background("lightblue")
  let x = 10, y = 30

  for (let i = 0; i < clicks.length; i++) {
    if (i > 0 && i % 5 === 0) {
      y += 30;
      x = 10
    }
    text(clicks[i], x, y)
    x += textWidth(clicks[i]) + 10
  }
}

function mouseClicked() {
  clicks.push(`(${mouseX}, ${mouseY})`)
  fill("magenta");
  noStroke();
  circle(mouseX, mouseY, 16)
}


