
var xCat, yCat, scaleCat, wid, counterCat
var xSmoke = 300;
var ySmoke = 260;
var scaleSmoke = 1;
var counter = 0;

function setup() 
{
   createCanvas(800, 400);
   
   noStroke();
   wid = 400
   xCat = wid*.6825;
   yCat = height*.65;
   scaleCat = 1;
   counterCat = 0;
}
function draw() 
{
  background(255);
  drawRiver();
  drawBoat();
  drawHouse();
  drawBackground();
  scaleSmoke += .001;
  ellipse1 = random (-2, 2);
  ellipse2 = random (-2, 2);
  ellipse3 = random (-2, 2);
  ellipse4 = random (-2, 2);
  rect1 = random (-2, 2);
  rect2 = random (-2, 2);
   
  counterCat+=1;
  if (counterCat < 800)
  {
    xCat+= 1;
  }
  if (counterCat > 100) {
    yCat += .7;
  } if (counterCat > 270) 
  {
    yCat = yCat - .9;
  }

  if (xCat >800) {
    xCat = wid*.6825;
    yCat = height*.65;
    counterCat = 0;
  }

  drawCat(xCat, yCat, scaleCat);
  drawText();
  drawBushes();
  drawSmoke(xSmoke, ySmoke, scaleSmoke, counter, ellipse1, ellipse2, ellipse3, ellipse4, rect1, rect2);
  
}
function drawRiver()
{
  //river
  push();
  translate(400, 0);
  stroke(13, 141, 255);
  fill(13, 141, 255);

  quad(-400, 100, -400, 200, 400, 350, 400, 220);
  fill(255);
  bezier(-401, 99, -141, 149, 139, 399, 399, 219);

  strokeWeight(0);
  fill(13, 141, 255);
  bezier(-400, 200, -140, 250, 140, 500, 400, 350);
  pop();
}


function drawBackground()
{
   fill(120, 184, 222);
   textSize(48);
   textStyle(BOLD);
   textFont("Helvetica");
   text("RESCUER", wid*.2125, height*.2125);

    fill(254, 151, 142);
    stroke(254, 151, 142);
    strokeCap(ROUND);
    quad(wid*.49, height*.536, wid*.525, height*.525, wid*.520, height*.549, wid*.47, height*.546); //hand
    fill(13, 141, 255);
    noStroke();
    ellipse(wid*.520, height*.543, 7, 3); //finger hole
    fill(13, 141, 255);
    ellipse(wid*.520, height*.525, 9, 3.5); //hand top
    fill(254, 151, 142);
    arc(wid*.445, height*.655, 16, 10, 7*PI/8, PI/8); //hand
    
    fill(120, 184, 222); //Shirt
    stroke(120, 184, 222);
    curve(wid*.4, height*.5, wid*.4355, height*.485, wid*.455, height*.64, wid*.4, height*.66); //long right
    curve(wid*.49, height*.56, wid*.4055, height*.485, wid*.435, height*.64, wid*.49, height*.76); //long left
    quad(wid*.4355, height*.485, wid*.455, height*.64, wid*.435, height*.64, wid*.4055, height*.485); //fill
    smooth();
    quad(wid*.4355, height*.505, wid*.49, height*.529, wid*.4825, height*.555, wid*.4055, height*.53); //small sleeve
   
    noStroke();
    rect(wid*.125, height*.66, wid*.76, height*.0375); //platform
   

    fill(138, 124, 141); //purple squares 
    rect(wid*.125, height*.275, wid*.095, height*.1875); //top left
    rect(wid*.7375, height*.275, wid*.125, height*.1875); //top right
    rect(wid*.125, height*.875, wid*.095, height*.1875); //bottom left
    rect(wid*.7375, height*.875, wid*.125, height*.1875); //bottom right
    
    fill(254, 151, 142);
    push();
    translate(wid*.3 , height*.645);
    rotate(PI/8);
    ellipse(0, 0, 20, 10);
    ellipse(23, -23, 12, 15);
    ellipse(25.4, -18, 9, 16);
    pop();
    ellipse(wid*.320 , height*.635, 10, 18); //thigh

    fill(126, 106, 69);
    arc(wid*.37, height*.65, 16, 10, 0, 7*PI/6); //shoe

    fill(126, 106, 69);
    quad(wid*.2930, height*.5375, wid*.375, height*.595, wid*.375, height*.630, wid*.3, height*.628); //pant
    ellipse(wid*.30, height*.58, 30, 38); // butt

    arc(wid*.27 , height*.640, 10, 18, PI/3, 5*PI/3); //shoe

  push();
    translate(wid*.2025, height*.53);
    rotate(PI*7/4);
    fill(254, 151, 142); //head
    rect(79, 31, 20, 20); //head
    fill(120, 184, 222);
    stroke(120, 184, 222); //torso
    curve(15, 16, 25, 26, 73, 24, 73, 61); //left
    curve(5, 26, 73, 24, 73, 61, 15, 65); //top
    curve(73, 24, 73, 61, 20, 55, 15, 65); //right
    curve(20, 6, 25, 26, 20, 55, 55, 85); //bottom
    quad(25, 26, 73, 24, 73, 61, 20, 55); //fill
  pop();

  stroke(126, 106, 69);
  fill(126, 106, 69);
  arc(wid*.438, height*.4377, 25, 25, .99*PI, 2.04*PI); //hair
  noStroke();

  push();
    translate(wid*.437, height*.437);
    rotate(11*PI/3);
    ellipse(-4.5, -7.5, 10, 9); //hair
    ellipse(-3, 7.5, 3, 2); //eye
    stroke(1);
    line(-10, 5, -11, 7); //mouth
    stroke(0);
    fill(254, 151, 142); 
    noStroke();
    smooth();
    ellipse(0,0, 4, 3); //ear
    ellipse(-8, 9, 2, 5); //nose
  pop();
  
  }

function drawCat(xCat, yCat, scaleCat) 
{
   push();
      translate(xCat, yCat);
      scale(scaleCat);
      stroke(127, 108, 68);
      fill(127, 108, 68);
      arc(1.2, -8, 16, 24, PI/2, 3*PI/2); //left body
      arc(1, -9.5, 5, 21, 3*PI/2, PI/2,); //right body
      ellipse(-2, 0, 8, 9); //tail base
      ellipse(0, -25, 13, 12); //head
      fill(241, 237, 228);
      ellipse(-2.5, -25, 3); //left eye
      ellipse(2.5, -25, 3); //right eye
      fill(120, 184, 222);
      stroke(120, 184, 222);
      ellipse(-3, -25.5, 1); //left eye inner
      ellipse(2, -25.5, 1); //right eye inner
      fill(127, 108, 68);
      stroke(127, 108, 68);
      triangle(-5, -30, -3.7, -34, -1.5, -31);
      triangle(5, -30, 4, -34, 1.5, -30);

      noFill();
      strokeWeight(2);
      noSmooth();
      beginShape();
      curveVertex(-5, -.5); 
      curveVertex(-6.5, -.5); 
      curveVertex(-9, -7);
      curveVertex(-12, -10);
      curveVertex(-16, -15);
      curveVertex(-18, -20); 
      curveVertex(-18, -25); 
      endShape();
   pop();
}

function drawText()
{
  //Main text
  noStroke();
  fill(179, 12, 18);
  textSize(35);
  textFont("Georgia");
  text("L'arriere-", 540, 115);
  text("pays", 570, 150);

  //Small text
  textSize(17);
  fill(0, 148, 96);
  text("B l e x b o l e x", 550, 25);
  text("O r b i s   P i c t u s", 540, 390);

}
function drawBoat()
{
  //boat
  //yellow colored
  push();
  translate(400, 0)
  fill(254, 255, 29);
  triangle(280, 290, 295, 290, 287, 305);
  triangle(254, 315, 261, 315, 257, 305);
  ellipse(258, 305, 10, 13);

  fill(0, 1, 33);
  rect(282, 285, 1, 5);
  rect(291, 285, 1, 5);
  quad(282, 285, 284, 285, 293, 290, 291, 290);
  quad(293, 285, 291, 285, 282, 290, 284, 290);
  rect(190, 350, 70, 2);
  rect(290, 340, 50, 2);
  rect(150, 330, 60, 2);

  quad(240, 315, 330, 315, 320, 340, 250, 340);
  fill(201, 199, 179);
  rect(265, 295, 50, 20);
  fill(179, 12, 18);
  rect(295, 265, 10, 30);
  fill(0, 1, 33);
  ellipse(270, 307, 7, 7);
  ellipse(290, 307, 7, 7);
  ellipse(300, 307, 7, 7);
  triangle(240, 315, 235, 335, 215, 335);

  rect(310, 300, 5, 12);
  bezier(276, 315, 276, 300, 284, 300, 284, 315);
  rect(268, 298, 46, 1);

  rect(295, 260, 10, 5)
  fill(201, 199, 179);
  bezier(274, 340, 274, 320, 300, 320, 300, 340);
  pop();
}
function drawBushes()
{
  //bushes
  push();
  translate(400,0);
  fill(0, 117, 48);
  ellipse(20, 320, 30, 100);
  triangle(20, 260, 10, 280, 30, 280);

  ellipse(50, 380, 40, 30);
  ellipse(70, 370, 20, 20);

  ellipse(370, 375, 40, 30);
  triangle(375, 330, 370, 370, 380, 370);
  triangle(385, 330, 380, 370, 390, 370);
  triangle(365, 330, 360, 370, 370, 370);
  triangle(355, 330, 350, 370, 360, 370);

  ellipse(390, 200, 30, 30);
  ellipse(390, 220, 70, 30);
  triangle(360, 280, 355, 220, 370, 220);
  rect(375, 220, 10, 60);
  triangle(395, 290, 385, 220, 405, 220);

  ellipse(320, 180, 20, 20);
  triangle(320, 180, 315, 130, 335, 180);
  triangle(325, 180, 305, 127, 310, 180);
  triangle(320, 180, 295, 140, 310, 180);
  triangle(320, 170, 280, 170, 310, 180);
  triangle(300, 210, 315, 170, 320, 180);

  triangle(380, 90, 350, 170, 420, 170);

  quad(330, 5, 390, 40, 385, 60, 310, 30);
  ellipse(360, 18, 20, 20);
  ellipse(360, 50, 20, 20);
  rect(340, 35, 10, 60);

  ellipse(40, 50, 30, 30);
  triangle(28, 40, 70, 10, 50, 40);
  rect(50, 40, 30, 20);
  triangle(40, 50, 10, 30, 30, 10);
  rect(40, 50, 10, 60);

  ellipse(40, 150, 60, 30);
  triangle(60, 160, 80, 180, 70, 150);
  ellipse(40, 132, 10, 10);
  ellipse(32, 134, 10, 10);
  ellipse(47, 134, 10, 10);

  rect(190, 220, 40, 40);
  triangle(190, 220, 190, 215, 195, 220);
  triangle(195, 220, 200, 210, 205, 220);
  triangle(205, 220, 210, 208, 215, 220);
  triangle(215, 220, 220, 210, 225, 220);
  triangle(230, 220, 230, 215, 225, 220);
  pop();
}

function drawHouse()
{
  //building
  push();
  translate(400, 0);
  fill(179, 12, 18);
  quad(30, 230, 60, 230, 70, 240, 20, 240);
  rect(52, 223, 5, 7);

  quad(330, 100, 360, 100, 370, 110, 320, 110);

  fill(0, 1, 33);
  rect(45, 250, 6, 8);

  rect(345, 120, 6, 8);
  pop();
}

function drawSmoke(xSmoke, ySmoke, scaleSmoke, counter, ellipse1, ellipse2, ellipse3, ellipse4, rect1, rect2)
{
  //smoke
  push();
  translate(400, 0);
  translate(xSmoke, ySmoke);
  scale(scaleSmoke);

  if (counter < 800)
  {
    fill(0, 1, 33);
    ellipse(0, -10 + ellipse1, 10, 15 + ellipse1);
    ellipse(-10, -30 + ellipse2, 30, 30 + ellipse2);
    ellipse(-30, -50 + ellipse3, 40, 30 + ellipse3);
    ellipse(-60, -70 + ellipse4, 45, 35 + ellipse4);
    rect(-150, -90 + rect1, 70, 35, 20);
    rect(-240, -90 + rect2, 100, 35, 20);
    counter += 1;
  }
  pop();
}


