// noprotect
var font;

var pg;

var vScale;

var textSize;

function setup() {
    initializeFields();
    createCanvas(windowWidth, windowHeight, P2D);
    pg = createGraphics(windowWidth, windowHeight-80, P2D);
}

function draw() {

    if (windowWidth>800) {
        textSize = 130;
    }
    else {
        textSize = 15;
    }
    background(0);
    // PGraphics
    //pg.background(0, 0);
    pg.fill(255);
    pg.textFont("Helvetica");
    pg.textSize(textSize);
    pg.push();
    pg.translate(width / 4, height / 4);
    pg.textAlign(CENTER, CENTER);
    pg.text("rahffaele", 0, 0);
    pg.pop();
    var tilesX = width / vScale;
    var tilesY = width / vScale;
    var tileW = int(width / tilesX);
    var tileH = int(height / tilesY);
    for (var y = 0; y < tilesY; y++) {
        for (var x = 0; x < tilesX; x++) {
            var i = y * vScale;
            var j = x * vScale;
            rect(i, j, vScale, vScale);
            noFill();
            stroke(255);
            // WARP
            var wavex = int(sin((mouseX + frameCount) * 0.005 + (x * y) * 0.07) * 100);
            var wavey = int(sin((mouseY + frameCount) * 0.005 + (x * y) * 0.07) * 100);
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
    vScale = 130;
}


function windowResized() { resizeCanvas(windowWidth, windowHeight); }
