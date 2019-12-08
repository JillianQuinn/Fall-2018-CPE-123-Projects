var wingR;
var wingDown = false;
var rwingR;
var rwingDown = false;
var sc;
var grassX = [];
var grassY = [];
var grassC = [];
var magic;
var tailR;
var tailDown = true;
var counter;

function setup()
{
    createCanvas(400, 400);    
    
    noStroke();
    counter=0;
    counter2=0;
    loc = createVector(width*.9, height*.45);
    loc2 = createVector(width*.625, height*.75);

    dir = createVector(-1, 0);
    dir2 = createVector(1, 2);
    wingR = 0;
    rwingR = 0;
    sc = .5;
    tailR = 0;
    
    magic = new PSys(250, height*.45, 100);

   
    for (var x=0; x < 9234023; x+=5)
    {
        grassX.push(random(-2,2));
        grassY.push(random(-15, 15));
        grassC.push(random(50));

    }
}

function draw()
{   
    //draw grass
    background(0, 135, 188);

    for (var y=280; y < height + 1000; y+= 1)
    {
        for (var x=0; x < width + 10; x+=10)
        {   
        y++;     
            fill(0, 80 + grassC[y], 60);
            ellipse(x + grassX[x], y + grassY[y], 18, 70);

        }
    }


    drawBackground();
    if(counter<750)
    {
        drawElephant();
    }

    if(counter > 80 && counter< 300)
    {
    drawBubbles();
    }

    if( counter > 370 && counter < 500)
    {
      drawBubbles2();
    }
    if(counter> 500 && counter < 750)
    {
        drawBubbles3();
    }
    drawButterfly();
    if(counter >=750)
    {
        drawButterfly2();
        dir = createVector(-1, -1);
        dir2 = createVector(-1, -1);
        loc2.add(dir2);
    }
    loc.add(dir);
   


    if(loc.x < -40) //change butterfly direction
    {
    dir = createVector(1);
    }
    if (loc.x == 250 && dir.x == 1)
    {
    dir = createVector(0);
     
    }
    if (dir.x == 0)
    {
    magic.run();
    }


    if (wingR < PI/20)
    {
        wingDown = true;
    }
        if (wingR > PI/10)
    {
        wingDown = false;
    }
        if (wingDown == true)
        {
        wingR += PI/300;
        sc += .01;
    }
    else
    {
        wingR -= PI/300;
        sc -= .01;
    }
    if (rwingR < PI/20)
    {
        rwingDown = false;
    }
    if (rwingR > PI/10)
    {
        rwingDown = true;
    }
    if (rwingDown == true)
    {
        rwingR -= PI/300;
        sc -= .01;
    }
    else
    {
        rwingR += PI/300;
        sc += .01;
    }

    if (tailR < -PI/10)
   {
    tailDown = false;
   }
   if (tailR > PI/10)
   {
    tailDown = true;
   }

   if (tailDown == true)
   {
    tailR -= PI/200;
   }
   else
   {
    tailR += PI/200;
   }
   counter++;
}

function drawBackground()
{
    // draw tree
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
}

function drawBubbles()
{
    fill(200);
    ellipse(280, 75, 200, 100);
    ellipse(250, 170, 30, 30);
    ellipse(270, 230, 20, 20);
    ellipse(260, 290, 15, 15);
    textSize(17);
    fill(0);
    text("I wish I was a butterfly...", 190, 75);
}

function drawBubbles2()
{
    fill(200);
    ellipse(75, 70, 200, 80);
    ellipse(50, 120, 30, 30);
    ellipse(25, 150, 20, 20);
    ellipse(0, 170, 15, 15);
    textSize(17);
    fill(0);
    text("you can be anything", 10, 75);
}
function drawBubbles3()
{
    fill(200);
    ellipse(280, 75, 200, 100);
    ellipse(250, 170, 30, 30);
    ellipse(270, 230, 20, 20);
    ellipse(260, 290, 15, 15);
    textSize(17);
    fill(0);
    text("REALLY?", 240, 75);
}
function drawElephant()
{
    //elephant body
    fill(158, 123, 188);
    beginShape();
    push();
    translate(250, 300);
    curveVertex(25, 65);
    curveVertex(20, 72);
    curveVertex(13, 74);
    curveVertex(8, 73);
    curveVertex(0, 65);
    curveVertex(7, 60);
    curveVertex(10, 67);
    curveVertex(14, 67);
    curveVertex(15, 60);
    curveVertex(12, 50);
    curveVertex(8, 37);
    curveVertex(7, 25);
    curveVertex(10, 16);
    curveVertex(15, 10);
    curveVertex(25, 3);
    curveVertex(35, 5);
    curveVertex(40, 2);
    curveVertex(46, 3);
    curveVertex(50, 5);
    curveVertex(60, 2);
    curveVertex(80, 6);
    curveVertex(95, 25);
    curveVertex(96, 40);
    curveVertex(90, 50);
    curveVertex(87, 60);
    curveVertex(85, 72);
    curveVertex(80, 75);
    curveVertex(70, 75);
    curveVertex(67, 73);
    curveVertex(66, 61);
    curveVertex(61, 61);
    curveVertex(60, 69);
    curveVertex(56, 75);
    curveVertex(45, 73);
    curveVertex(40, 70);
    curveVertex(40, 55);
    curveVertex(32, 48);
    curveVertex(30, 60);
    curveVertex(25, 68);
    curveVertex(20, 72);
    curveVertex(20, 70);
    endShape();

    //elephant tail
    push();
        translate(94, 40);
        rotate(tailR);
        beginShape();
        curveVertex(0,0);
        curveVertex(0,0);
        curveVertex(1, -5);
        curveVertex(7, 0);
        curveVertex(14, 2);
        curveVertex(10, 3);
        curveVertex(13, 5);
        curveVertex(6, 3);
        curveVertex(0, -2);
        curveVertex(0, -2);
        endShape();
    pop();

    //elephant eye
    fill(0);
    noStroke();
    ellipse(17, 27, 5, 7);
    fill(255);
    ellipse(16, 26, 3, 3);

    //elephant tear
    fill(57, 0, 188);
    beginShape();
    curveVertex(17, 32);
    curveVertex(19, 35);
    curveVertex(18, 38);
    curveVertex(16, 38);
    curveVertex(15, 35);
    curveVertex(17, 32);
    curveVertex(17, 32);
    endShape();

    //elephant ear
    stroke(0);
    noFill();
    beginShape();
    curveVertex(32, 11);
    curveVertex(32, 11);
    curveVertex(40, 2);
    curveVertex(49, 5);
    curveVertex(62, 25);
    curveVertex(62, 35);
    curveVertex(55, 39);
    curveVertex(50, 38);
    curveVertex(39, 30);
    curveVertex(39, 30);
    endShape();
    pop();
}

function drawButterfly()
{
  push();
    translate(loc.x, loc.y);
    
    rotate(atan2(-dir.y, -dir.x) + PI/2);
    scale(.5);
    fill(200, 0, 30);
    noStroke();

    push();
    rotate(rwingDown);
        scale(sc);
        triangle(0, 0, -30, 13, -20, 40);
        fill(250, 0, 0);
        ellipse(-28, 27, 30);
    pop();

    push();
    fill(200, 0, 30);
        rotate(-PI/4)
        rotate(wingDown);
        scale(sc);
        triangle(0, 0, 30, 13, 20, 40);
        fill(250, 0, 0);
        ellipse(28, 27, 30);
    pop();


    push();
        fill(200, 0, 30);
        //rotate(rwingDown);
        scale(sc);
        triangle(0, 0, -20, 0, -15, -20);
        ellipse(-20, -10, 20);
    pop();

    push();
        //rotate(-PI/4)
        //rotate(wingDown);
        scale(sc);
        triangle(0, 0, 20, 0, 15, -20);
        ellipse(20, -10, 20);
    pop();

    noFill();
    stroke(130, 30, 20);
    strokeWeight(2);
    beginShape();
    curveVertex(0, 0);
    curveVertex(0, 0);
    curveVertex(-3, 15);
    curveVertex(-20, 50);
    curveVertex(-115, 55);
    endShape();

    beginShape();
    curveVertex(0, 0);
    curveVertex(0, 0);
    curveVertex(3, 15);
    curveVertex(20, 50);
    curveVertex(115, 55);
    endShape();
    strokeWeight(8);
    point(-20, 50);
    point(20, 50);
  pop();
}

function drawButterfly2()
{
    push();
    translate(loc2.x, loc2.y);
    
    rotate(atan2(-dir2.y, -dir2.x) + PI/2);
    scale(.5);
    fill(158, 123, 188);
    noStroke();

    push();
    rotate(rwingDown);
        scale(sc);
        triangle(0, 0, -30, 13, -20, 40);
        fill(107, 83, 139);
        ellipse(-28, 27, 30);
    pop();

    push();
    fill(158, 123, 188);
        rotate(-PI/4)
        rotate(wingDown);
        scale(sc);
        triangle(0, 0, 30, 13, 20, 40);
        fill(107, 83, 139);
        ellipse(28, 27, 30);
    pop();


    push();
        fill(158, 123, 188);
        //rotate(rwingDown);
        scale(sc);
        triangle(0, 0, -20, 0, -15, -20);
        ellipse(-20, -10, 20);
    pop();

    push();
        //rotate(-PI/4)
        //rotate(wingDown);
        scale(sc);
        triangle(0, 0, 20, 0, 15, -20);
        ellipse(20, -10, 20);
    pop();

    noFill();
    stroke(158, 123, 188);
    strokeWeight(2);
    beginShape();
    curveVertex(0, 0);
    curveVertex(0, 0);
    curveVertex(-3, 15);
    curveVertex(-20, 50);
    curveVertex(-115, 55);
    endShape();

    beginShape();
    curveVertex(0, 0);
    curveVertex(0, 0);
    curveVertex(3, 15);
    curveVertex(20, 50);
    curveVertex(115, 55);
    endShape();
    strokeWeight(8);
    point(-20, 50);
    point(20, 50);
  pop();
}
function Particle(x , y)
{

   this.accelY = 0.05; //gravity
   this.velX = random(-1, 1);
   this.velY = random(.5, 1.3);

   this.pcolorR = random(200, 220);
   this.locX = x;
   this.locY = y;
   this.r = 8.0;
   this.life = 100;
 
   this.updateP = function()
   {
    this.velY += this.accelY;
    this.locX += this.velX;
    this.locY += this.velY;
    this.life -= 1.0;
   };
 
   this.renderP = function()
   {
    noStroke();
    push();
        fill(this.pcolorR, 175, 55);
        translate(this.locX, this.locY);
        ellipse(0, 0, this.r, this.r/2);
    pop();
   };
}

function PSys(sX, sY, num)
{
   this.particles = [];
   for (var i=0; i < num; i++)
   {
    this.particles.push(new Particle(sX, sY));
   }
 
   this.run = function()
   {
    for (var i=0; i < this.particles.length; i++)
    {
        this.particles[i].updateP();
        this.particles[i].renderP();
    }
   }
}



