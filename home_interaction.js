// noprotect
var font;

var pg;

var vScale;

function setup() {
    initializeFields();
    createCanvas(displayWidth, displayHeight, P2D);
    pg = createGraphics(displayWidth, displayHeight, P2D);
}

function draw() {
    background(0);
    // PGraphics
    // pg.background(0);
    pg.fill(255);
    pg.textFont("Helvetica");
    pg.textSize(300);
    pg.push();
    pg.translate(width / 2, height / 4);
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
            copy(pg, sx, sy, sw, sh, dx, dy, dw, dh);
        }
    }
}

function initializeFields() {
    font = null;
    pg = null;
    vScale = 130;
}

