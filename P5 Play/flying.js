function Flying(){
  this.xSpeed = random(-5, 5);
  this.ySpeed = random(-1, -5);
  this.x = width / 2;
  this.y = height;
  
  this.rectWidth=5;
  this.rectHeight=15;
  
  this.update = function(){
    this.x = this.x + this.xSpeed;
    this.y = this.y + this.ySpeed;
    if(this.y < 0){
      this.y = height;
      this.xSpeed = random(-5, 5);
      this.ySpeed = random(-1, -5);
    }
    if(this.x < 0 || this.x > width){
      this.x = width/2;
    }
  }
  
  this.show = function(){
    noStroke();
    rect(this.x, this.y, this.rectWidth, this.rectHeight);
  }
  
}