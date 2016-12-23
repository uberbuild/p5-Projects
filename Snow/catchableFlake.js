function catchFlake(){
  this.x = random(-width/4, width);
  this.y = random(0, height);
  this.ySpeed = random(3,9);
  
  this.show = function(){
    fill(255,255,255);
    ellipse(this.x, this.y, map(this.ySpeed, 9, 3, 20, 12));
  }
  
  this.update = function(){
    this.y = this.y + this.ySpeed;
    this.x = this.x + wind.value();
    
    if(this.y > height){
      this.y = 0;
      this.ySpeed = random(3,9);
      this.x = random(0,width);
    }

    if(this.x < 0){
      this.x = width;
    }
    if(this.x > width){
      this.x = 0;
    }
  }
}