const BASE_URL = "https://cddataexchange.blob.core.windows.net/images/NecromancerHalloween/Walking";
const IMAGE_SCALE = 0.2;

// Our animation will be a series of 10 images
let necromancer0: p5.Image;
let necromancer1: p5.Image;
let necromancer2: p5.Image;
let necromancer3: p5.Image;
let necromancer4: p5.Image;
let necromancer5: p5.Image;
let necromancer6: p5.Image;
let necromancer7: p5.Image;
let necromancer8: p5.Image;
let necromancer9: p5.Image;
// <<< Add the remaining images here. We have 10 images in total.

function preload() {
    // Load all the images
    necromancer0 = loadImage(`${BASE_URL}/Necromancer_01__WALK_000.png`);
    necromancer1 = loadImage(`${BASE_URL}/Necromancer_01__WALK_001.png`);
    necromancer2 = loadImage(`${BASE_URL}/Necromancer_01__WALK_002.png`);
    necromancer3 = loadImage(`${BASE_URL}/Necromancer_01__WALK_003.png`);
    necromancer4 = loadImage(`${BASE_URL}/Necromancer_01__WALK_004.png`);
    necromancer5 = loadImage(`${BASE_URL}/Necromancer_01__WALK_005.png`);
    necromancer6 = loadImage(`${BASE_URL}/Necromancer_01__WALK_006.png`);
    necromancer7 = loadImage(`${BASE_URL}/Necromancer_01__WALK_007.png`);
    necromancer8 = loadImage(`${BASE_URL}/Necromancer_01__WALK_008.png`);
    necromancer9 = loadImage(`${BASE_URL}/Necromancer_01__WALK_009.png`);
    // <<< Add the remaining images here. We have 10 images in total.
}

function setup() {
    createCanvas(necromancer0.width * IMAGE_SCALE, necromancer0.height * IMAGE_SCALE);

    // You can control the speed of the animation by changing the frame rate
    frameRate(20);
}

let imageIndex = 0; // This variable will keep track of the current image (=frame) in the animation
let x = -500; // This variable will keep track of the current position of the animation on the x-axis.
              // By moving the sprite to the left, we can create the illusion of movement.
              // We start at -500 because the the image contains a pretty wide whitespace on the left side.

function draw() {
    background("lightgray");

    let currentImage: p5.Image;

    // Check the value of imageIndex and assign the corresponding image
    if (imageIndex === 0) { currentImage = necromancer0; }
    else if (imageIndex === 1) { currentImage = necromancer1; }
    else if (imageIndex === 2) { currentImage = necromancer2; }
    else if (imageIndex === 3) { currentImage = necromancer3; }
    else if (imageIndex === 4) { currentImage = necromancer4; }
    else if (imageIndex === 5) { currentImage = necromancer5; }
    else if (imageIndex === 6) { currentImage = necromancer6; }
    else if (imageIndex === 7) { currentImage = necromancer7; }
    else if (imageIndex === 8) { currentImage = necromancer8; }
    else if (imageIndex === 9) { currentImage = necromancer9; }

    // <<< Add the remaining images here. We have 10 images in total.

    // Draw the selected image on the canvas
    image(currentImage, x, 0, necromancer0.width * IMAGE_SCALE, necromancer0.height * IMAGE_SCALE);

    // Move to the next image in the animation. If we reach the end, start over.
    imageIndex++;
    if (imageIndex === 10){
    imageIndex = 0
    }
    // Move the sprite to the right. If the sprite moved too far, set it back to the left.
    x += 5;
    // <<< Add the logic to reset the sprite position to the left when it has moved too far to the right (> 500 pixels is a good threshold).
}
