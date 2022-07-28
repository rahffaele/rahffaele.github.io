PFont font;
PGraphics pg;
int vScale = 130;

void setup() {
  font = createFont("DMSans-Regular.ttf", 600);
  width = 600;
  height = 600;
  size(width, height, P2D);
  pg = createGraphics(width, height, P2D);
  
  
}

void draw() {
  background(0);

  // PGraphics 

  pg.beginDraw();
  //pg.background(0);
  pg.fill(255);
  pg.textFont(font);
  pg.textSize(300);
  pg.pushMatrix();
  pg.translate(width/2, height/4);
  pg.textAlign(CENTER, CENTER);
  pg.text("rahffaele", 0, 0);
  pg.popMatrix();
  pg.endDraw();

  int tilesX = width/vScale;
  int tilesY = width/vScale;

  int tileW = int(width/tilesX);
  int tileH = int(height/tilesY);

  for (int y = 0; y < tilesY; y++) {
    for (int x = 0; x < tilesX; x++) {
      
     int i = y*vScale;
      int j = x*vScale;
      rect(i, j, vScale, vScale);
      noFill();
      stroke(255);
      
      // WARP

      int wavex = int(sin((mouseX+frameCount) * 0.005 + ( x * y ) * 0.07) * 100);
      int wavey = int(sin((mouseY+frameCount) * 0.005 + ( x * y ) * 0.07) * 100);


      // SOURCE
      int sx = x*vScale + wavex;
      int sy = y*vScale + wavey;
      int sw = vScale;
      int sh = vScale;


      // DESTINATION
      int dx = x*vScale;
      int dy = y*vScale;
      int dw = vScale;
      int dh = vScale;
      
      copy(pg, sx, sy, sw, sh, dx, dy, dw, dh);
      
      
    }
  }
}
