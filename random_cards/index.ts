let cardImage: p5.Image;
let colorname: string =""
let rank: string =""

const BASE_URL = 'https://cddataexchange.blob.core.windows.net/images/cards';

function preload() {
  // Generate random color (0 = clubs, 1 = diamonds, 2 = hearts, 3 = spades)
  const colorIx = Math.floor(random(0, 4));
  switch (colorIx){
    case 0: colorname= "clubs"; break;
    case 1: colorname = "diamonds"; break;
    case 2: colorname = "hearts"; break;
    case 3: colorname = "spades"; break;
  }

  // Generate random card (1 = Ace, 2 = 2, ..., 10 = 10, 11 = Jack, 12 = Queen, 13 = King)
  const cardIx = Math.floor(random(1, 14));
  switch (cardIx){
    case 1: rank = "A"; break;
    case 2: rank = "2"; break;
    case 3: rank = "3"; break;
    case 4: rank = "4"; break;
    case 5: rank = "5"; break; 
    case 6: rank = "6"; break; 
    case 7: rank = "7"; break;
    case 8: rank = "8"; break;
    case 9: rank = "9"; break;
    case 10: rank = "10"; break
    case 11: rank = "J"; break
    case 12: rank = "Q"; break
    case 13: rank = "K"
  }

cardImage = loadImage(`${BASE_URL}/${colorname}/${rank}.png`)
}

function setup() {
  createCanvas(250, 250);
  background("darkgreen");

  imageMode(CENTER);
  image(cardImage, width / 2, height / 2);
}
