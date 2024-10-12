function setup() {
  const num = Math.floor(random(0, 1_000_000))
createCanvas(700, 600)
  
  text(num.toString(), width / 2, height - 20)
  textAlign(CENTER, CENTER)
  fill("yellow")
  noStroke()
  text(num, width / 2, height - 20)
 background("black")
 noFill()
 stroke("yellow")
 rect(width/14, height/3, width/ 9, height /3)
 rect(width/5, height/3, width/ 9, height /3)
 rect(width/3, height/3, width/ 9, height /3)
 rect(width/2.15, height/3, width/ 9, height /3)
 rect(width/ 1.65, height/3, width/ 9, height /3)
 rect(width/1.35, height/3, width/ 9, height /3)


textAlign(CENTER, CENTER);
textSize(20)
  text(&{Math.floor(num / 100000) % 10},width / 10.5, height / 3, width / 10, height / 4);
  text(${Math.floor(num / 10000) % 10},width / 10.5 * 2.5, height / 3, width / 10, height / 4);
  text(${Math.floor(num / 1000) % 10},width / 10.5 * 4, height / 3, width / 10, height / 4);
  text(${Math.floor(num / 100 ) % 10},width / 10.5 * 5.5, height / 3, width / 10, height / 4);
  text(${Math.floor(num / 10) % 10},width / 10.5 * 7, height / 3, width / 10, height / 4);
  text(${num % 10}, width / 10.5 * 8.5, height / 3, width / 10, height / 4);

}
