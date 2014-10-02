function setup() {
	createCanvas(700, 700);
	background(0, 0, 0);
}

function draw() {
	noFill();
	stroke(255, 255, 255);
	ellipse(500, 500, 150, 150);

	if (mouseX < 300) {
	ellipse(200, 200, 100, 100);
}
}

