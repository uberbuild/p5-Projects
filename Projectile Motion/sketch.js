var projectile;
var fr = 60;

function setup() {
	createCanvas(1600,800);
	background(0,0,0);
	frameRate(fr);
	projectile = new Projectile(20, 40);
	//resizeCanvas(projectile.range+100, projectile.maxheight+50);

}

function mousePressed(){
	var vX = map(mouseX, 0, width, 50, 100);
	var vY = map(mouseY, height, 0, 50, 500);
	projectile = new Projectile(vX, vY);
}

function draw() {
	background(0,0,0);
	color(255,255,255);
	projectile.show();
	projectile.update();
}