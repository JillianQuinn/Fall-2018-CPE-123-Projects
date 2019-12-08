var max_theta, b, moreB

function setup() 
{
   createCanvas(400, 400);
   max_theta = 0;
   background(0);
   moreB = true;
}
function draw() 
{
	//frameRate(10);

	noStroke();
    b=0;;
    for (var theta = 0; theta < max_theta; theta += PI/4500)
    {
    	var x = 200 + 80.5*cos(theta) - 80*cos(30*theta);
    	var y = 200 + 80.5*sin(theta) - 80*sin(30*theta);
    	ellipse(x, y, 10);
    	fill(0, 0, b);
	    if (b < 0 || b > 255) 
    	{
    		moreB = !moreB;
    	}
    	if (moreB)
    	{
    		b+=.1;
    	}
    	else
    	{
    		b-=.1;
    	}
	}

	 max_theta += PI/450;   	
   		
    
}
