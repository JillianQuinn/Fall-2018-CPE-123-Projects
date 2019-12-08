var xMount, yMount

function setup() 
{
   createCanvas(400, 400);
   xMount = 0;
   yMount = 0;
   
}
function draw() 
{ 
    drawBack();
    var mountColor;
    for(yMount=160; yMount < height-20; yMount+=25) {
		for (xMount = 5; xMount < width; xMount+=20) {
			mountColor = color(random(106, 176), random(170, 255), random(130, 255));
            drawMount(xMount, yMount, mountColor, random(1,2));
		}
	}
	drawHill();
    noLoop();
}

function drawBack()
{
	background(179, 201, 224);
	fill(236, 235, 116);
	ellipse(390, 10, 80);
	fill(216, 224, 224);

}
function drawHill() {
    fill(97, 81, 62);
	beginShape();
		curveVertex(-200, 300);
		curveVertex(0, 350);
		curveVertex(100, 320);
		curveVertex(200, 340);
		curveVertex(300, 320);
		curveVertex(400, 350);
		curveVertex(400, 400);
		curveVertex(0, 400);
		curveVertex(-200, 300);
	endShape();

	
}
function drawMount(x, y, col, sc) {
	push();
	   translate(x,y);
	   scale(sc);
	   fill(col);
	  strokeWeight(.7);
	   triangle(-20, 0, 0, -50, 20, 0);
	   noStroke();
	   fill(250);
	   triangle(-3, -42, 0, -50, 3, -42);
	   noFill();
	pop();
}
