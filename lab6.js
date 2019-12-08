var horiz, sun

function setup() 
{
   createCanvas(400, 400);
   background(0);
   noStroke();
   noLoop();
}
function draw() 
{
  fill(255);

  for (var y = 0; y < height; y+=5)
  {
  	for (var x = 0; x < width+10; x+=5)
  	{
  		if(imp_horizon(x, y, 0, 300, width, 300) > 0)
  		{
  				fill(0, 0, random(90, 200));
  		}
  		else
  		{
  			if (imp_sun(x, y, width/2, 250, 50) + random(-8, 8) > 0)
  	 		{
  				fill(random(200, 255)+.1*distance(x, y, width/2, 270), 300-distance(x, y, width/2, 270), 0);
  	 		}
  			else{
  					fill(255, 250, 163);
  			}
  			
  		}
  		ellipse(x+random(-2,2), y+random(-4,4), 14);
    } 
  } 
  for (var y2 = 300; y2 < height; y2+=18)
  {
  	for (var x2 = 0; x2 < width+10; x2+=18)
  	{
  		if (imp_tri1(x2, y2, 70, 400, 400, 0) > 0 && imp_tri2(x2, y2, 0, 0, 330, 400) > 0)
  		{
  			fill(255, 200, 0);
  			ellipse(x2+random(-6,6), y2+random(-6,6), 10, 3);
  		}
  	}
  }

}

function imp_horizon(x, y, x0, y0, x1, y1) 
{
	return (y0-y1)*x + (x1-x0)*y - x1*y0;
}
function imp_tri1(x, y, x0, y0, x1, y1) 
{
	return (y0-y1)*x + (x1-x0)*y - x1*y0;
}
function imp_tri2(x, y, x0, y0, x1, y1) 
{
	return (y0-y1)*x + (x1-x0)*y - x1*y0;
}
function imp_tri3(x, y, x0, y0, x1, y1) 
{
	return (y0-y1)*x + (x1-x0)*y - x1*y0;
}
function imp_sun(x, y, cx, cy, r) 
{
	return (x-cx)*(x-cx) + (y-cy)*(y-cy) - r*r;
}
function distance(x0, y0, x1, y1)
{
	return sqrt(pow(x0-x1, 2) + pow(y0-y1,2));
}
