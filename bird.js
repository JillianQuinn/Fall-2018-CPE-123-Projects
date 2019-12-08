var scene2X = scene2Y = 0;

function setup() 
{
   createCanvas(500, 600);

   

}


function draw() 
{    

    push();
    translate(scene2X,scene2Y);
    scale(0.7);
           makeBackground(); //10 rectanlges
       

           makeBackLeg(); //2 quads, 1 arc, 1 arc for talon
        makeBody(); //2 beziers and a quad
        makeBeak(); //a shape from 2 bezierVertexes
        makeHead(); //a shape from 3 bezierVertexes
           makeEye(); //an arc and a point
        makeWing(); //a bezier
        makeTail(); //20 lines
        makeStump(); //3 quads and a triangle
        makeFrontLeg(); //2 quads and 2 arcs, 2 lines for toes, 2 arc joints for talons
        makeTalons(); //3 shapes all made from 2 bezierVertexes, claw part of toe.
    pop();
    /* Totals:
    
    bezierVertex Shapes: 6 (13 bezierVertexes)
    beziers: 3
    arcs: 7
    triangles: 1
    rectangles: 10
    quads: 6
    lines: 22

    */

   
}



function makeBackground() //creates background from 10 rectangles
{    
    strokeWeight(5);
    

    var b2 = 70;
    var b3 = 20;

    for (var i=0; i < 40; i++) { //shading for green rectangles

        fill(0,b2,b3);
        stroke(0,b2,b3);

        rect(0,720-((i+1)*7.2),720,7.2);

        b2 += 2;
        b3 += 1;

    }

    b2 = 60;
    b3 = 120;

    for (var i=0; i < 60; i++) { //shading for blue rectangles

        fill(0,b2,b3);
        stroke(0,b2,b3);

        rect(0,0+(i*7.2),720,7.2);

        b2 += 1;
        b3 += 2;

    }


}



function makeStump() //makes the stump which the birds sits on.
{
    strokeWeight(5);

    fill(60,30,20);
    stroke(60,30,20);

    quad(490 ,720,490 ,670,375 ,670,375 ,720);
    triangle(420 ,670,375 ,630,375 ,670);
    quad(375 ,720,375 ,580,325 ,560,325 ,720);
    quad(325 ,720,325 ,600,275 ,560,225 ,720);



}

function makeBackLeg() //makes back leg and talon joint
{
    strokeWeight(4);

    fill(0);
    stroke(0);
    quad(415 ,490,410 ,487,410 ,550,415 ,550); //upper leg
    arc(413 ,550,10,10,0,2*PI); //knee joint forward leg
    quad(410 ,550,410 ,550,352 ,580,355 ,580); //lower leg

    arc(325 ,590,3,3,0,2*PI); //this is part of the talon from the stump
                             //it was moved here to be rendered in proper order

}

function makeFrontLeg() //makes front leg
{
    strokeWeight(5);

    fill(0);
    stroke(0);
    quad(485 ,490,480 ,487,480 ,550,485 ,550); //upper leg
    arc(483 ,550,10,10,0,2*PI); //knee joint forward leg
    quad(480 ,550,480 ,550,402 ,580,405 ,580); //lower leg

    arc(395 ,580,5,5,0,2*PI);//ankle joint thing

    strokeWeight(4);
    line(395 ,577,360 ,570); //toe to upper talon
    arc(360 ,570,3,3,0,2*PI); //joint for upper talon
    line(395 ,578,378 ,600);
    line(395 ,580,390 ,610); //toe to talon below
    arc(390 ,610,3,3,0,2*PI); //joint for lowest talon



    stroke(190,140,0);
    fill(190,140,0);

    quad(490 ,490,475 ,485,460 ,465,505 ,475); //leg joint on body

}

function makeTalons() //creates talons
{
    stroke(0);
    fill(0);
    strokeWeight(2);

    beginShape(); //upper talon
    vertex(360 ,568);
    bezierVertex(355 ,548,355 ,548,330 ,558);
    bezierVertex(353 ,552,353 ,552,360 ,572);
    endShape();

    beginShape(); //lower talon
    vertex(393 ,610);
    bezierVertex(400 ,620,400 ,620,380 ,630);
    bezierVertex(395 ,620,395 ,620,387 ,610);
    endShape();

    beginShape(); //talon from behind stump
    vertex(322 ,590);
    bezierVertex(312 ,585,312 ,585,303 ,605);
    bezierVertex(312 ,591,312 ,591,322 ,590);
    endShape();

    
}

function makeTail() //creates a tail for the bird
{
    strokeWeight(5);    

    let y1 = 480;
    let y2 = 500;

    let f1 = 90;
    let f2 = 60;
    let f3 = 50;

    

    for (var i=0; i<22;i++) { //tail is made out of lines

        stroke(f1,f2,f3); //the stroke is getting lighter on the underside

        line(630 ,y1,760 ,y2);

        f1 += 4;
        f2 += 2;
        f3 += 1;

        y1 ++;
        y2 += 2;

    }


}

function makeEye() //makes the eye of the bird
{
    strokeWeight(5);

    fill(0);
    stroke(0);
    arc(310 ,170,20,20,0,2*PI); //eyeball
    stroke(255);
    point(315 ,165); //white
}

function makeHead() //makes head and neck of bird.
{
    strokeWeight(5);

    fill(210, 180, 0);
    stroke(210, 180, 0);

    beginShape();
    vertex(275 ,278);
    bezierVertex(255 ,230,255 ,230,200 ,205);
    bezierVertex(250 ,185,250 ,185,251 ,129);
    bezierVertex(390 ,130,390 ,130,425 ,278);
    endShape();
}

function makeBody() //body made up of a quad, a bezier and
{
    strokeWeight(5);

    stroke(90,60,50);
    fill(90,60,50);
    bezier(570 ,550,-20 ,200,530 ,200,560 ,550); //back wing


    fill(210, 180, 0);
    stroke(210, 180, 0);

    bezier(298 ,278,200 ,248,220 ,500,520 ,500); //belly of the bird
    quad(500 ,500,278 ,278,425 ,278,650 ,500); //midsection behind wing
}

function makeWing() // bezier that makes the wing on the side of the body
{
    strokeWeight(5);

    stroke(90,60,50);
    fill(90,60,50);
    bezier(640 ,550,50 ,200,600 ,200,630 ,550);

}

function makeBeak() //bezier vertex that makes the beak of the bird
{
    strokeWeight(5);

    stroke(0);
    fill(0);
    beginShape();
    vertex(140 ,70);
    bezierVertex(400 ,170,200 ,250,70 ,170);
    bezierVertex(190 ,240,350 ,170,140 ,70);
    endShape();
}

