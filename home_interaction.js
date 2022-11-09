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

let button1;
let button2;
let button3;

var control = 0;
let stepSize = 5.0;

let PPHatton;

let font = 'Helvetica';

let voice1 = "ABOUT ME";
let voice2 = "PORTFOLIO";
let voice3 = "ARCHIVES";
let fontSizeMin = 20;
let angleDistortion = 0.0;

let counter = 0;

function preload() {
    PPHatton = loadFont('fonts/PPHatton-Medium.otf');
    AlbertSans = loadFont('fonts/AlbertSans-Medium.ttf');
    Mori = loadFont('fonts/PPMori-Regular.otf');
}

function setup() {

  // use full screen size
  createCanvas(window.innerWidth, window.innerHeight);
  cursor(CROSS);

  x = mouseX;
  y = mouseY;

  
  fill(0);
  textFont(Mori);
  textSize(25);
  textAlign(CENTER, CENTER);
  text("Raffaele Amietta - Designer", displayWidth/2, displayHeight/2-30);
  fill(0);
  textFont(AlbertSans);
  textSize(15);
  textAlign(CENTER, CENTER);
  text("Click and drag anywhere to draw the menu", displayWidth/2, displayHeight/2+10);

  textFont(AlbertSans);
  textAlign(LEFT);
  fill(0);


}

function draw() {
  if (mouseIsPressed && control == 0) {

    let d = dist(x, y, mouseX, mouseY);
    textSize(20);
    let newLetter = voice1.charAt(counter);
    stepSize = textWidth(newLetter);

    if (d > stepSize) {
      let angle = atan2(mouseY - y, mouseX - x);

      push();

      let col = color(0,0,0,0);

      translate(x, y);
      rotate(angle + random(angleDistortion));
      text(newLetter, 0, 0);

      button1 = createButton("");
      button1.position(x-10,y-10);
      button1.mouseClicked(link1);
      button1.style('background-color', col);
      button1.style('border-color', col); 
      button1.style('height', 15); 
      button1.size(20, 20);      
      pop();
      
      if (counter > voice1.length-1) {
        counter = 8;
    } else {
        counter++;
    } 

     
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

      let col = color(0,0,0,0);

      translate(x, y);
      rotate(angle + random(angleDistortion));
      text(newLetter, 0, 0);

      button2 = createButton("");
      button2.position(x-10,y-10);
      button2.mouseClicked(link2);
      button2.style('background-color', col);
      button2.style('border-color', col); 
      button2.style('height', 15); 
      button2.size(20, 20);  
      pop();

       if (counter > voice2.length-1) {
        counter = 9;
    } else {
        counter++;
    } 
      
      x = x + cos(angle) * stepSize;
      y = y + sin(angle) * stepSize;
    }
  }
  
  
  if (mouseIsPressed && control == 2) {
    let d = dist(x, y, mouseX, mouseY);
    textSize(20);
    let newLetter = voice3.charAt(counter);
    stepSize = textWidth(newLetter);

    if (d > stepSize) {
      let angle = atan2(mouseY - y, mouseX - x);

      push();

      let col = color(0,0,0,0);

      translate(x, y);
      rotate(angle + random(angleDistortion));
      text(newLetter, 0, 0);

      button3 = createButton("");
      button3.position(x-10,y-10);
      button3.mouseClicked(link3);
      button3.style('background-color', col);
      button3.style('border-color', col); 
      button3.style('height', 15); 
      button3.size(20, 20);  
      pop();
      
      if (counter > voice3.length-1) {
        counter = 8;
    } else {
        counter++;
    } 

      x = x + cos(angle) * stepSize;
      y = y + sin(angle) * stepSize;
    }
  }
}

/*voice1.mousePressed(link1);
function link1() {
    window.open("https://www.w3schools.com");
}*/

function link1() {
    window.open("../about.html");
    control = control -1;
}

function link2() {
    window.open("../portfolio.html");
    control = control -1;
}

function link3() {
    window.open("../archives.html");
    control = control -1;
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
  if (keyCode == DELETE || keyCode == BACKSPACE) background(255);
}

function keyPressed() {
  // angleDistortion ctrls arrowkeys up/down
  if (keyCode == UP_ARROW) angleDistortion += 0.1;
  if (keyCode == DOWN_ARROW) angleDistortion -= 0.1;
}
