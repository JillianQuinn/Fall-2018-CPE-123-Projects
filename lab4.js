var xLeaf, yLeaf

function setup() 
{
   createCanvas(400, 400);
   xLeaf = 0;
   yLeaf = 0;
   
}
function draw() 
{
    drawBack();
    
    var leafColor;
    for(var i=0; i < 2000; i++) {
		leafColor = color(random(30, 250), random(30, 160), random(30, 60));
        drawLeaf(random(0, width), random(0, height), leafColor, random(.2, 3), random(0, 2*PI));
		
	}
    noLoop();
    
}
function drawBack()
{
	background(25, 168, 34);
	
}
function drawLeaf(x, y, col, sc, rot) {
	push();
	   translate(x,y);
	   scale(sc);
	   rotate(rot);
	   fill(col);
	   noStroke();
	   beginShape();
	   	curveVertex(0, 0);
	   	curveVertex(10, -2);
	   	curveVertex(7, 2);
	   	curveVertex(14, 5);
	   	curveVertex(11, 7);
	   	curveVertex(12, 15);
	   	curveVertex(4, 10);
	   	curveVertex(6, 16);
	   	curveVertex(3, 14);
	   	curveVertex(0, 20);
	   	curveVertex(-3, 14);
	   	curveVertex(-6, 16);
	   	curveVertex(-4, 10);
	   	curveVertex(-12, 15);
	   	curveVertex(-11, 7);
	   	curveVertex(-14, 5);
	   	curveVertex(-7, 2);
	   	curveVertex(-10, -2);
	   	curveVertex(0, 0);
	   endShape();
	   rect(0, -10, 1, 10);

	pop();
}
