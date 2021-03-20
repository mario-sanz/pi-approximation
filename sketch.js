const r = 200;

total = 0;
myCircle = 0;

bestPi = 0;
bestDiff = 0;

function setup() {
  createCanvas(402, 402);
  
  background(0);
  translate(width/2, width/2);
  stroke(255);
  strokeWeight(4);
  noFill();
  ellipse(0,0,r*2,r*2);
  rectMode(CENTER);
  rect(0,0,r*2,r*2);
}

function draw() {
  translate(width/2, width/2);
  
  for (i = 0; i < 10000; i++) {
    x = random(-r,r);
    y = random(-r,r);
    total++;

    // determine how many dots are inside my circle
    distance = (float)((float)(x)*(float)(x) + (float)(y)*(float)(y));
    if (distance < (float)((float)(r) * (float)(r))) {
      myCircle++;
      stroke(0,255,0,100); // paint in green the inside dots
    }
    else {
      stroke(255,0,0,100); // paint in red the outside dots
    }
    strokeWeight(1); // transparency to see it darker when we have more dots
    point(x,y);
    
    pi = (float)(4 * (float(myCircle) / float(total))); // current pi
    bestDiff = Math.abs(Math.PI - bestPi);
    diff = Math.abs(Math.PI - pi);
    if (diff < bestDiff) {
      bestDiff = diff;
      bestPi = pi;
      print(bestPi); // it is only printed on console when it is better than previous one
    }
  }
}