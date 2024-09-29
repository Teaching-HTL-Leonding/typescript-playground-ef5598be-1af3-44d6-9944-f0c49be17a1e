let clicks: string[] = []; // Array für Klick-Koordinaten

function setup() {
  createCanvas(350, 350); // Leinwand erstellen
  textSize(20); // Schriftgröße setzen
}

function draw() {
  background("lightblue"); // Hintergrund zurücksetzen
  let x = 10, y = 30; // Startposition

  for (let i = 0; i < clicks.length; i++) {
    if (i > 0 && i % 5 === 0) { // Neue Zeile alle 5 Texte
      y += 30;
      x = 10;
    }
    text(clicks[i], x, y); // Text anzeigen
    x += textWidth(clicks[i]) + 10; // X-Position anpassen
  }
}

function mouseClicked() {
  clicks.push(`(${mouseX}, ${mouseY})`); // Koordinaten speichern
  fill("magenta");
  noStroke();
  circle(mouseX, mouseY, 15); // Kreis zeichnen
}
