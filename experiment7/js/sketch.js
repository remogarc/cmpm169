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

let data;
let url = "https://docs.google.com/spreadsheets/d/e/2PACX-1vSdI21Qs1Ac6NH-6AsdYCa_hmp9oZOhnA28sqMTzxmau2H3rrOPFMwv9MRD_emqjLWPTfMPb8vvgJjx/pub?gid=0&single=true&output=csv"
let circles = [];

function preload() {
  //data = loadTable(url, 'csv', 'header');
  data = loadTable('assets/Pokémon Popularity - Sheet1.csv', 'csv', 'header');
}

function setup() {
  // place our canvas, making it fit our container
  canvasContainer = $("#canvas-container");
  let canvas = createCanvas(canvasContainer.width(), canvasContainer.height());
  canvas.parent("canvas-container");
  // resize canvas is the page is resized
  $(window).resize(function() {
      console.log("Resizing...");
      resizeCanvas(canvasContainer.width(), canvasContainer.height());
  });
  topColor = color(27, 1, 130);
  bottomColor = color(0, 0, 0);
  
  for(let y=0; y<height; y++){
    n = map(y,0,height,0,1);
    let gradient = lerpColor(topColor,bottomColor,n);
    stroke(gradient);
    line(0,y,width, y);
  }

  textAlign(CENTER, CENTER);
  drawCircles();
}

function drawCircles() {
  //var protection = 0;

  while (circles.length < 30) {
    let votes = data.getNum(circles.length, "Votes");
    let radius = (map(votes / 360, 0, 200, 0, 100) / 2);
		var circle = {
			x: random(50, width-60),
			y: random(50, height-60),
			r: radius
		}

    var overlapping = false;
    for (var j = 0; j < circles.length; j++) {
      var other = circles[j];
      var d = dist(circle.x, circle.y, other.x, other.y);
      if (d < circle.r + other.r) {
        overlapping = true;
      }
    }

    if (!overlapping) {
      circles.push(circle);
    }

    // protection++;
    // if (protection > 10000) {
    //   break;
    // }
  }

  for (let i = 0; i < data.getRowCount(); i++) {
    let name = data.getString(i, "Pokémon");
    let votes = data.getNum(i, "Votes");
    let fillColor = data.getString(i, "Color");
    let sizes = map(votes / 360, 0, 200, 0, 100);
    stroke(0);
    strokeWeight(2);
    fill(fillColor);
    ellipse(circles[i].x, circles[i].y, circles[i].r * 2, circles[i].r * 2);
    fill(255);
    textSize(sizes/5);
    textStyle(BOLD);
    text(name + '\n' + votes, circles[i].x, circles[i].y);
  }
}
