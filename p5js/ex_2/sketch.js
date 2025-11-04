

function setup() {
   createCanvas(300, 700);
   background(9);
 
   // Create random squares
   for (let i = 0; i < 50; i++) {
   let x = random(width);
   let y = random(height);
   let size = random(10, 50);
    
   fill(random(255), random(255), random(255));
   square(x, y, size);
  
   }
 }