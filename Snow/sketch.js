var snowFlakes = [];
var numSnowFlakes;
var lastSnowFlakes;
var wind;
var debugPara;
var snowFlakesFallenOnGround = 0;
var sunObject;
var bgColour, bgSunHigh, bgSunLow;
var br,bg,bb,colourModifier;

function setup() {
  createCanvas(500, 500);
  numSnowFlakes = createSlider(10, 500, 100,5);
  wind = createSlider(-10, 10, 0, 1);
  for(i=0;i<numSnowFlakes.value();i++){
    snowFlakes[i] = new snowFlake();
  }
  lastSnowFlakes = numSnowFlakes.value();
  debugPara = createP();
  sunObject = new Sun();
  bgSunHigh = color(48,144,199);
  bgSunLow = color(72,60,50);
  colourModifier = 0;
  br = red(bgSunLow);
  bg = green(bgSunLow);
  bb = blue(bgSunLow);
}

function draw() {
  bgColour = color(br,bg,bb);
  background(bgColour);

  noStroke();
  fill(255,255,255);
  
  debugPara.html("Last Snow Flakes: " + lastSnowFlakes + "</br> Num Snow Flakes: " + numSnowFlakes.value() + "</br> Snow Flakes Landed: " + snowFlakesFallenOnGround + "</br> Red Mod: " + br);
  
  if(lastSnowFlakes != numSnowFlakes.value()){
    snowFlakes.splice(i, lastSnowFlakes);
      
    for(i=0;i<numSnowFlakes.value();i++){
     snowFlakes[i] = new snowFlake();
    }
    
    // if(numSnowFlakes.value() > lastSnowFlakes){
    //   for(i=snowFlakes.length;i>(numSnowFlakes.value()-snowFlakes.length);i++){
    //     snowFlakes[i] = new snowFlake();
    //   }
    // }
    
    // if(lastSnowFlakes > numSnowFlakes.value()){
    //   snowFlakes.splice(0, numSnowFlakes.value());
    // }
    
    lastSnowFlakes = numSnowFlakes.value();
  }
  
  for(i=snowFlakes.length - 1; i > 0;i--){
    snowFlakes[i].show();
    snowFlakes[i].update();
  }
  sunObject.draw();
  sunObject.update();

  //colourModifier = map(sunObject.y, height, height/2, 0, 100);

  br = map(sunObject.y, height, height/2, red(bgSunLow), red(bgSunHigh));
  bg = map(sunObject.y, height, height/2, green(bgSunLow), green(bgSunHigh));
  bb = map(sunObject.y, height, height/2, blue(bgSunLow), blue(bgSunHigh));

}

function snowFlake(){
  this.x = random(-width/4, width);
  this.y = random(0, height);
  this.ySpeed = random(5, 20);
  
  this.show = function(){
    ellipse(this.x, this.y, map(this.ySpeed, 20, 5, 20, 5));
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

function Sun(){
  this.x = 0;
  this.y = height
  
  this.draw = function(){ 
    fill(255,255,0);
    ellipse(this.x, this.y, 30);

    //TODO: Add function to add rotated pieces around the sun
    push();
    for(i=0;i < 6;i++){
      rect(this.x, this.y - 30, 5, 15);
      rotate(PI/6);
    }
    pop();
  }

  this.update = function(){
    if(this.x < width/2){
      this.y = this.y - map(this.x, 0, width/2, 2, 0);
    }else{
      this.y = this.y + map(this.x, width/2, width, 0, 2);
    }
    this.x++;

    if(this.y > height){
      this.x = 0;
      this.height = height / 2;
    }
  }
}