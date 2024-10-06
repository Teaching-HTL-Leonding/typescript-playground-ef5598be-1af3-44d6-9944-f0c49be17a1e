function setup() {
  createCanvas(300, 200)
}

const circleDiameter = 50

let circleCenterX = 0
let directionX = 2
let circleCenterY = 0
let directionY = 2


function draw() {
  background("gold")

  stroke("white")
  strokeWeight(3)
  fill("lime")
  circle(circleCenterX, height / 2, circleDiameter)

stroke("white")
strokeWeight(3)
fill("skyblue")
circle(width /2, circleCenterY, circleDiameter)

  circleCenterX += directionX
                      
  if (circleCenterX >= width || circleCenterX <= 0) {
    directionX *= -1
  }

 circleCenterY += directionY

  if (circleCenterY >= height || circleCenterY <= 0 ) {
    directionY *= -1
  }
}
