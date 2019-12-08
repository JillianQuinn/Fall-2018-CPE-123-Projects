// Example of very simple particle systems - introduction to objects in javascript
   var R;
   var G;
   var B;
   var fireworks = [];

// define a single particle
function Particle(x , y) // you will need to modify the parameters
{
   // the data associated with a particle
   this.accelY = 0.15; //gravity
   this.velX = random(-3, 3);
   this.velY = random(-4, 4);

   // note this particle only can vary its blue color 
   // - change this to include red and green
   this.pcolorR = R + random(-20, 20);
   this.pcolorG = G + random(-20, 20);
   this.pcolorB = B + random(-20, 20);
   this.locX = x;
   this.locY = y;
   this.r = 8.0;
   this.life = 190;
  
   // a function to update the particle each frame
   this.updateP = function()
   {
      this.velY += this.accelY;
      this.locX += this.velX;
      this.locY += this.velY;
      this.life -= 1.0;
   };
  
   // function to draw a particle
   this.renderP = function() 
   {
      noStroke();
      push();
         fill(this.pcolorR, this.pcolorG, this.pcolorB, this.life);
         translate(this.locX, this.locY);
         ellipse(0, 0, this.r, this.r);
      pop();
   };
} //end of particle object definition


// define a group of particles as a particleSys
function PSys(sX, sY, num)
{
   // the data - lots of particles
   this.particles = [];
   for (var i=0; i < num; i++) 
   {
      this.particles.push(new Particle(sX, sY));
   }
  
   // function defining what to do each frame
   this.run = function() 
   {
      for (var i=0; i < this.particles.length; i++) 
      {
         //update each particle per frame
         this.particles[i].updateP();
         this.particles[i].renderP();
      }
   }
   for (var i = this.particles.length-1; i >= 0; i--)
   {
      if (this.particles[i].life <= 0 || this.particles[i].locY > height)
      {
         this.particles.splice(i, 1);
      }
   }

}

// declare of a variable to represent a particle system
var fireW1; 
var count;
var x;
var y;


function setup() 
{
   createCanvas(500, 500);
   R = random(150, 255);
   G = random(150, 255);
   B = random(150, 255);
   // start a new particle system
   fireW1 = new PSys(200, 100, 30);
   count = 0;
   x = 0;
   y = 0;
   
}

function draw() 
{
   background(0);
   //fireW1.run();
   R = random(255);
   G = random(255);
   B = random(255);


   for (var i = 0; i < count; i++)
   {
      fireworks[i].run();
   }
   // run the particle system
  
}
function mousePressed() 
{
   x = mouseX;
   y = mouseY;
   count++;
   fireworks.push(fireW1 = new PSys(x, y, 30));
   //fireW1 = new PSys(mouseX, mouseY, 20)
   //fireW1.run();
}




