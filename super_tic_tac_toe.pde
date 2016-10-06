int rectPosX;
int rectPosY;
boolean boxOver;
boolean isCovered;

void setup() {
size(600, 600);
background(255, 255, 255);
strokeWeight(5);
rectPosX = 33;
rectPosY = 33;
boxOver = false;
smooth();


line(200, 0, 200, 600);
line(400, 0, 400, 600);
//vertical lines (big board)

line(0, 200, 600, 200);
line(0, 400, 600, 400);
//horizontal lines (big board)

strokeWeight(1);
line(66, 0, 66, 600);
line(132, 0, 132, 600);
//vertical lines - 1st box (small board)
line(266, 0, 266, 600);
line(332, 0, 332, 600);
//vertical lines - 2nd box(small board)
line(466, 0, 466, 600);
line(532, 0, 532, 600);
//vertical lines - 3rd box(small board)

line(0, 66, 600, 66);
line(0, 132, 600, 132);
//horizontal lines - 1st box (small board)
line(0, 266, 600, 266);
line(0, 332, 600, 332);
//horizontal lines - 2nd box(small board)
line(0, 466, 600, 466);
line(0, 532, 600, 532);
//horizontal lines - 3rd box(small board)

strokeWeight(3);
stroke(255,0,0);
line(0, 0, 66, 66);
line(66, 0, 0, 66);
//X icon
}

//var myBox = rect(0, 0, 66, 66);

void draw() {
  stroke(250,177,9);
  strokeWeight(3);
  fill(255,255,255);
  rectMode(CENTER);
  rect(rectPosX, rectPosY, 66, 66);
  rectPosX = mouseX;
  rectPosY = mouseY;
}