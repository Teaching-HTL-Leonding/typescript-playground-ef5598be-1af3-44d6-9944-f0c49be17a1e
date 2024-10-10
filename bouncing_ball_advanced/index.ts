function setup() {
  createCanvas(300, 200);
  background(200, 0, 150)

}
const circleDiameter = 50
let circleCenterX = 0
let directionX = 2
let circleCenterY = 0
let directionY = 2


function draw() {
  background(200, 0, 150)

  stroke("white")
  strokeWeight(3)
  noFill()
  circle(circleCenterX, circleCenterY, circleDiameter)



  circleCenterX += directionX
  circleCenterY += directionY
                      
  if (circleCenterX >= width || circleCenterX <= 0) {
    directionX *= -1

  }
  if (circleCenterY >= height || circleCenterY <= 0) {
    directionY *= -1
    
  }
}