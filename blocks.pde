int a;
int b;

void setup()
{
  size(600,500);
  background(255,255,255);
}
void draw(){
  line(500,0,500,500);
    noStroke();
}

void mousePressed()
{
  int x = mouseX;
  int y = mouseY;
  if (x<width/2 && y<height/3)
  {
      fill(0,255,0);
      rect(0,0,width/2,height/3);
  }
   else if (x<width/2 && y>height/3)
    {
      fill(255,0,0);
      rect(0,height/3,width/2,height/(3/2));
    }
 else if (x>width/2 && x<width-100);
   {
    fill(255,0,255);
    rect(width/2,0,(width/2)-100,height);
   }
   if (x==500)
  {
  fill(0,255,255);
  rect(500,0,100,height);
  }
}