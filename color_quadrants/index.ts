function setup() {
    createCanvas(400, 200);
    background("black");
    noStroke();

fill("yellow")
rect(0, 0, width /2 , height *0.50)
fill("green")
rect(width /2, 0,  width /2, height *0.50)
fill("red")
rect(width /2,  height /2, width /2, height*0.50)
fill("blue")
rect(0,  height /2, width /2, height*0.50)
fill("black")
rect(width /4, height *0.4, 200, 40)

}

function mouseClicked() {
    let message: string

    if (mouseX < width/2 ){
        message:"Yellow"
    }else if (mouseX < width/2*2){
        message:"green"
    }else if (mouseX < width/2 && height/2){
        message:"blue"
    }else{
        message:"red"
    }
    fill("whithe")
    textSize(30)
    text(`${message}`, 200, 180)










}