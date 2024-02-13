// sketch.js - 3D graphics
// Author: Reese Garcia
// Date: 2/12/24

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

var chunks = [];

// setup() function is called once when the program starts
function setup() {
    // place our canvas, making it fit our container
    canvasContainer = $("#canvas-container");
    let canvas = createCanvas(canvasContainer.width(), windowHeight, WEBGL);
    canvas.parent("canvas-container");
    // resize canvas is the page is resized
    $(window).resize(function() {
        console.log("Resizing...");
        resizeCanvas(canvasContainer.width(), windowHeight);
    });
	//createCanvas(windowWidth, windowHeight, WEBGL);
	setAttributes('antialias', true)
	getGeo()
}

function draw() {
	resetMatrix()
	background(noise(frameCount * 0.01, 5) * 70, noise(frameCount * 0.01, 5) * 70, noise(frameCount * 0.01, 10) * 170);
	translate(0, 0, -1000)
	rotateY(frameCount / max(50, 200 - (frameCount / 2)))
	fill(noise(frameCount * 0.02, 0) * 70, noise(frameCount * 0.02, 5) * 70, noise(frameCount * 0.02, 20) * 190)
	stroke(noise(frameCount * 0.02, 20) * 70, noise(frameCount * 0.02, 25) * 70,  225)
	for (var x = -2; x < 2; x++) {
		push()
        normalMaterial();
		translate(0, x * frameCount / min(12, 200 - (frameCount / 15)), 0)
		drawChunk(0, 0)
		pop()
	}
	rotateX(frameCount / max(50, 200 - (frameCount / 2)))
	for (var x = -2; x < 2; x++) {
		push()
        normalMaterial();
		translate(0, x * frameCount / min(12, 200 - (frameCount / 15)), 0)
		drawChunk(0, 0)
		pop()
	}
	rotateZ(frameCount / max(50, 200 - (frameCount / 2)))
	for (var x = -2; x < 2; x++) {
		push()
        normalMaterial();
		translate(0, x * frameCount / min(12, 200 - (frameCount / 15)), 0)
		drawChunk(0, 0)
		pop()
	}
  // torus
  push();
  rotateX(frameCount * 0.005)
  normalMaterial();
  torus(480,15);
  pop();
  
  push();
  rotateY(frameCount * 0.002)
  normalMaterial();
  torus(440,15);
  pop();
  
  push();
  rotateZ(frameCount * 0.009)
  normalMaterial();
  torus(520,15);
  pop();
}

function addChunk(i, j) {
	let str = "x" + i + "y" + j
	chunks[str] = new p5.Geometry()
}

function addChunkQuad(i, j, x, y, size, h1, h2, h3, h4) {
	let str = "x" + i + "y" + j
	let chunk = chunks[str]
	chunk.vertices.push(createVector(x + size, h1, y + size))
	chunk.vertices.push(createVector(x + size, h2, y - size))
	chunk.vertices.push(createVector(x - size, h3, y - size))
	chunk.vertices.push(createVector(x - size, h4, y + size))
	chunk.uvs.push(1, 1)
	chunk.uvs.push(1, 0)
	chunk.uvs.push(0, 0)
	chunk.uvs.push(0, 1)
	let length = chunk.vertices.length
	chunk.faces.push([length - 1, length - 2, length - 3])
	//chunk.faces.push([length - 3, length - 4, length - 1])
}

function computeChunk(i, j) {
	let str = "x" + i + "y" + j
	chunks[str].computeNormals() //compute geometry
}

function drawChunk(i, j) {
	let str = "x" + i + "y" + j
	model(chunks[str]) //draw geometry
}

function getGeo(){
	let f = frameCount/100
	addChunk(0,0)
	for(var x = -4;x < 2;x++){
		for(var y = -4;y < 2;y++){
			addChunkQuad(0,0,x*50,y*50,25,noise(x,y,f)*150-75,noise(x,y-1,f)*150-75,noise(x-1,y-1,f)*150-75,noise(x-1,y,f)*150-75)
		}
	}
	computeChunk(0,0)
}