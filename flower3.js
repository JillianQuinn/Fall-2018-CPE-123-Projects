function setup() 
{
   createCanvas(400, 400);
   background(0, 0, 150);
   drawFlower(200, 200);
}

// Play with this code to see what happens when you vary different things!
function drawFlower(center_x, center_y)
{
   var cx, cy, cx2, cy2, t;
   
   //draw the center of the sun
   fill(random(200,255), random(200,255), 0);
   noStroke();
   ellipse(center_x, center_y, 100, 100);

   //pick the flame color
   stroke(random(200,255), random(200,255), 0);
   strokeWeight(4);

   //draw each flame around the sun
   t=0;
   for (var i=0; i<13; i ++) {
      t = t + 2*PI/13;
      cx = center_x + 75* cos(t);
      cy = center_y + 75 * sin(t);
      cx2 = center_x + 150* cos(t);
      cy2 = center_y + 150 * sin(t);
      line(cx, cy, cx2, cy2);
   }
}

