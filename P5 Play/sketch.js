var i, maxI;
var count = 0;
var paraI, paraCnt, paraMaxI;
var flyings = [];
var numFlying = 40;

function setup() {
  i=0;
	createCanvas(500,500);
  background(51,51,51);
  para = createP();
  slider = createSlider(10, 5000, 200);
  for(j = 0;j<numFlying;j++){
    flyings[j] = new Flying();
  }
}

function draw() {
  background(255,0,255);
  noStroke();
  maxI = slider.value();
  
  
  
  para.html("I: " + i + "</br> Count: " + count + "</br> Max I: " + maxI);
  
  for(j=0;j<flyings.length;j++){
    para.html("</br> Flying ID: "+j+"</br>X: " + flyings[j].x + "</br> Y: " + flyings[j].y, true);
  }
    
  push();
  translate(-width/3, -height/3);
  fill(map(i,0,maxI,0,255));
  var rectHeight = map(i, 0, maxI, (height/4)*3, 50);
  var rectWidth = map(i, 0, maxI, (width/4)*3, 50);
  rect(width/2,height/2,rectWidth,rectHeight);
  pop();
  
  for(j=0;j<flyings.length;j++){
    flyings[j].show();
    flyings[j].update();
  }
  
  if(count == 0){
    if(i < maxI){
      i++;
    }else{
      count = 1
    }
  }else{
    if(i > 0){
      i--;
    }else{
      count = 0
    }
  } 
}

