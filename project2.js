var sc;
var expandCat;
var xCat;
var yCat;
var x, y, x2, y2, x3, y3, x4, y4, x5, y5, x6, y6, x7, y7, moveShard, windowColor, windowColor2, star

function setup()
{
   createCanvas(400, 500);
   x = 1;
   y = 1;
   x2 = 0;
   y2 = 0;
   x3 = 0;
   y3 = 0;
   x4 = 0;
   y4 = 0;
   x5 = 0;
   y5 = 0;
   x6 = 0;
   y6 = 0;
   x7 = 0;
   y7 = 0;
   windowColor = color(107, 154, 206);
   windowColor2 = color(184, 195, 223);
   moveShard = false;
   sc = .01;
   expandCat =false;
   xCat = 200;
   yCat = 300;
   star = false;

}
function draw()
{
    frameRate(60);
    drawBack();
    drawHat();

    if (star) {
        fill(255);
        ellipse(100, 50, 3);
        ellipse(220, 70, 4);
        ellipse(250, 45, 3);
        ellipse(270, 55, 4);
        ellipse(290, 90, 5);    
        ellipse(300, 50, 3);      
        ellipse(100, 100, 3);
        ellipse(130, 60, 2);
        ellipse(170, 50, 3);
        ellipse(300, 100, 3);
        ellipse(260, 100, 3);
        ellipse(135, 85, 6);
        ellipse(190, 100, 5);
        beginShape();
          curveVertex();
          curveVertex();
          curveVertex();
          curveVertex();
          curveVertex();
          curveVertex();
        endShape();

    }

    if (moveShard == true)
    {
        drawShatter();
        drawTreeShard(x, y);
        drawShard2(x2, y2);
        drawShard3(x3, y3);
        drawShard4(x4, y4);
        drawShard5(x5, y5);
        drawShard6(x6, y6);
        drawShard7(x7, y7);
     
        y+=1;
        x+=1;
        y2+=1.9;
        x2-=2;
        y3+=1.9;
        x3-=.5;
        y4+=1.9;
        x4+=.8;
        y5+=.4;
        x5-=.6;
        y6+=1.8;
        x6-=.1;
        y7+=1.4;
        x7+=.3;
        if(y > 123) {
            moveShard == false;
          // noLoop();
        }
    }
}
function drawHat() 
{
	//hat
	push();
    	translate(0, 150);
  		fill(50);
  		rect(134,230,130,100,40);
  		push();
  			translate(200,200);
  			rotate(-PI/7);
  			ellipse(-70,10,80,30);
 	    	rotate(PI/3.5)
 	    	ellipse(60,10,80,30);
  		pop();
  		arc(198,240,130,60,PI,0);
  		drawCat(sc,xCat,yCat);
 		ellipse(200,250,110,40);
 	pop();

  if(expandCat)
  {
    sc += .02;
    yCat  -= .2;
    if(sc > 1)
    {
      sc=1;
      moveShard = true;
    }
    if(yCat<200)
    {
      yCat=200;
    }
  }
}

function drawCat(sCat,x,y)
{
  push();
  	translate(xCat,yCat);
  	scale(sCat);
  	fill(100);
  	rect(-40,-35,80,80,20);
  	ellipse(0,-50,80,80);
  	//fill(50);
  	fill(80);
  	triangle(-37,-10,-37,-20,-10,-15);
  	triangle(-37,15,-37,0,-5,5);
 	triangle(37,-10,37,-20,10,-15);
 	triangle(37,15,37,0,5,5);
  	//ears
  	fill(100);
  	triangle(-35,-20,5,-80,-35,-95);
  	triangle(35,-20,0,-80,35,-95);
  	//mouth
  	fill(0);
  	triangle(-6,-45,5,-45,0,-40);
  	stroke(0);
  	fill(255,172,231);
  	line(0,-40,0,-37);
  	arc(0,-30,7,3,0,PI);
  	fill(0);
  	push();
    	rotate(PI);
    	stroke(0);
    	line(0,35,-5,30);
    	line(0,35,5,30);
  	pop();
  	noStroke();
  	//eyes
  	push();
    	stroke(0);
   		translate(0,-100);
   		rotate(PI/5);
    	fill(250);
    	ellipse(12,46,15,13);
    	fill(0);
    	ellipse(12,44,4,6);
    	rotate(-PI/3);
    	fill(250);
    	ellipse(0,47,15,13);
    	fill(0);
    	ellipse(0,45,4,6);
  	pop();
  	stroke(0);
  	strokeWeight(1.5)
  	line(-27,-63,-20,-63);
  	line(20,-64,27,-64);
  	//whiskers
  	stroke(0);
  	strokeWeight(.5);
  	line(5,-35,20,-30);
  	line(5,-37,20,-37);
  	line(5,-40,20,-45);
  	line(-5,-35,-20,-30);
  	line(-5,-37,-20,-37);
  	line(-5,-40,-20,-45);
  pop();
}
function breakWindow() 
{
	moveShard = true;
 }
function drawTreeShard(x, y) 
{
    push();
        translate(x, y);
        fill(windowColor2);
        stroke(200);
        strokeWeight(2);
        triangle(120, 150, 180, 240, 120, 240);
        fill(34, 77, 83);
        arc(170, 210, 50, 60, PI/2.5, 4*PI/3.3); //oval tree
        noStroke();
        fill(68, 74, 96);
        rect(140, 210, 2, 24); //stump
        fill(38, 101, 116);
        ellipse(140, 210, 30); //tree
        fill(61, 108, 98);
        arc(150, 240, 60, 20, PI, 0); //ground
        fill(190, 197, 226);
    pop();
}
function drawShard2(x, y) //small green
{
    push();
        translate (230, 146);
        translate(x2,y2);
        fill(windowColor2);
        stroke(200);
        strokeWeight(2);
        triangle(50, 123, 30, 17, 70, 55);
        fill(61, 108, 98);
        noStroke();
        arc(49, 123, 60, 68, 8.65*PI/6, 9.5*PI/6);
    pop();
}
function drawShard3(x, y) //big green
{ 
    push();
        translate(x, y);
        fill(windowColor2);
        stroke(200);
        strokeWeight(2);
        triangle(280, 269, 190, 290, 260, 163);
        noStroke();
        fill(61, 108, 98);
        quad(190, 290, 280, 269, 275, 239, 225, 230);
    pop();
}
function drawShard4 (x, y) 
{
    push();
        translate(x, y);
        fill(windowColor2);
        stroke(200);
        strokeWeight(2);
        triangle(190, 290, 140, 160, 260, 163);
        noStroke();
        fill(34, 77, 83);
        arc(170, 210, 50, 60, 4*PI/3.3, PI/2.5,); //oval tree
        quad(170, 210, 180, 240, 167, 230, 151, 190);
        fill(61, 108, 98);
        triangle(190, 290, 220, 230, 167, 230);
    pop();
}
function drawShard5 (x, y) 
{
    push();
        translate(x, y);
        fill(61, 108, 98);
        stroke(200);
        strokeWeight(1.5);
        triangle(135, 275, 165, 310, 190, 275);
        fill(106, 111, 70);
        noStroke();
        arc(140, 280, 90, 5, 7*PI/4, PI/2);
        fill(93, 82, 50);
        ellipse(165, 300, 10, 7);
    pop();
}
function drawShard6 (x, y) 
{
    push();
        translate(x, y);
        fill(61, 108, 98);
        stroke(200);
        strokeWeight(1);
        quad(82, 240, 100, 280, 160, 280, 140, 260);
    pop();
}
function drawShard7 (x, y) 
{
    push();
        translate(x, y);
        fill(windowColor2);
        stroke(200);
        strokeWeight(2);
        triangle(120, 150, 140, 160, 120, 190);
    pop();
}
function drawShatter() {
    beginShape();
         noFill();
         stroke(200);
         strokeWeight(2);
         vertex(135, 280);
         vertex(165, 310);
         vertex(190, 290);
         vertex(200, 280);
         vertex(280, 270);
         vertex(300, 200);
         vertex(260, 163);
         vertex(230, 146);
         vertex(140, 160);
         vertex(120, 145);
         vertex(110, 160);
         vertex(100, 200);
         vertex(80, 240);
         vertex(100, 280);
         vertex(135, 280);
     endShape();
     noStroke();
}
function drawBack()
{
    noStroke(); //window scene
    fill(windowColor2);
    rect(0, 140, width, 180);
    fill(68, 74, 96); //main tree
    rect(140, 210, 2, 24);
    fill(34, 77, 83);
    ellipse(170, 210, 50, 60);
    fill(38, 101, 116);
    ellipse(140, 210, 30);
    fill(61, 108, 98);
    ellipse(200, 300, width, 140);
    fill(106, 111, 70);
    ellipse(140, 280, 100, 5);
    fill(93, 82, 50);
    ellipse(250, 300, 190, 7);

    fill(68, 74, 40);
    rect(0, 470, width, 30);
    fill(85, 70, 27);
    rect(0, 440, width, 35);
    fill(72, 91, 72);
    rect(0, 370, width, 70);
    fill(0);
    rect(0, 363, width, 7);
    fill(28, 37, 36);
    rect(0, 340, width, 23);
    fill(108, 96, 72);
    rect(0, 325, width, 15);
    fill(161, 158, 143);
    rect(0, 320, width, 5);
    fill(80, 79, 61);
    rect(0, 120, width, 22);
    fill(39, 44, 40);
    rect(0, 0, width, 30);
    fill(118, 132, 115);
    ellipse(200, 50, 320, 80);
    fill(80, 79, 61);
    ellipse(200, 60, 320, 80);
    fill(windowColor);
    ellipse(200, 78, 320, 80);
    rect(40, 60, 320, 60);
    fill(159, 129, 57);
    rect(0, 15, width, 5);
    
    fill(112, 67, 46); //left curtain
    rect(0, 20, 65, 390);
    fill(46, 42, 33);
    ellipse(40, 216, 8, 390);
    ellipse(20, 216, 6, 390);
    ellipse(57, 97, 6, 150);
    ellipse(57, 290, 5, 240);
    ellipse(10, 200, 3, 300);
    fill(176, 156, 129); //rings
    strokeWeight(1);
    stroke(74, 54, 27);
    ellipse(20, 17, 3, 6);
    ellipse(25, 17, 3, 6);
    ellipse(10, 17, 3, 6);
    ellipse(38, 17, 3, 6);
    ellipse(48, 17, 3, 6);
    ellipse(57, 17, 3, 6);
    noStroke();

    fill(112, 67, 46); //right curtain
    rect(340, 20, 65, 390);
    fill(46, 42, 33);
    ellipse(350, 150, 5, 250);
    ellipse(370, 217, 5, 390);
    ellipse(385, 300, 7, 220);
    ellipse(385, 105, 5, 160);
    fill(176, 156, 129); //rings
    stroke(74, 54, 27);
    ellipse(350, 17, 3, 6);
    ellipse(365, 17, 3, 6);
    ellipse(374, 17, 3, 6);
    ellipse(370, 17, 3, 6);
    ellipse(343, 17, 3, 6);
    ellipse(385, 17, 3, 6);
    ellipse(395, 17, 3, 6);
    noStroke();
}
function mouseClicked()
{
  if(mouseX>134 && mouseX<264 && mouseY>380 && mouseY <480)
  {
    sc = .01;
    yCat = 230;
    expandCat = true;
    drawCat(sc,xCat,yCat);
  }

  if(mouseX>65 && mouseX<335 && mouseY>20 && mouseY < 100) 
  {
  	windowColor = color(37, 33, 117);
  	windowColor2 = color(37, 33, 117);
    star = true;
   	//66, 96, 191
  }
}