// sketch.js - Grammars & Text Art
// Author: Reese Garcia
// Date: 2/19/24

// Here is how you might set up an OOP p5.js project
// Note that p5.js looks for a file called sketch.js

// Constants - User-servicable parts
// In a longer project I like to put these in a separate file
const VALUE1 = 1;
const VALUE2 = 2;

// Globals
let myInstance;
let canvasContainer;

class MyClass {
    constructor(param1, param2) {
        this.property1 = param1;
        this.property2 = param2;
    }

    myMethod() {
        // code to run when method is called
    }
}

p5.disableFriendlyErrors = true;
let font1;
let radius = 200;
let tubeRadius = 100;
let textTexture;
let hu = 0;
let indexWord = 0;
let canvas;
let words = ['^ /\\ ^ /\\ ^ /\\ ^ /\\ ^ /\\ ^ /\\ ^ /\\ ^ /\\ ^ /\\ ^ /\\ ^ /\\ ^ /\\ ^ /\\ ^ /\\ ^ /\\ ^'];

// canvas = createCanvas(1112, 834,WEBGL);

function setup() {
    // place our canvas, making it fit our container
    canvasContainer = $("#canvas-container");
    let canvas = createCanvas(canvasContainer.width(), 1075, WEBGL);
    canvas.parent("canvas-container");
    // resize canvas is the page is resized
    $(window).resize(function() {
        console.log("Resizing...");
        resizeCanvas(canvasContainer.width(), 1075);
    });
	// Create Texture
  textTexture = createGraphics(2*PI*radius,2*PI*400);
	textTexture.clear()
	textTexture.colorMode(HSB, 255);
  textTexture.fill(255);
	textTexture.textFont('arial');
  textTexture.textSize(51);
	textTexture.translate(0,words.length*25);

	noStroke();
  background(25, 0, 70);
}

function draw() {
	
	orbitControl();

	// Add text to the texture
	//let wave = (sin(frameCount * 0.005 + (0.005) * 0.005) * 1);
	textTexture.clear();
	
	for(let i = 0; i <=31; i++){
    textTexture.fill((hu + i*8)%255, 200, 255);
		textTexture.text(words[i%3], 0, i*70);
	}
	
	// Create Solid
	push();
	rotateZ(radians(-90));
	rotateX(radians(90));
	rotateY(PI/2 + frameCount*0.008);
	push();
	texture(textTexture);
	cylinder(radius, 2500, 40, 1, true, false);

	pop();
	pop();
  
    push();
	rotateZ(radians(-90));
	rotateX(radians(-90));
	rotateY(PI/2 + frameCount*0.008);
	push();
	texture(textTexture);
	cone(radius, 1750, 40, 1, false);

	pop();
	pop();
	hu++;
	
	
}

function keyTyped(){
  if (key === 'c'){
    clear();
    background(25, 0, 70);
  }
  if (key === 'x'){
    textTexture.colorMode(RGB, 255);
  }
  if (key === 'z'){
    textTexture.colorMode(HSB, 255);
  }
}