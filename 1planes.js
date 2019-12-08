var s3liney = 600;
var s3r= 0;
var airplanePoint = [];
var vx = [];



function setup()
{
    createCanvas(500, 600);
    for (var i = 0; i < 7; i++)
    {

        airplanePoint[i] = createVector(random(600, 800),random(0,300));
    
        vx[i] = random(-4,-2);
    }

}

function draw()
{
     while(s3liney > 0)
     {
        s3r+= .37;
        s3liney -= 1;
        strokeWeight(2);
        stroke(s3r, 20, 200);
        line(0, s3liney, 600, s3liney);
    
    }
    s3liney = 600;
    s3r= 0;
    makeStars();
    update();    

}

function makeStars() //makes stars
{    
    push();
        translate(0,0);
        scale(0.7);

        stroke(255);
        strokeWeight(5);

        point(600 ,200);
        point(500 ,305);
        point(300 ,100);
        point(555 ,70);
        point(480 ,220);
        point(400 ,125);
        point(150 ,300);
        point(70 , 225);
        point(165 ,160);
        point(30 ,30);
        point(680 ,340);
        point(50 ,375);
        point(340 ,40);
        point(670 ,140);

    pop();


}


function airplanes(x,y)
{
    noStroke();
    fill(255);
    push();
    scale(2);
    translate(x,y);
    beginShape();
    curveVertex(0,12);
    curveVertex(1,11);
    curveVertex(2,10);
    curveVertex(5,8.2);
    curveVertex(8,8);
    curveVertex(12,8);
    curveVertex(16,4);
    curveVertex(18,2);
    curveVertex(23,2);
    curveVertex(20,8);
    curveVertex(26,8);
    curveVertex(28,8);
    curveVertex(30,6);
    curveVertex(32,2);
    curveVertex(35,2);
    curveVertex(33.8,8);
    curveVertex(34.7,8.8);
    curveVertex(35.3,9.6);
    curveVertex(34.7,10.4);
    curveVertex(33.8,11.2);
    curveVertex(35,14);
    curveVertex(33,14);
    curveVertex(30,12);
    curveVertex(27,12.5);
    curveVertex(24,13);
    curveVertex(22,14);
    curveVertex(29,26);
    curveVertex(24,26);
    curveVertex(10,14);
    curveVertex(9,13.75);
    curveVertex(8,13.5);
    curveVertex(4,13.7);
    curveVertex(1,12.5);
    curveVertex(0,12);
    endShape();

    noFill();
    strokeWeight(.2);
    stroke(0);
    ellipse(12,11,1);
    ellipse(14,11,1);
    ellipse(16,11,1);
    ellipse(18,11,1);
    ellipse(20,11,1);

    pop();

}

function updatPlane()
{

    if (airplanePoint.length < 7) {
        airplanePoint.push(createVector(random(600,800),random(0,300)));
        vx.push(random(-4,-2));

    }

    for (var i = airplanePoint.length - 1; i > 0; i--)
    {
        fill(230);
        airplanes(airplanePoint[i].x, airplanePoint[i].y);
        airplanePoint[i].x += vx[i];
        if (airplanePoint[i].x + 35.3 <= 0)
        {
            airplanePoint.splice(i,1);
            vx.splice(i,1);
        }
    }    
}

