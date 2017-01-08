//Graphical Representation of Snell's Law

int boxwidth = 500;
float angle = 30;
float incidentAngle;
float n1, n2;


void setup() {
  size(1920, 1080);
  n1 = 1;
  n2 = 1.4;
  
}

void draw() {
  incidentAngle = toRad(angle);
  
  float a = mouseY - height/2;
  float o = width/2 - boxwidth/2 - 50;
  incidentAngle = atan(o/a);
  
  background(255, 255, 0);
  rect(((width/2) - boxwidth/2), 0, boxwidth, height);

  float offset = tan(incidentAngle) * ((width/2 - boxwidth/2)-50);
  line(50, height/2 + offset, width/2-boxwidth/2, height/2);
  stroke(0,0,255);
  line(50, height/2, width/2-boxwidth/2, height/2);
  
  float refractedAngle = asin(n1 * sin(incidentAngle) / n2);
  println("Refracted Angle: " + toDegrees(refractedAngle));
  
  float roffset = tan(refractedAngle) * boxwidth; //Refracted Offset in Radians
  line(width/2-boxwidth/2, height/2, width/2+boxwidth/2, height/2 - roffset);
  
  line(width/2+boxwidth/2, height/2-roffset, width - 50, height/2 - offset - roffset);
  angle+=5;
}

float toRad(float degrees){
  return PI * degrees / 180;
}

float toDegrees(float rad){
  return 180 * rad / PI;
}