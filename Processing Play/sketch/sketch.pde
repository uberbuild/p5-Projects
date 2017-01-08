float angle = 0;

void setup(){
  size(1920, 1080);
  
}

void branch(float len){
  line(0,0,0,-len);
  translate(0, -len);
   if (len > 4) {
    
    rotate(angle);
    branch(len * 0.67);
    
    rotate(-angle);
    branch(len * 0.67);
    
  }
}

void draw(){
  background(51);
  angle = 30.0;
  stroke(255);
  translate(200, height);
  branch(100);
}