// To start the animation click anywhere in the window
var loc, dir;
var neckR, wingR, llegR, rlegR, footR, lfootR, beakR, time;
var cx, cy, cx2, cy2, t;

var neckDown = true;
var wingDown = false;
var beakDown = false;
var leftLegDown = true;
var rightLegDown = false;
var animate = false;
var footDown = true;
var lfootDown = false;

// normal set up
function setup() 
{
   createCanvas(400, 400);

   loc = createVector(width*.9, height*.66);
   dir = createVector(-1, 0);
   neckR = 0;
   wingR = -PI/10;
   llegR = 0;
   rlegR = 0;
   beakR = 0;
   footR = 0;
   lfootR = 0;

}

// normal draw
function draw() 
{
   background(12, 245, 216);

   //foreground
   fill(78, 155, 16);
   rect(0, 2*height/3, width, 2*height/3);

   //tree
   fill(112, 69, 16);
   beginShape();
   	  curveVertex(120, 300); //trunk
   	  curveVertex(120, 300);
   	  curveVertex(80, 280);
   	  curveVertex(70, 235);
   	  curveVertex(75, 0);
   	  curveVertex(75, 0);
   	  curveVertex(0, 0);
   	  curveVertex(0, 0);
   	  curveVertex(0, 300);
   	  curveVertex(0, 300);
   	  curveVertex(50, 290);
   	  curveVertex(50, 290);
   endShape();
   fill(0, 120, 0);
   ellipse(40, 20, 90, 80); //leaves
   ellipse(40, 10, 90, 80);
   ellipse(0, 0, 40, 50);
   ellipse(20, 50, 80, 40);
   ellipse(70, 30, 70, 60);
   ellipse(80, 60, 60, 50);
   ellipse(50, 30, 60, 50);
   ellipse(70, 50, 70, 60);
   ellipse(100, 90, 50, 60);
   ellipse(80, 30, 60, 40);
   ellipse(90, 40, 60, 50);
   ellipse(30, 80, 70, 60);
   ellipse(10, 90, 60, 50);
   ellipse(80, 60, 60, 60);
   ellipse(90, 80, 60, 70);
   ellipse(80, 10, 50, 40);
   ellipse(40, 40, 60, 50);
   ellipse(20, 60, 60, 50);
   ellipse(50, 60, 60, 50);
	
   fill(224, 226, 3);
   ellipse(350, 50, 50);
   t = 0;
   for (var i=0; i<10; i++) //sun
   {
   		t = t + 2*PI/10;
   		cx = 349 + 30*cos(t);
   		cy = 50 + 30* sin(t);
   		cx2 = 349 + 50*cos(t);
   		cy2 = 50 + 50*sin(t);
   		stroke(224, 226, 3);
   		strokeWeight(3);
   		line(cx, cy, cx2, cy2);

   }
   noStroke();
   drawDuck(0);
   if (animate) 
   {
      moveDuck();
   }
}

// method to control starting the duck over again and 
// control animation on and off
function mousePressed() 
{
   loc = createVector(width*.9, height*.66);
   animate = !animate;
}

// code to draw the duck with animation parameters 
// neckR and wingR - other transforms align the pieces 
// to the correct pivot points Be very careful modifying 
// this code - the structure of the push and pops are 
// what builds the hierarchical relationships
function drawDuck() 
{
   noStroke();

   push();
      //move the entire duck
      translate(loc.x, loc.y);
      scale(2); //scale the entire duck

      fill(255, 116, 27);
      push();  //left leg
      	  translate(0, 10)
      	  rotate(llegR);
      	  ellipse(0, 0, 3, 24);
      	  push();
      	  	 translate(-4, 11); // left foot
      	  	 rotate(footR);
      	  	 ellipse(0, 0, 10, 3);
      	  pop();
      pop();
      push();
      	  translate(0, 10) //right leg
      	  rotate(rlegR);
      	  ellipse(0, 0, 3, 24);
      	  push();
      	  	 translate(-4, 10);  //right foot
      	  	 rotate(lfootR);
      	  	 ellipse(0, 0, 10, 3);
      	  pop();
      pop();

      //draw neck and head with possible animation transforms
      push();
      	 fill(255);
         translate(-16, 0); //move into pivot position
         rotate(neckR);  //rotate by neckR parameter
         ellipse(0, -10, 10, 18); //neck
         ellipse(0, -17, 14, 14); //head
         fill(0);
         ellipse(0, -19, 4, 4);  //eye
         fill(155, 111, 16); 
         triangle(-10, -18, -4, -21, -4, -18); //beak   -10, -18, -4, -21, -4, -15
         push();
         	translate(-4, -18);
         	rotate(beakR);
         	triangle(-6, 0, 0, 4, 0, -.5);
			/*translate(-4, -15);
         	rotate(beakR);
         	triangle(-6, -3, 0, 0, 0, -3.5); */
         pop();
      pop();

       // draw body 245, 226, 12
      fill(255);
      ellipse(0, 0, 40, 30); 

      //draw wing with possible animation transforms
      fill(227, 208, 66);
      push();
      	 fill(230);
         translate(-8, -5); //move into pivot position
         rotate(wingR); //animtion parameter to control wing flap
         ellipse(14, 0, 34, 20); //wing
      pop();

      //TODO - this is where you will add the code to animation the legs - follow
      //the examples for the wings and neck 

      push();
      	translate(0, -10);
      	ellipse();
      pop();

   pop();
}

// function to update all animation parameters - very 
// simple scripted animation
function moveDuck() 
{
   // update the ducks global location
   loc.add(dir);

   // find out how much the neck is rotated to decide which way to rotate
   // these constrain how much the neck moves up and down
   if (neckR < -PI/3) 
   {
      neckDown = false;
   } 
   if (neckR > PI/10) 
   {
      neckDown = true;
   }
   // depending on which way we need to rotate, do so
   if (neckDown == true) 
   {
      neckR -= PI/100;
   } 
   else 
   {
      neckR += PI/100;
   }

   // find out how much the wing is rotated to decide which way to rotate
   // these constrain how much the wing moves up and down
   if (wingR < -2*PI/5) 
   {
      wingDown = true;
   } 
   if (wingR > -PI/20) 
   {
      wingDown = false;
   }
   if (wingDown == false) 
   {
      wingR -= PI/100;
   } 
   else 
   {
      wingR += PI/100;
   }

   if (beakR < -2*PI/15) 
   {
      beakDown = true;
   } 
   if (beakR > -PI/100) 
   {
      beakDown = false;
   }
   if (beakDown == false) 
   {
      beakR -= PI/100;
   } 
   else 
   {
      beakR += PI/100;
   }

   if (llegR < -PI/5) 
   {
      leftLegDown = true;
   } 
   if (llegR > PI/5) 
   {
      leftLegDown = false;
   }
   if (leftLegDown) 
   {
   	  llegR +=PI/100;
   }
   else 
   {
   	  llegR -=PI/100;
   }



   // depending on which way we need to rotate, do so
   if (rlegR < -PI/5) 
   {
      rightLegDown = true;
   } 
   if (rlegR > PI/5) 
   {
      rightLegDown = false;
   }
   if (rightLegDown) 
   {
   	  rlegR +=PI/100;
   }
   else 
   {
   	  rlegR -=PI/100;
   }
  
  if (footR < -PI/7) 
   {
      footDown = true;
   } 
   if (footR > PI/6) 
   {
      footDown = false;
   }
   if (footDown) 
   {
   	  footR +=PI/100;
   }
   else 
   {
   	  footR -=PI/100;
   }


   if (lfootR < -PI/7) 
   {
      lfootDown = true;
   } 
   if (lfootR > PI/6) 
   {
      lfootDown = false;
   }
   
   if (lfootDown) 
   {
   	  lfootR +=PI/100;
   }
   else 
   {
   	  lfootR -=PI/100;
   }
  

}

