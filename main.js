function setup() {
  createCanvas(1200, 800);
  frameRate(4);
}

function draw() {
  background(0, 255, 0);
  strokeWeight(40);
  for (let i = 0; i < 1200; i+=45) {
    let r = random(255);
    stroke(r);
    line(50, i, 200 + r, i);
    
}
}