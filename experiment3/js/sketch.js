// sketch.js - Generative Methods
// Author: Reese Garcia
// Date: 1/29/24

string = "F";
len = 35;
deapth = 0;
angle = 0;

function generate() {
	var newstring = "";
	for(var i = 0; i < string.length; i++) {
		var c = string.charAt(i);
		if(c == "F") {
			newstring += "FF-[-F][F-F]+[+F-F+F]";
		} else {
			newstring += c;
		}
	}
	string = newstring;
}

function createTree() {
	translate(width / 2, height);
	// console.log(string);
	for(var i = 0; i < string.length; i++) {
		var c = string.charAt(i);
		if(c == "F") {
			//stroke(50 + 10 * deapth);
			 stroke(deapth * 40, 85, 70);
			// console.log(deapth);
			line(0, 0, 0, -len/(1 + deapth/10));
			translate(0, -len/(1 + deapth/10));
			//translate(0, -len/(1 + deapth/3));
		} else if(c == "-") {
			rotate(-angle + deapth / 75);
		} else if(c == "+") {
			rotate(angle + deapth / 75);
		} else if(c == "[") {
			deapth += 1;
			push();
		} else {
			deapth -= 1;
			pop();
		}
		if(c == "F" && string.charAt(i + 1) == "]") {
			noStroke();
			// pips farbe
            fill(32 * deapth, 95, 85);
			ellipse(0, 0, 10, 7);
		}
	}
}

let topColor, bottomColor;
function setup() {
    // place our canvas, making it fit our container
  canvasContainer = $("#canvas-container");
  let canvas = createCanvas(800, 700);
  canvas.parent("canvas-container");
  // resize canvas is the page is resized
  $(window).resize(function() {
      console.log("Resizing...");
      resizeCanvas(800, 700);
  });
	//createCanvas(800, 700);
	//background(255);
	colorMode(HSB);
	angle = PI / 6;
	for(var i = 0; i < 4; i++) {
		generate();
		len /= 1.25;
	}
	noiseSeed(90);
}

function draw() {
  // topColor = color(270, 60, 100);
  // bottomColor = color(45, 75, 100);
  colorMode(RGB);
  topColor = color(128, 102, 255);
  bottomColor = color(255, 143, 64);
  
  for(let y=0; y<height; y++){
    n = map(y,0,height,0,1);
    let gradient = lerpColor(topColor,bottomColor,n);
    stroke(gradient);
    line(0,y,width, y);
  }
    colorMode(HSB);
	//background(145,75,40);
	createTree();
	angle = PI / 6 + 0.1 * sin(frameCount / 50);
}
