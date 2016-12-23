var snowFlakes = [];
var numSnowFlakes;
var lastSnowFlakes;
var wind;
var debugPara;
var snowFlakesFallenOnGround = 0;


function setup() {
  createCanvas(500, 500);
  numSnowFlakes = createSlider(10, 500, 100,5);
  wind = createSlider(-20, 20, 0, 1);
  for(i=0;i<numSnowFlakes.value();i++){
    snowFlakes[i] = new snowFlake();
  }
  lastSnowFlakes = numSnowFlakes.value();
  debugPara = createP();
}

function draw() {
  bgColour = color("#0EA1FE");
  background(bgColour);

  noStroke();
  
  debugPara.html("Frame Rate: " +frameRate() + "</br>Last Snow Flakes: " + lastSnowFlakes + "</br> Num Snow Flakes: " + numSnowFlakes.value() + "</br> Snow Flakes Landed: " + snowFlakesFallenOnGround  + "</br> Number of Snow Flakes: " + snowFlakes.length);
  
  if(lastSnowFlakes != numSnowFlakes.value()){
    snowFlakes.splice(i, lastSnowFlakes);
      
    for(i=0;i<numSnowFlakes.value();i++){
     snowFlakes[i] = new snowFlake();
    }
    
    // TODO: Smoothly update list of snowflakes when number of snow flakes changes.
    
    // if(numSnowFlakes.value() > lastSnowFlakes){

    //   for(i=snowFlakes.length;i<numSnowFlakes.value();i++){
    //     snowFlakes[i] = new snowFlake();
    //   }
    // }
    
    // if(lastSnowFlakes > numSnowFlakes.value()){
    //   splice(snowFlakes, "", );
    // }
    
    lastSnowFlakes = numSnowFlakes.value();
  }
  
  for(i=snowFlakes.length - 1; i > 0;i--){
    snowFlakes[i].show();
    snowFlakes[i].update();
  }

}

function snowFlake(){
  this.x = random(-width/4, width);
  this.y = random(0, height);
  this.ySpeed = random(5, 20);
  this.visible = true;
  
  this.show = function(){
    fill(255,255,255);
    ellipse(this.x, this.y, map(this.ySpeed, 20, 5, 25, 3));
  }
  
  this.update = function(){
    this.y = this.y + this.ySpeed;
    this.x = this.x + wind.value();
    
    if(this.y > height){
      this.y = 0;
      this.ySpeed = random(5, 20);
      this.x = random(0,width);
      snowFlakesFallenOnGround++;
    }

    if(this.x < 0){
      this. x = width;
    }
    if(this.x > width){
      this.x = 0;
    }
  }
}
