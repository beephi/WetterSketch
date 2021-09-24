let snowflakes = []; // array to hold snowflake objects

function setup() {
  createCanvas(800, 800);
  fill(300);
  noStroke();
}

function draw() {
  background(0,100,255);
    fill(102,51,0);
    rect(600,480,50,150);
    fill("green");
    circle(625,450,150);
    fill("white");
    circle(200,580,50,50);
    circle(200,535,41,05);
    circle(200,515,41,50);
    
  
  let t = frameCount / 60; // update time
  
  // create a random number of snowflakes each frame
  for (let i = 0; i < random(5); i++) {
    snowflakes.push(new snowflake()); // append snowflake object
  }
  
  // loop through snowflakes with a for..of loop
  for (let flake of snowflakes) {
    flake.update(t); // update snowflake position
    flake.display(); // draw snowflake
  }
   
  fill(102,51,0);
  rect(0,600,800,800);
  fill(255,255,255);
  rect(0,600,800,50);
  fill(150,150,0);
  circle(100,100,100);
  
}
  
// snowflake class
function snowflake() {
  // initialize coordinates
  this.posX = 0;
  this.posY = random(-50, 0);
  this.initialangle = random(0, 2 * PI);
  this.size = random(2, 5);
  
  // radius of snowflake spiral
  // chosen so the snowflakes are uniformly spread out in area
  this.radius = sqrt(random(pow(width / 2, 2)));
  
  this.update = function(time) {
    // x position follows a circle
    let w = 0.6; // angular speed
    let angle = w * time + this.initialangle;
    this.posX = width / 2 + this.radius * sin(angle);
    
    // different size snowflakes fall at slightly different y speeds
    this.posY += pow(this.size, 0.5);
    
    // delete snowflake if past end of screen
    if (this.posY > height) {
      let index = snowflakes.indexOf(this);
      snowflakes.splice(index, 1);
    }
  };
  
  this.display = function() {
    ellipse(this.posX, this.posY, this.size);
    fill("white");

  };
}
