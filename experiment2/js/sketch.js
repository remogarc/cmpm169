// sketch.js - Vector Art, Animation & Interactivity
// Author: Reese Garcia
// Date: 1/22/24

// P_2_1_2_03
//
// Generative Gestaltung – Creative Coding im Web
// ISBN: 978-3-87439-902-9, First Edition, Hermann Schmidt, Mainz, 2018
// Benedikt Groß, Hartmut Bohnacker, Julia Laub, Claudius Lazzeroni
// with contributions by Joey Lee and Niels Poldervaart
// Copyright 2018
//
// http://www.generative-gestaltung.de
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

/**
 * changing size of circles in a rad grid depending the mouseposition
 *
 * MOUSE
 * position x/y        : module size and offset z
 *
 * KEYS
 * s                   : save png
 */
'use strict';

var tileCount = 20;

var moduleColor;
var moduleAlpha = 130;
var maxDistance = 250;
let greenColor;
let blueColor;
let yellowColor;
let redColor;
let fillColor;
let canvasContainer;

function setup() {
  // place our canvas, making it fit our container
  canvasContainer = $("#canvas-container");
  let canvas = createCanvas(600, 600);
  canvas.parent("canvas-container");
  // resize canvas is the page is resized
  $(window).resize(function() {
      console.log("Resizing...");
      resizeCanvas(600, 600);
  });
  //createCanvas(600, 600);
  fill(30,170,190,85);
  strokeWeight(3);
  moduleColor = color(30, 150, 170, moduleAlpha);
  greenColor = color(39, 232, 39);
  blueColor = color(30, 97, 190);
  yellowColor = color(232, 226, 39);
  redColor = color(227, 23, 57);
}

function draw() {
  clear();
  stroke(moduleColor);
  let amt = map(mouseX, 0, width, 0, 1.0);
  fillColor = lerpColor(greenColor, blueColor, amt);
  fillColor.setAlpha(175);
  fill(fillColor);
  fillColor = lerpColor(yellowColor, redColor, amt);
  background(fillColor);

  for (var gridY = 0; gridY < width; gridY += 25) {
    for (var gridX = 0; gridX < height; gridX += 25) {
      var diameter = dist(mouseX, mouseY, gridX, gridY);
      diameter = diameter / maxDistance * 40;
      push();
      translate(gridX + 15, gridY + 15, diameter * 5);
      ellipse(0, 0, diameter, diameter);
      pop();
    }
  }
}

function keyReleased() {
  if (key == 's' || key == 'S') saveCanvas(gd.timestamp(), 'png');
}
