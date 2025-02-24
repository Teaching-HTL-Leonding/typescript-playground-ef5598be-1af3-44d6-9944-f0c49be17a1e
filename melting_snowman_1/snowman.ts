/**
* Draw the snowman
* 
* Leave out some parts of the snowman depending on the number of
* wrong guesses. Note that the left out parts are additive. That means
* if 3 wrong guesses are made, the parts for 1, 2, and 3 wrong guesses
* should be left out.
* 
* * 1 wrong: Lower three buttons
* * 2 wrong: Upper three buttons
* * 3 wrong: Left half of mouth
* * 4 wrong: Nose
* * 5 wrong: Right half of mouth
* * 6 wrong: Left eye
* * 7 wrong: Right eye
* * 8 wrong: Hat
* * 9 wrong: Top body part
* * 10 wrong: GAME OVER
*/
function drawSnowman(numberOfWrongGuesses: number) {
    // Set center of X axis
    translate(130, 0);

    // Body
    push();
    stroke("black");
    strokeWeight(2);
    fill("aliceblue")
    circle(0, 350, 250);
    circle(0, 175, 150);
    pop();

    // Eyes
    push();
    noStroke();
    fill("black");
    circle(-25, 150, 25);
    circle(25, 150, 25);
    pop();

    // Nose
    push();
    noStroke();
    fill("orange");
    triangle(0, 195, 0, 165, 40, 180);
    pop();

    // Mouth
    push();
    fill("black");
    translate(0, 180);
    rotate(45);
    for (let i = 0; i < 6; i++) {
        circle(40, 0, 12);
        rotate(18);
    }
    pop();

    // Knobs
    push();
    for (let i = 0; i < 6; i++) {
        noStroke();
        fill("black");
        circle(0, 275, 15);
        translate(0, 25);
    }
    pop();

    // Hat
    push();
    noStroke();
    fill("black");
    rect(-85, 110, 170, 10);
    rect(-50, 50, 100, 60);
    pop();
}
