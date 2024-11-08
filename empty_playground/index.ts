function setup() {
    createCanvas(250, 250)
    background("black")
colorMode(HSB)
    strokeWeight(0.05)
    stroke("0, 225, 100")
    strokeCap(SQUARE)

    let y = 225
    while (y >= 25) {
        stroke(y, 100, 50)
        line(25, y, y, 225)
        line(y, 25, 225, y)

        y -= 0.5
    }

}


function draw() {
}