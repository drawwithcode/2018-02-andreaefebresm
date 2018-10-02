function setup() {
  createCanvas(windowWidth, windowHeight);
  noStroke();
  angleMode(DEGREES);
 background(0);

 noStroke();
 fill(10,10,10);
 ellipse(width/2, height/2, 400);

 frameRate(10);




}

 function draw() {

// text
   textSize(40);
   noStroke();
   textAlign(CENTER);
   textFont('Avenir Next');
   text('Keep it clicked', width/2, (height/2)-300);
   fill(255, 255, 255);

// cursor
   if ((width/2)-100 <mouseX < (width/2) + 200) {
    cursor(HAND);
  } else {
    cursor(ARROW);
  }

    // click

  if (mouseIsPressed) {
    translate(width/2,height/2);
    rotate(-frameCount*3);
    stroke(lerpColor(color('#4D5359'), color('#FCB5B5'),frameCount/120));
    line(200,0,cos(frameCount*2)*200,sin(frameCount*2)*200);

  } else {
    noStroke();
    fill(10,10,10,5);
    ellipse(width/2, height/2, 400);

    textSize(40);
    noStroke();
    textAlign(CENTER);
    textFont('Avenir Next');
    text('Keep it clicked', width/2, (height/2)-300);
    fill(255, 255, 255);

  }

   if (frameCount == 170) {
          noLoop();

      }



 }
