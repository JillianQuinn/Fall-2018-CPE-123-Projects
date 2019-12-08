var liney = 600;
var r = 0;
var x = 0;
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
     while(liney > 0)
     {
        r += .37;
        liney -= 1;
        strokeWeight(2);
        stroke(r, 20, 200);
        line(0, liney, 600, liney);
    
    }
    liney = 600;
    r = 0;
    update();    

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

function update()
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
