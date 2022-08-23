/*var font;

var pg;

var vScale;
var txtposdiff;
var mov;
var textSize;

function setup() {
    initializeFields();
    createCanvas(windowWidth, windowHeight, P2D);
    pg = createGraphics(windowWidth, windowHeight, P2D);
}

function draw() {

    if (windowWidth>800) {
        textSize = 130;
    }
    else {
        textSize = 30;
    }
    background(0);
    // PGraphics
    //pg.background(0, 0);
    pg.fill(255);
    pg.textFont("Helvetica");
    pg.textSize(textSize);
    pg.push();
    pg.translate(width / 4, height / 4 * txtposdiff);
    pg.textAlign(CENTER, CENTER);
    pg.text("rahffaele", 0, 0);
    pg.pop();
    var tilesX = width / vScale;
    var tilesY = width / vScale;
    var tileW = int(width / tilesX);
    var tileH = int(height / tilesY);
    for (var y = 0; y < tilesY; y++) {
        for (var x = 0; x < tilesX; x++) {
            if (windowWidth>800) {
                var i = y * vScale;
                var j = x * vScale;
                rect(i, j, vScale, vScale);
                noFill();
                stroke(255);
            }
            // WARP
            var wavex = int(sin((mouseX + frameCount * 0.25) * 0.005 + (x * y) * 0.07) * 100 * mov);
            var wavey = int(sin((mouseY + frameCount * 0.25) * 0.005 + (x * y) * 0.07) * 100 * mov);
            // SOURCE
            var sx = x * vScale + wavex;
            var sy = y * vScale + wavey;
            var sw = vScale;
            var sh = vScale;
            // DESTINATION
            var dx = x * vScale;
            var dy = y * vScale;
            var dw = vScale;
            var dh = vScale;
            drawingContext.drawImage(pg.canvas, sx, sy, sw, sh, dx, dy, dw, dh);
        }
    }
}

function initializeFields() {
    font = null;
    pg = null;
    if (windowWidth>960) {
        vScale = 130;
        txtposdiff = 1;
        mov = 1;
    }
    else {
        vScale = 60;
        txtposdiff = 0.5;
        mov = 0.5;
    }
}


function windowResized() { 
    resizeCanvas(windowWidth, windowHeight+100); 
}
*/

let x = 0;
let y = 0;
var control = 0;
let stepSize = 5.0;

let PPHatton;

let font = 'Helvetica';
let voice1 = "ABOUT ME:";
let voice2 = "PORTFOLIO:";
let voice3 = "ARCHIVES:";
let fontSizeMin = 20;
let angleDistortion = 0.0;

let counter = 0;


function preload() {
    PPHatton = loadFont('fonts/PPHatton-Medium.otf');
}

function setup() {
  // use full screen size
  createCanvas(displayWidth, displayHeight);
  cursor(CROSS);

  x = mouseX;
  y = mouseY;

  
  fill(0);
  textFont(PPHatton);
  textSize(30);
  textAlign(CENTER, CENTER);
  text("Rahffaele - Designer", displayWidth/2, displayHeight/2);

  textFont(font);
  textAlign(LEFT);
  fill(0);
}

function draw() {
  if (mouseIsPressed && mouseButton == LEFT && control == 0) {
    let d = dist(x, y, mouseX, mouseY);
    textSize(20);
    let newLetter = voice1.charAt(counter);
    stepSize = textWidth(newLetter);

    if (d > stepSize) {
      let angle = atan2(mouseY - y, mouseX - x);

      push();
      translate(x, y);
      rotate(angle + random(angleDistortion));
      text(newLetter, 0, 0);
      pop();
      
      counter++;
      if (counter = letters.length - 1) counter = letters.length;
     
      x = x + cos(angle) * stepSize;
      y = y + sin(angle) * stepSize;
    }
  }
  if (mouseIsPressed  && control == 1) {
    let d = dist(x, y, mouseX, mouseY);
    textSize(20);
    let newLetter = voice2.charAt(counter);
    stepSize = textWidth(newLetter);

    if (d > stepSize) {
      let angle = atan2(mouseY - y, mouseX - x);

      push();
      translate(x, y);
      rotate(angle + random(angleDistortion));
      text(newLetter, 0, 0);
      pop();

      counter++
      
      x = x + cos(angle) * stepSize;
      y = y + sin(angle) * stepSize;
    }
  }
  
  
  if (mouseIsPressed && mouseButton == LEFT && control == 2) {
    let d = dist(x, y, mouseX, mouseY);
    textSize(20);
    let newLetter = voice3.charAt(counter);
    stepSize = textWidth(newLetter);

    if (d > stepSize) {
      let angle = atan2(mouseY - y, mouseX - x);

      push();
      translate(x, y);
      rotate(angle + random(angleDistortion));
      text(newLetter, 0, 0);
      pop();
      
      counter++

      x = x + cos(angle) * stepSize;
      y = y + sin(angle) * stepSize;
    }
  }
}
function mouseReleased() {
  control = control +1;
  counter=0;
}



function mousePressed() {
  x = mouseX;
  y = mouseY;
}

function keyReleased() {
  if (key == 's' || key == 'S') saveCanvas(gd.timestamp(), 'png');
  if (keyCode == DELETE || keyCode == BACKSPACE) background(255);
}

function keyPressed() {
  // angleDistortion ctrls arrowkeys up/down
  if (keyCode == UP_ARROW) angleDistortion += 0.1;
  if (keyCode == DOWN_ARROW) angleDistortion -= 0.1;
}
