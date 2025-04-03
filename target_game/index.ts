let radBlue = 50;
let radBlack = 70;
let teleportX = 0;
let teleportY = 0;
let telblueX = 0;
let telblueY = 0;
let dragging = false;
let score = 0;
function setup() {
  createCanvas(800, 600);
  teleportX = random(radBlack, width - radBlack);
  teleportY = random(radBlack, height - radBlack);

  telblueX = random(radBlue, width - radBlue);
  telblueY = random(radBlue, height - radBlue);



  background("lightgray");
  drawPlayer();
  drawTarget();
  placePlayer();
  drawScore();
}
function placeTarget() {
  teleportX = random(radBlack, width - radBlack);
  teleportY = random(radBlack,  height - radBlack);
}

function drawScore() {
  fill("black");
  textSize(15);
  text("Score" + score, 10, height - 10);
}


function placePlayer() {
  telblueX = random(radBlue, width - radBlue);
  telblueY = random(radBlue, height - radBlue);

  if (dist(teleportX, teleportY, telblueX, telblueY) < radBlack + radBlue) {
    placePlayer();
  }
}

function draw() {
  background("lightgray");
  drawPlayer();
  drawTarget();
  drawScore();
}



function drawPlayer() {
  fill("blue");
  noStroke();
  circle(telblueX, telblueY, radBlue * 2);
}

function drawTime() {
fill("black");
  textSize(15);
  text("Score" +  10, height + 10);
}


function drawTarget() {
  noFill();
  stroke("Black");
  circle(teleportX, teleportY, radBlack * 2);
}

function mousePressed() {
  if (dist(mouseX, mouseY, telblueX, telblueY) < radBlue) {
    dragging = true;
  }

}

function mouseDragged() {
  if (dragging) {
    telblueX = mouseX
    telblueY = mouseY
    
  }
}

function mouseReleased() {
  dragging = false;


  if (radBlue + dist(telblueX, telblueY, teleportX, teleportY) < radBlack) {
    score++
    teleportX = random(radBlack, width - radBlack);
    teleportY = random(radBlack, height - radBlack);
  }
}


