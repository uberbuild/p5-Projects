function Umbrella(){
  this.draw = function(){
  	this.x = mouseX;
  	this.y = height-85;
    fill(255,255,255);
    rectMode(CENTER);
    rect(mouseX, height-60, 5, 50);
    push();
    translate(0,25);
    strokeWeight(4);
    stroke(color(255,0,0))
    noFill();
    arc(mouseX, height-85, 50, 50, PI, TWO_PI);
    pop();
  }
}