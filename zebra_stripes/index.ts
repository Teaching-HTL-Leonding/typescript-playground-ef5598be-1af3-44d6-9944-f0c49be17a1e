function setup() {
    const SIZE = 400;  // Size of canvas
    const STRIPE_THICKNESS = 50; // Thickness of the stripes

    createCanvas(SIZE, SIZE);
    background("black");

    noStroke();
let i= 0
while( i < SIZE){
fill("lime")
rect(0, i, SIZE, STRIPE_THICKNESS)
i+= STRIPE_THICKNESS
fill("yellow")
rect(0, i, SIZE, STRIPE_THICKNESS)
i+= STRIPE_THICKNESS
}
}
