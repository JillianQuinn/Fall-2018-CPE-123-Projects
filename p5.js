var max_theta, num_lines, angle, red_up;

function setup()
{
   createCanvas(400, 400);
   frameRate(6);

   max_theta = 0;
   num_lines = 36;
   angle = PI/2;
   red_up = false;
}

function draw()
{
   var x, y, theta, red, blue;

   background(0);
   red = 255;
   blue = 0;
   for (theta = 0; theta < max_theta; theta += 2*PI/num_lines)
   {
      x1 = 200 + 100 * cos(theta);
      y1 = 200 + 100 * sin(theta);
      x2 = 200 + 100 * cos(theta+angle);
      y2 = 200 + 100 * sin(theta+angle);

      stroke(red, 0, blue);
      line(x1, y1, x2, y2);  

   }

   max_theta += 2*PI/num_lines;
}