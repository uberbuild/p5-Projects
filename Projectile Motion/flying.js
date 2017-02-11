function Projectile(xV, yV){
  this.xSpeed = xV; // ms^1 ->map to 1500 pixel width
  this.ySpeed = yV; // -> map to 500 pixel height
  
  this.x = 50; //Start X
  this.endX = width-this.x; //End X value, howmany pixels x is from from the left from the right.

  this.y = height; //Start at the ground
  this.r = 10;
  
  this.gravity = 9.81; //Gravitational acceleration

  this.lastx = this.x;  //Graphing variables to draw path.
  this.lasty = this.y;

  this.prevP = [[this.x, this.y]];
  this.fr = fr; // Get global framerate.

  //Calculate total flight physics stuff
  this.pixelRange = width - (this.x*2);
  this.flightTime = (this.ySpeed/this.gravity)*2; //yV go to 0 twice
  this.actualRange = this.xSpeed * this.flightTime; //Constant horizontal velocity

  if(this.actualRange > this.pixelRange){
    this.scaleFactor = this.pixelRange/this.actualRange;
  }else{
    this.scaleFactor = 1;
  }

  this.scaleFactor = this.scaleFactor / this.fr; // Scale for frame rate

  console.log(this.scaleFactor);
  console.log(this.actualRange);
  console.log(this.pixelRange);
  console.log(this.flightTime);
  
  this.update = function(){
    this.lastx = this.x;
    this.lasty = this.y;
    this.x = this.x + (this.xSpeed * this.scaleFactor); 
    this.y = this.y - (this.ySpeed * this.scaleFactor);
    this.ySpeed = this.ySpeed - (this.gravity * this.scaleFactor);
    this.prevP.push([this.lastx, this.lasty]);
  }

  this.show = function(){
    color(255,255,255);
    ellipse(this.x, this.y, this.r);
    stroke(255,255,255);
    line(this.x, this.y, this.lastx, this.lasty);
    for(i=1;i<this.prevP.length;i++){
      line(this.prevP[i][0], this.prevP[i][1], this.prevP[i-1][0],this.prevP[i-1][1]);
    }

    textSize(30);
    text("Horizontal speed: "+this.xSpeed+"m/s", 20,30);
    text("Vertical speed: " + (this.ySpeed -(this.ySpeed%0.01))+"m/s",20, 70);
    text("Velocity: " + sqrt(this.xSpeed*this.xSpeed + this.ySpeed*this.ySpeed), 20, 110);

  }
}