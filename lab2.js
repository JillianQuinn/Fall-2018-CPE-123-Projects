
var xCat, yCat, scaleCat

function setup() 
{
   createCanvas(400, 400);
   noStroke();
}
function draw() 
{
	xCat = width*.6825;
	yCat = height*.65;
	scaleCat = 1;
   background(255);

   fill(120, 184, 222);
   textSize(48);
   textStyle(BOLD);
   textFont("Helvetica");
   text("RESCUER", width*.2125, height*.2125);

   	fill(254, 151, 142);
   	stroke(254, 151, 142);
   	strokeCap(ROUND);
   	quad(width*.49, height*.536, width*.525, height*.525, width*.520, height*.549, width*.47, height*.546); //hand
   	fill(255);
   	noStroke();
   	ellipse(width*.520, height*.543, 7, 3); //finger hole
   	fill(255);
    ellipse(width*.520, height*.525, 9, 3.5); //hand top
    fill(254, 151, 142);
    arc(width*.445, height*.655, 16, 10, 7*PI/8, PI/8); //hand
    


    fill(120, 184, 222); //Shirt
	stroke(120, 184, 222);
	curve(width*.4, height*.5, width*.4355, height*.485, width*.455, height*.64, width*.4, height*.66); //long right
	curve(width*.49, height*.56, width*.4055, height*.485, width*.435, height*.64, width*.49, height*.76); //long left
	quad(width*.4355, height*.485, width*.455, height*.64, width*.435, height*.64, width*.4055, height*.485); //fill
	smooth();
   	quad(width*.4355, height*.505, width*.49, height*.529, width*.4825, height*.555, width*.4055, height*.53); //small sleeve

   
   	noStroke();
    rect(width*.125, height*.66, width*.76, height*.0375); //platform
   

    fill(138, 124, 141); //purple squares 
    rect(width*.125, height*.275, width*.095, height*.1875); //top left
    rect(width*.7375, height*.275, width*.125, height*.1875); //top right
    rect(width*.125, height*.875, width*.095, height*.1875); //bottom left
    rect(width*.7375, height*.875, width*.125, height*.1875); //bottom right
   
      	
   	fill(254, 151, 142);
   	push();
   	translate(width*.3 , height*.645);
   	rotate(PI/8);
   	ellipse(0, 0, 20, 10);
   	ellipse(23, -23, 12, 15);
   	ellipse(25.4, -18, 9, 16);
   	pop();
   	ellipse(width*.320 , height*.635, 10, 18); //thigh

   	fill(126, 106, 69);
   	arc(width*.37, height*.65, 16, 10, 0, 7*PI/6); //shoe



    fill(126, 106, 69);
    quad(width*.2930, height*.5375, width*.375, height*.595, width*.375, height*.630, width*.3, height*.628); //pant
    ellipse(width*.30, height*.58, 30, 38); // butt

    arc(width*.27 , height*.640, 10, 18, PI/3, 5*PI/3); //shoe

	push();
	translate(width*.2025, height*.53);
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
    arc(width*.438, height*.4377, 25, 25, .99*PI, 2.04*PI); //hair
    noStroke();

    push();
    translate(width*.437, height*.437);
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
	
	drawCat(xCat, yCat, scaleCat);
}
function drawCat(x, y, rot, sc) 
{
   push();
      translate(x, y);
      scale(sc);
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


  