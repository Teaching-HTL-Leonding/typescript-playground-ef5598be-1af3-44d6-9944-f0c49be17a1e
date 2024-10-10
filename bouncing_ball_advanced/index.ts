function setup() {
  createCanvas(300, 200);
  background(0)
colorMode(HSB)
}
const circleDiameter = 50
let circleCenterX = 0
let directionX = 2
let circleCenterY = 0
let directionY = 2
let color_hue: number = 0

function draw() {
  //background(0)

  noStroke()
  strokeWeight(3)
 fill(color_hue, 100, 100)
  circle(circleCenterX, circleCenterY, circleDiameter)



  circleCenterX += directionX
  circleCenterY += directionY
                      
  if (circleCenterX >= width || circleCenterX <= 0) {
    directionX *= -1

  }
  if (circleCenterY >= height || circleCenterY <= 0) {
    directionY *= -1
  }
    
  
  color_hue = (color_hue + 5) % 360
}