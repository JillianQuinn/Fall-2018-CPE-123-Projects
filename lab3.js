var x, y, x2, y2, x3, y3, x4, y4, x5, y5, x6, y6, x7, y7, moveShard

function setup() 
{
   createCanvas(400, 500);
   x = 1;
   y = 1;
   x2 = 0;
   y2 = 0;
   x3 = 0;
   y3 = 0;
   x4 = 0;
   y4 = 0;
   x5 = 0;
   y5 = 0;
   x6 = 0;
   y6 = 0;
   x7 = 0;
   y7 = 0;
   moveShard = false;
}
function draw() 
{
	frameRate(60);
    drawBack();
    
    if (moveShard == true)
    {
    	drawShatter();
    	drawTreeShard(x, y); 
    	drawShard2(x2, y2);
    	drawShard3(x3, y3);
    	drawShard4(x4, y4);
    	drawShard5(x5, y5);
    	drawShard6(x6, y6);
    	drawShard7(x7, y7);
    	y+=1;
    	x+=1;
    	y2+=1.9;
    	x2-=2;
    	y3+=1.9;
    	x3-=.5;
    	y4+=1.9;
    	x4+=.8;
    	y5+=.4;
    	x5-=.6;
    	y6+=1.8;
    	x6-=.1;
    	y7+=1.4;
    	x7+=.3;
    	if(y > 123) {
    		moveShard == false;
    		noLoop();
    	}
    }
}
function mousePressed() {
 	if (mouseX > 70 && mouseX < 330 && mouseY > 140 && mouseY < 320) {
 		 moveShard = true;
 	}
 }
function drawTreeShard(x, y) {
	push();
		translate(x, y);
		fill(184, 195, 223);
		stroke(200);
		strokeWeight(2);
		triangle(120, 150, 180, 240, 120, 240);
		fill(34, 77, 83);
		arc(170, 210, 50, 60, PI/2.5, 4*PI/3.3); //oval tree
		noStroke();
		fill(68, 74, 96);
		rect(140, 210, 2, 24); //stump
		fill(38, 101, 116);
		ellipse(140, 210, 30); //tree
		fill(61, 108, 98);
		arc(150, 240, 60, 20, PI, 0); //ground
		fill(190, 197, 226);
		pop();
	}
function drawShard2(x, y) //small green 
{
		push();
			translate (230, 146);
			translate(x2,y2);
			fill(184, 195, 223);
			stroke(200);
			strokeWeight(2);
			triangle(50, 123, 30, 17, 70, 55);
			fill(61, 108, 98);
			noStroke();
			arc(49, 123, 60, 68, 8.65*PI/6, 9.5*PI/6);
		pop();
	}
function drawShard3(x, y){ //big green
	push();
		translate(x, y);
		fill(184, 195, 223);
		stroke(200);
		strokeWeight(2);
		triangle(280, 269, 190, 290, 260, 163);
		noStroke();
		fill(61, 108, 98);
		quad(190, 290, 280, 269, 275, 239, 225, 230);
	pop();
}
function drawShard4 (x, y) {
	push();
		translate(x, y);
		fill(184, 195, 223);
		stroke(200);
		strokeWeight(2);
		triangle(190, 290, 140, 160, 260, 163);
		noStroke();
	    fill(34, 77, 83);
		arc(170, 210, 50, 60, 4*PI/3.3, PI/2.5,); //oval tree
		quad(170, 210, 180, 240, 167, 230, 151, 190);
		fill(61, 108, 98);
	    triangle(190, 290, 220, 230, 167, 230);
	pop();
}
function drawShard5 (x, y) {
	push();
		translate(x, y);
		fill(61, 108, 98);
		stroke(200);
		strokeWeight(1.5);
		triangle(135, 275, 165, 310, 190, 275);
		fill(106, 111, 70);
		noStroke();
		arc(140, 280, 90, 5, 7*PI/4, PI/2);
		fill(93, 82, 50);
		ellipse(165, 300, 10, 7);
	pop();
}
function drawShard6 (x, y) {
	push();
		translate(x, y);
		fill(61, 108, 98);
		stroke(200);
		strokeWeight(1);
		quad(82, 240, 100, 280, 160, 280, 140, 260);

	pop();
}
function drawShard7 (x, y) {
	push();
		translate(x, y);
		fill(184, 195, 223);
		stroke(200);
		strokeWeight(2);
		triangle(120, 150, 140, 160, 120, 190);

	push();
}
function drawShatter() {
	beginShape();
 		noFill();
 		stroke(200);
 		strokeWeight(2);
 		vertex(135, 280);
 		vertex(165, 310);
 		vertex(190, 290);
 		vertex(200, 280);
 		vertex(280, 270);
 		vertex(300, 200);
 		vertex(260, 163);
 		vertex(230, 146);
 		vertex(140, 160);
 		vertex(120, 145);
 		vertex(110, 160);
 		vertex(100, 200);
 		vertex(80, 240);
 		vertex(100, 280);
 		vertex(135, 280);
 	endShape();
 		noStroke();
}
function drawBack()
{
	noStroke();
	//window scene
	fill(184, 195, 223);
	rect(0, 140, width, 180);
	fill(68, 74, 96); //main tree
	rect(140, 210, 2, 24);
	fill(34, 77, 83);
	ellipse(170, 210, 50, 60);
	fill(38, 101, 116);
	ellipse(140, 210, 30);
	fill(61, 108, 98);
	ellipse(200, 300, width, 140);
	fill(106, 111, 70);
	ellipse(140, 280, 100, 5);
	fill(93, 82, 50);
	ellipse(250, 300, 190, 7);

	fill(68, 74, 40);
	rect(0, 470, width, 30);
	fill(85, 70, 27);
	rect(0, 440, width, 35);
	fill(72, 91, 72);
	rect(0, 370, width, 70);
	fill(0);
	rect(0, 363, width, 7);
	fill(28, 37, 36);
	rect(0, 340, width, 23);
	fill(108, 96, 72);
	rect(0, 325, width, 15);
	fill(161, 158, 143);
	rect(0, 320, width, 5);
	fill(80, 79, 61);
	rect(0, 120, width, 22);
	fill(39, 44, 40);
	rect(0, 0, width, 30);
	fill(118, 132, 115);
	ellipse(200, 50, 320, 80);
	fill(80, 79, 61);
	ellipse(200, 60, 320, 80);
	fill(107, 154, 206);
	ellipse(200, 78, 320, 80);
	rect(40, 60, 320, 60);
	fill(159, 129, 57);
	rect(0, 15, width, 5);
	
	fill(112, 67, 46); //left curtain
	rect(0, 20, 65, 390);
	fill(46, 42, 33);
	ellipse(40, 216, 8, 390);
	ellipse(20, 216, 6, 390);
	ellipse(57, 97, 6, 150);
	ellipse(57, 290, 5, 240);
	ellipse(10, 200, 3, 300);
	fill(176, 156, 129); //rings
	strokeWeight(1);
	stroke(74, 54, 27);
	ellipse(20, 17, 3, 6);
	ellipse(25, 17, 3, 6);
	ellipse(10, 17, 3, 6);
	ellipse(38, 17, 3, 6);
	ellipse(48, 17, 3, 6);
	ellipse(57, 17, 3, 6);
	noStroke();

	fill(112, 67, 46); //right curtain
	rect(340, 20, 65, 390);
	fill(46, 42, 33);
	ellipse(350, 150, 5, 250);
	ellipse(370, 217, 5, 390);
	ellipse(385, 300, 7, 220);
	ellipse(385, 105, 5, 160);
	fill(176, 156, 129); //rings
	stroke(74, 54, 27);
	ellipse(350, 17, 3, 6);
	ellipse(365, 17, 3, 6);
	ellipse(374, 17, 3, 6);
	ellipse(370, 17, 3, 6);
	ellipse(343, 17, 3, 6);
	ellipse(385, 17, 3, 6);
	ellipse(395, 17, 3, 6);
	noStroke();
}


 