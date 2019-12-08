var max_theta;
var max_theta2;
var max_theta3;
var x1, y1;
var count = 0;
var count1 = 0;
var xpoint, ypoint;
var count;
var num_lines;
var angle;
function setup()
{
    createCanvas(400,400);
    background(120);
    count = 0;
    max_theta = 0;
    max_theta2 = 0;
    max_theta3 = 0;
    num_lines = 36;
    angle = PI/2;
    noStroke();
}
function draw()
{   
    drawSun();
    drawStemR(200,300);
    drawStemL(310,300);
    drawStemR(400,300);
    drawStemL(100,300);
    drawStemL(30, 300);
    max_theta += PI/400;

      if(count < 10)
    {
          drawFlower(random(20, 380), random(200, 350), color(random(210, 255), random(210, 255), random(210, 255)));
          count++;
    }      

//    drawBigFlower(200, 200);
}
function drawSun()
{
  var x, y, theta,
   red = 255;
   green = 236;
   for (theta = 0; theta < max_theta3; theta += PI/num_lines)
   {
      x1 = 320 + 50 * cos(theta);
      y1 = 60 + 50 * sin(theta);
      x2 = 320 + 50 * cos(theta+angle);
      y2 = 60 + 50 * sin(theta+angle);

      stroke(red, green, 149);
      line(x1, y1, x2, y2);  

   }
   max_theta3 += PI/40;
 
}
function drawStemR(posx, posy)
{    
    push();
    translate(posx,posy);

    for (var theta = 0; theta <max_theta; theta += PI/4500)
    {
        fill(50,80,0);
        stroke(50,85,0);
        x1 = 100*cos(PI*theta)*cos(5*theta*PI);
        y1 = -100*sin(2*theta*PI)*sin(8*PI*theta);
        ellipse(x1,y1,3);
    }
    pop();
}

function drawStemL(posx, posy)
{    
    push();
    translate(posx,posy);

    for (var theta = 0; theta <max_theta; theta += PI/4500)
    {
        fill(50,80,0);
        stroke(50,85,0);
        x1 = -100*cos(PI*theta)*cos(5*theta*PI);
        y1 = -100*sin(2*theta*PI)*sin(8*PI*theta);
        ellipse(x1,y1,3);
    }
    pop();
}

function drawFlower(locx, locy, col)
{
 for (var theta = 0; theta < max_theta2; theta += PI/1000)
 {
    var x = locx -10*sin(5*PI*theta)*sin(4*PI*theta);
    var y = locy -10*cos(8*PI*theta)*cos(8*PI*theta);
    stroke(col);
    ellipse(x, y, .1);
  }
  max_theta2 += PI;
}

/*function drawBigFlower(locx, locy)
{
    for (var theta = 0; theta < max_theta2; theta += PI/1000)
     {
         stroke(225);
         strokeWeight(8);
        var x3 = locx -30*sin(5*PI*theta)*sin(4*PI*theta);
        var y3 = locy +30*cos(8*PI*theta)*cos(8*PI*theta);
        ellipse(x3, y3, .1);
    }
      max_theta2 += PI;
      strokeWeight(1);
}*/
