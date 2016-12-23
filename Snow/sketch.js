var snowFlakes = [];
var numSnowFlakes;
var lastSnowFlakes;
var wind;
var debugPara;
var snowFlakesFallenOnGround = 0;
var catcher;


function setup() {
  createCanvas(500, 500);
  numSnowFlakes = createSlider(10, 500, 100,5);
  wind = createSlider(-20, 20, 0, 1);
  for(i=0;i<numSnowFlakes.value();i++){
    snowFlakes[i] = new snowFlake();
  }
  lastSnowFlakes = numSnowFlakes.value();
  debugPara = createP();
  catcher = new Umbrella();
}

function draw() {
  bgColour = color("#0EA1FE");
  background(bgColour);

  noStroke();
  
  debugPara.html("Frame Rate: " +frameRate() + "</br>Last Snow Flakes: " + lastSnowFlakes + "</br> Num Snow Flakes: " + numSnowFlakes.value() + "</br> Snow Flakes Landed: " + snowFlakesFallenOnGround  + "</br> Number of Snow Flakes: " + snowFlakes.length);
  
  if(lastSnowFlakes != numSnowFlakes.value()){
    if(numSnowFlakes.value() > lastSnowFlakes){

      for(i=snowFlakes.length;i<numSnowFlakes.value();i++){
        snowFlakes[i] = new snowFlake();
      }
    }else{
      //Remove the difference in snow flakes from the array.
      snowFlakes.splice(0, abs(numSnowFlakes.value() - lastSnowFlakes));
    }
    
    catcher.draw();
    lastSnowFlakes = numSnowFlakes.value();
  }
  
  for(i=snowFlakes.length - 1; i > 0;i--){
    snowFlakes[i].show();
    snowFlakes[i].update();
  }
}