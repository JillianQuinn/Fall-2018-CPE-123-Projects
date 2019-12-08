var rightLegR;
var leftLegR;
var leftLegDown = false;
var rightLegDown = true;
var loc;

function setup()
{
    createCanvas(300, 600);    
    leftLegR = PI/20;
    rightLegR = -PI/20;
    loc = createVector(100, 100);
}
function draw()
{   
    background(255);
    drawFrog();

    if (rightLegR < -PI/10)
   {
    rightLegDown = false;
   }
   if (rightLegR > PI/10)
   {
    rightLegDown = true;
   }

   if (rightLegDown == true)
   {
    rightLegR -= PI/200;
   }
   else
   {
    rightLegR += PI/200;
   }

   if (leftLegR < -PI/10)
   {
    leftLegDown = false;
   }
   if (leftLegR > PI/10)
   {
    leftLegDown = true;
   }

   if (leftLegDown == true)
   {
    leftLegR -= PI/200;
   }
   else
   {
    leftLegR += PI/200;
   }  		
}
function drawFrog()
{
	//noStroke();
	

	push();
		//ENTIRE FROG
		translate(loc.x, loc.y);
		scale(1);

		//left arm
		fill(70, 200, 70);
		push();
			translate(-20, 5);
			quad(0, 0, 0, -10, -15, -23, -18, -20);
			push();
				translate(-16, -21);
				push();
					translate(20, -22);
					rotate(PI/2);
					rect(9, 17, 15, 2);
					ellipse(9, 18.5, 5);
					push();
						rotate(-PI/9);
						rect(1, 25, 15, 2);
						ellipse(1, 26, 5);
						rotate(-PI/9);
						rect(-8, 30, 15, 2);
						ellipse(-8, 31, 5);
					pop();
					ellipse(22, 19.5, 10);
				pop();
				ellipse(0, 0, 10);
			pop();
		pop();

		//right arm
		push();
			translate(20, 5);
			quad(0, 0, 0, -10, 15, -23, 18, -20);
			push();
				translate(16, -21);
				push();
					translate(-20, -22);
					rotate(-PI/2);
					rect(-23, 17, 15, 2);
					ellipse(-8, 18.5, 5);
					push();
						rotate(PI/9);
						rect(-14, 25, 15, 2);
						ellipse(0, 26, 5);
						rotate(PI/9);
						rect(-5, 30, 15, 2);
						ellipse(10, 31, 5);
					pop();
				pop();
				ellipse(0, 0, 10);
			pop();
		pop();
		
		

		//left leg
		push();
			translate(-4, 25);
			quad(0, 0, -12, -7, -25, 7, -15, 15);
			push();
				translate(-25, 7);
				rotate(leftLegDown);
				quad(0, 0, 20, 20, 24, 15, 14, -3);
				
				rect(9, 17, 15, 2);
				ellipse(9, 18.5, 5);
				push();
					rotate(-PI/9);
					rect(1, 25, 15, 2);
					ellipse(1, 26, 5);
					rotate(-PI/9);
					rect(-8, 30, 15, 2);
					ellipse(-8, 31, 5);
				pop();
				ellipse(22, 19.5, 10);
			pop();
		pop();

		//right leg
		push();
			translate(4, 25);
			quad(0, 0, 12, -7, 25, 7, 15, 15);
			push();
				translate(25, 7);
				rotate(-PI/3);
				rotate(rightLegDown);
				quad(0, 0, -20, 20, -24, 15, -14, -3);
				rect(-23, 17, 15, 2);
				ellipse(-8, 18.5, 5);
				push();
					rotate(PI/9);
					rect(-14, 25, 15, 2);
					ellipse(0, 26, 5);
					rotate(PI/9);
					rect(-5, 30, 15, 2);
					ellipse(10, 31, 5);
				pop();
				ellipse(-22, 19.5, 10);
			pop();
		pop();

		//body
		ellipse(0, 0, 50, 55);
		fill(190, 254, 113);
		ellipse(0, 0, 30, 35);
		fill(70, 200, 70);

		//head
		push();
			translate(0, -20);

			ellipse(0, 0, 55, 35);
		pop();	

		//left eye
		push();
			translate(-18, -35);
			ellipse(0, 0, 20);
			fill(255);
			ellipse(0, 0, 13);
			push();
				translate(1, 2.1);
				fill(0);
				ellipse(0, 0, 6);
			pop();
		pop();

		//right eye
		push();
			translate(18, -35);
			ellipse(0, 0, 20);
			fill(255);
			ellipse(0, 0, 13);
			push();
				translate(-1, 2.1);
				fill(0);
				ellipse(0, 0, 6);
			pop();
		pop();

		//smile
		push();
			translate(0, -13);
			beginShape();
				curveVertex(-20, -3);
				curveVertex(-20, -3);
				curveVertex(0, 3);
				curveVertex(20, -3);
				curveVertex(20, -3);
			endShape();
		pop();
		
	pop();



}
