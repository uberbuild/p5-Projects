var snowFlakes = [];
var catchableFlakes = [];
var numToCatch;
var numSnowFlakes;
var lastSnowFlakes;
var wind;
var debugPara;
var snowFlakesFallenOnGround = 0;
var catcher;
var maxWindspeed = 10;
var snowFlakesCaught;

function setup() {
  createCanvas(500, 500);
  snowFlakesCaught = 0;
  numToCatch = 5;
  numSnowFlakes = createSlider(10, 500, 100,5);
  wind = createSlider(-maxWindspeed, maxWindspeed, 0, 1);
  for(i=0;i<numSnowFlakes.value();i++){
    snowFlakes[i] = new snowFlake();
  }
  for(i=0;i<numToCatch;i++){
    catchableFlakes[i] = new catchableFlake();
  }
  lastSnowFlakes = numSnowFlakes.value();
  debugPara = createP();
  catcher = new Umbrella();
  noCursor();
  noStroke();
  bgColour = color("#0EA1FE");
}

function draw() {
  
  background(bgColour);
  catcher.draw();

  fill("#fff");
  textSize(32);
  text(snowFlakesCaught, width/2, 50);
  debugPara.html("Frame Rate: " + floor(frameRate()) + "</br>Last Snow Flakes: " + lastSnowFlakes + "</br> Num Snow Flakes: " + numSnowFlakes.value() + "</br> Snow Flakes Landed: " + snowFlakesFallenOnGround  + "</br> Number of Snow Flakes: " + snowFlakes.length);
  
  if(lastSnowFlakes != numSnowFlakes.value()){
    if(numSnowFlakes.value() > lastSnowFlakes){

      for(i=snowFlakes.length;i<numSnowFlakes.value();i++){
        snowFlakes[i] = new snowFlake();
      }
    }else{
      //Remove the difference in snow flakes from the array.
      snowFlakes.splice(0, abs(numSnowFlakes.value() - lastSnowFlakes));
    }
    
    lastSnowFlakes = numSnowFlakes.value();
  }

  for(i=0;i<numToCatch;i++){
    catchableFlakes[i].update();
    catchableFlakes[i].show();
    catchableFlakes[i].catched();
  }
  
  for(i=snowFlakes.length - 1; i > 0;i--){
    snowFlakes[i].show();
    snowFlakes[i].update();
  }

  fill(255);
  text(snowFlakesCaught, width/2, 80);
}