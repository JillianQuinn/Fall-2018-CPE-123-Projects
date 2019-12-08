var tailR = 0;
var tailDown = false;
var s1liney = 0;
var scene1g = 20;


function setup()
{
    createCanvas(500,600);
}

function draw()
{
push();
translate(0, 200);
    noStroke();
    while(s1liney <600)
    {
        scene1g += .4;
        s1liney += 1;
        strokeWeiscene1ght(2);
        stroke(0, scene1g, 200);
        line(0, s1liney, width, s1liney);
    
    }
    s1liney = 0;
    scene1g = 0;
    
    strokeWeiscene1ght(.5);
    drawFish1(250,300);
    drawFish2(90,140);
    drawFish1(430,540);
    drawFish2(190,400);
    moveFish();
pop();

}

function distance (x0, y0, x1, y1)
{
    return sqrt(pow(x0-x1, 2) + pow(y0-y1, 2));
}

function drawFish1(x,y)
{
    push();
        stroke(0);
        translate(x,y);
        scale(1.5);

        push();
            rotate(tailR);
            fill(0,110,60);
            ellipse(20,0,25,15);        
            fill(0,200,100);
            ellipse(20,0,20,7);
        pop();

        fill(0,110,60);
        ellipse(0,0,25,20);        
        fill(200);
        ellipse(-5,-2,7);
        fill(0);
        ellipse(-5,-2,2);

    pop();
    noStroke();

}

function drawFish2(x,y)
{
    push();
        stroke(0);
        translate(x,y);
        scale(1.5);

        push();
            rotate(tailR);
            fill(0,110,60);
            ellipse(-20,0,25,15);        
            fill(0,200,100);
            ellipse(-20,0,20,7);
        pop();

        fill(0,110,60);
        ellipse(0,0,25,20);        
        fill(200);
        ellipse(5,-2,7);
        fill(0);
        ellipse(5,-2,2);

    pop();
    noStroke();

}

function moveFish()
{
    if (tailR < -PI/20) 
   {
      tailDown = false;
   } 
   if (tailR > PI/20) 
   {
      tailDown = true;
   }

   // dependinscene1g on which way we need to rotate, do so
   if (tailDown == true) 
   {
      tailR -= PI/300;
   } 
   else 
   {
      tailR += PI/300;
   }
}


