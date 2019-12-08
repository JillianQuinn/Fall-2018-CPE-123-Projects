var numButterflies;
var bx = [];
var by = [];
var bfx = [];
var bfy = [];
var bfScale = [];
var bfColor = [];
var bf2Color = [];

var mountainX = [];
var mountainScale = [];
var mountainColor = [];
var flowerX = [];
var flowerY = [];
var flowerScale = [];
var flowerColor = [];
var flower2Color = [];
var stemColor = [];

function setup() 
{
   createCanvas(400, 400);
 

   numButterflies = 5;
   for (var i = 0; i < numButterflies; i++)
   {
      bx.push(random(-3, 3));
      by.push(random(-3, 3));
      bfx.push(random(width));
      bfy.push(random(height));
      bfColor.push(color(random(120, 255), 0, random(0, 50)));
      bf2Color.push(color(random(100, 255), 0, random(0, 40)));
      bfScale.push(random(.1, 1));
   }
   var x = 10;
   while (x < width + 50) 
   {
       flowerX.push(x);
       flowerY.push(random(370, 50));
       flowerScale.push(random(.2, 2.5));
       flowerColor.push(color(random(100, 255), 0, random(0, 80)));
       flower2Color.push(color(random(180, 255), 0, random(100, 255)));
       stemColor.push(color(random(130, 255), random(100, 200), random(0, 80)));
       x += random(20, 60);
   }
   var mX = -10;
   while (mX < width + 50) 
   {
       mountainX.push(mX);
       mountainScale.push(random(1, 5));
       mountainColor.push(color(random(160, 200), random(100, 140), 0, 100));
       mX += random(50, 90);
   }
}
function draw() 
{
	   background(229, 232, 202);

     //butterflies
     for (var i = 0; i < mountainX.length; i++)
     {
        drawMountain(mountainX[i], mountainScale[i], mountainColor[i]);
     }
     for (var i = 0; i < flowerX.length; i++)
     {
        drawFlower(flowerX[i], flowerY[i], flowerScale[i], flowerColor[i], flower2Color[i], stemColor[i]);
     }
     for (var i = 0; i < numButterflies; i++)
     {
        drawButterfly(bfx[i], bfy[i], bx[i], by[i], bfScale[i], bfColor[i], bf2Color[i]);

        bfx[i] -= bx[i];
        bfy[i] -= by[i];

        if (bfx[i] >= width || bfx[i] <= 0) 
        {
          bx[i] = -bx[i];
        }
        if (bfy[i] <=0 || bfy[i] >= height) 
        {
          by[i] = -by[i];
        }
     } 
    //flowers
}
function drawButterfly(x, y, bx, by, sc, c, c2)
{
  push();
    translate(x, y);
    rotate(atan2(by, bx) + PI/2);
    scale(sc);
    fill(c);
    noStroke();
    triangle(0, 0, -30, 13, -20, 40);
    triangle(0, 0, 30, 13, 20, 40);
    fill(c2);
    ellipse(-28, 27, 30);
    ellipse(28, 27, 30);
    fill(c);
    triangle(0, 0, -20, 0, -15, -20);
    triangle(0, 0, 20, 0, 15, -20);
    ellipse(-20, -10, 20);
    ellipse(20, -10, 20);
    noFill();
    stroke(130, 30, 20);
    strokeWeight(2);
    beginShape();
      curveVertex(0, 0);
      curveVertex(0, 0);
      curveVertex(-3, 15);
      curveVertex(-20, 50);
      curveVertex(-115, 55);
    endShape();
    beginShape();
      curveVertex(0, 0);
      curveVertex(0, 0);
      curveVertex(3, 15);
      curveVertex(20, 50);
      curveVertex(115, 55);
    endShape();
    strokeWeight(8);
    point(-20, 50);
    point(20, 50);
  pop();
}
function drawFlower(x, y, sc, fc, fc2, stemc) 
{
  push();
    translate(x, y);
    scale(sc);
    fill(stemc);
    noStroke();
    rect(0, 0, 3, -height*3); //stems

    fill(fc2); 
    ellipse(0, -11, 20);

    fill(fc);
    noStroke(); //flower petals
    scale(.5);
    triangle(2, 0, -30, -13, -20, -40);
    triangle(2, 0, 30, -13, 20, -40);
    ellipse(-28, -27, 30);
    ellipse(28, -27, 30);


  pop();
}
function drawMountain(x, sc, c)
{
    push();
      translate(x, height);
      scale(sc);
      fill(c);
      noStroke();
      ellipse(0, 0, 20, 100);
    pop();
}

