function catchableFlake(){
  this.x = random(width/4, (width/4)*3);
  this.y = random(0, -200);
  this.ySpeed = random(2,4);
  
  this.show = function(){
    fill(255,255,255);
    ellipse(this.x, this.y, map(this.ySpeed, 4, 2, 20, 12));
  }
  
  this.update = function(){
    this.y = this.y + this.ySpeed;
    this.x = this.x + wind.value();
    
    if(this.y > height){
      this.x = random(width/4, (width/4)*3);
      this.y = random(0, -200);
      this.ySpeed = random(2,4);
    }

    if(this.x < 0){
      this.x = width;
    }
    if(this.x > width){
      this.x = 0;
    }
  }

  this.catched = function(){
    distance = dist(this.x, this.y, catcher.x, catcher.y);
    console.log(distance);
    
    if(distance < 15){
      this.x = random(width/4, (width/4)*3);
      this.y = random(0, -200);
      this.ySpeed = random(2,4);
      snowFlakesCaught++;
    }
  }
}