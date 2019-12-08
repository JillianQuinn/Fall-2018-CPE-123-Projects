//This code currently draws a road and five very simple cars that drive down the raod
//TODO: **create a new class called 'airplane' or 'saucer' that draws a flying ship that also heads off
//      into the distance  - you can even draw a little city or dome or destination if desired***
var numCars = 5;
var theCars = [];

function car(start, end, order) {
   this.begin = start.copy();
   this.loc = start.copy();
   this.stop = end.copy();
   end.sub(start);
   this.dir = end.copy();
   this.dist = this.dir.mag()
   this.dir.normalize();
   this.speed = random(1,2);
   this.c = color(random(20,240), random(20,240), random(20,240));
   this.alive = true;
   this.go = order;
   this.time = 0;
  
   // function to draw a car
   this.draw = function() {
      var more;
      var temp;
    
      temp = createVector(this.stop.x, this.stop.y);
      temp.sub(this.loc);
      more = temp.mag();

      if (this.alive && this.time >= this.go) {
         fill(this.c);
         push();
            stroke(this.c);
            strokeJoin(ROUND);
            strokeWeight(4);
            translate(this.loc.x, this.loc.y);
            scale((more/this.dist)*1.6);
            rect(0, 0, 40, 20); //car body
            rect(10, -10, 20, 10); //car top
            fill(250, 250, 250, 250);
            rect(12, -8, 16, 6); //window
            noStroke();
            fill(190);
            ellipse(10, 20, 8, 12);
            ellipse(30, 20, 8, 12);
         pop();
      }
      this.time++;
   }
  
   // function to update the car
   this.drive = function() {
      var more;
      var temp;
    
      if (this.time >= this.go) {
         temp = createVector(this.begin.x, this.begin.y);
         temp.sub(this.loc);
         more = temp.mag();
         if (more < this.dist) {
            this.loc.x += this.dir.x*this.speed;
            this.loc.y += this.dir.y*this.speed;
         } else {
            this.alive = false;
         }
      }  
   }  
}

function setup() 
{
   createCanvas(400, 400);
  
   for (var i=0; i < numCars; i++) {
      theCars.push(new car(createVector(-20, height+20), createVector(width*.8, height/2), i*40+random(5, 20)));
   }
}

function draw() 
{
   background(175, 221, 245);
 
   //draw forground
   noStroke();
   fill(147, 107, 70);
   rect(0, height/2,  width, height/2);

   //draw road
   stroke(255);
   fill(0);
   triangle(width*.8, height/2, width*.2, height+20, -.2*width, height+20);
 
   for (var i=0; i < numCars; i++) {
      theCars[i].draw();
      theCars[i].drive();
   }  
}

function mousePressed() {
   //reset all the cars
   for (var i=0; i < numCars; i++) {
      theCars[i].loc.x = -20;
      theCars[i].loc.y = height+20;
      theCars[i].alive = true;
      theCars[i].time = 0;
   }
}