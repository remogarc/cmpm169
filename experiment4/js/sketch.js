// sketch.js - purpose and description here
// Author: Reese Garcia
// Date: 2/5/24

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

// setup() function is called once when the program starts

    function preload(){
        sound1 = loadSound('experiment4/assets/Good Egg Galaxy - Super Mario Galaxy.mp3');
        sound2 = loadSound('experiment4/assets/Good Egg Galaxy - Super Mario Galaxy.mp3');
        sound3 = loadSound('experiment4/assets/Super Mario Galaxy 2 Music - Puzzle Plank Galaxy.mp3');
        sound4 = loadSound('experiment4/assets/Starship Mario 3 - Super Mario Galaxy 2.mp3');
        sound5 = loadSound('experiment4/assets/Sky Station Galaxy - Super Mario Galaxy 2.mp3');
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
        //let cnv = createCanvas(1112, 834); //
        amplitude = new p5.Amplitude(); //
    }
    
    let soundPlaying = false;
    
    function draw() {
      background('#93D2FF');
        textAlign(CENTER); //
        fill(10, 10, 10, 70);
        textSize(30);
        textFont('Impact');
        if (!soundPlaying) text('Tap to play', width/2, 40); //
        
        let level = amplitude.getLevel(); //
        let size = map(level,0,1,0,1200)+50; //
        
    
        
      setCenter(width/2, height/2);
     
      stroke(255, 136, 108);
      fill(255, 184, 137, 35); // outer pink cirlces
      polarEllipses(45, 300, 100, 100);
        
      stroke(229, 239, 240); // scaling white circle
      fill(229, 239, 240, 2);
        //polarEllipses(30, 40+sin(frameCount/10)*20, 100, 100);
        polarEllipses(30, size+sin(frameCount/5)*20, size, 100);
    
      stroke(60, 179, 255); // scaling blue circle
       noFill();
      // polarEllipses(70, 40+sin(frameCount/10)*20, 300, 80);
        polarEllipses(70, size+sin(frameCount/5)*20, size, 80);
      
      //polarLines
      noFill();
      stroke(218,165,32);
      strokeWeight(0.5);
      polarLines(100, 150, 0);
      polarLines(100, 60, 20);
      
      //polarEllipses
      noStroke();
      fill(255, 225, 31, 150);
      polarEllipses(15, sin(frameCount/10)*30, 30, 450);
      polarEllipses(15, 30, sin(frameCount/10)*30, 450);
      fill(255, 255, 255, 120);
      polarEllipses(7, 36, 36, 32);
      fill(253, 255, 138, 120);
      polarEllipses(10, 30, 30, 70);
      polarEllipses(10, 30, 30, 120);
      fill(169, 153, 186, 150);
      polarEllipses(12, 8, 8, 40);
      fill(240, 213, 170, 120);
      polarEllipses(10, 16, 16, 32);
      fill(155, 255, 122, 110);
      polarEllipses(14, 50, 50, 155);
        
        let size1 = map(level,0,0.25,0,50)+50; //
      
      //polarHexagon 
      noStroke();
      fill(255, 225, 31,180);
        polarPentagon(3,size1+sin(frameCount/20)*10 , 0);
        
        //polarHexagons
      fill(147, 234, 255, 120);
      polarHexagons(15, 10, 80);
        
     // polarHexagons(4,40+sin(frameCount/10)*20, 120);
        polarHexagons(7,size1+sin(frameCount/8)*18, 120);
    
      
      //polarOctagons
        fill(98, 179, 230, 120);
      //fill(210, 180, 222, 150);
      polarOctagons(30, 6, 60);
        //polarOctagons(25, 1+sin(frameCount/10)*20, 150);
        polarOctagons(10, 1+sin(frameCount/10)*23, 150);
    
            let size2 = map(level,0,0.25,0,75)+50;
        //polarPentagon
        fill(109, 247, 101,130); //
        //polarPentagons(30, 50, 250);
            polarHexagons(7, size1+sin(frameCount/12)*10, 250);
        
          //polarOctagons
        fill(255, 240, 140,130);
     //	polarHeptagons(25, 1+sin(frameCount/10)*20, 325);
            polarHeptagons(21, 1+sin(frameCount/10)*15, 250);
        
        
        fill (254, 157, 99, 140);
    //	polarTriangles(25, 1+sin(frameCount/10)*20, 350);
        polarTriangles(24, 1+sin(frameCount/10)*20, 350);
        polarPentagons(24, 1+cos(frameCount/10)*18, 350);
        
    }
    let number = 1;
    
    let lapse = 0;    // mouse timer
    function mousePressed(){
      if (millis() - lapse > 400){
        if (soundPlaying) {
          sound1.stop();
          sound2.stop();
          sound3.stop();
          sound4.stop();
          sound5.stop();
          soundPlaying = false;
            } else {
                if (number == 1){
                  sound1.play();
                  number = 2;
                } else if (number == 2){
                  sound2.play();
                  number = 3;
                } else if (number == 3){
                  sound3.play();
                  number = 4;
                } else if (number == 4){
                  sound4.play();
                  number = 5;
                } else if (number == 5){
                  sound5.play();
                  number = 1;
                }
                soundPlaying = true;
            }
        lapse = millis();
      } 
    }
    
    function keyPressed(){
      if(sound1.isPlaying()) {
        sound1.stop();
        sound2.play();
        number = 3;
      } else if (sound2.isPlaying()) {
        sound2.stop();
        sound3.play();
        number = 4;
      } else if (sound3.isPlaying()) {
        sound3.stop();
        sound4.play();
        number = 5;
      } else if (sound4.isPlaying()) {
        sound4.stop();
        sound5.play();
        number = 1;
      } else if (sound5.isPlaying()) {
        sound5.stop();
        sound1.play();
        number = 2;
      }
    }
    
    function keyTyped() {
      if (key === '1') {
        if(!sound1.isPlaying()) {
          sound1.play();
          sound2.stop();
          sound3.stop();
          sound4.stop();
          sound5.stop();
          number = 2;
          soundPlaying = true;
        }
      }
      if (key === '2') {
        if(!sound2.isPlaying()) {
          sound1.stop();
          sound2.play();
          sound3.stop();
          sound4.stop();
          sound5.stop();
          number = 3;
          soundPlaying = true;
        }
      }
      if (key === '3') {
        if(!sound3.isPlaying()) {
          sound1.stop();
          sound2.stop();
          sound3.play();
          sound4.stop();
          sound5.stop();
          number = 4;
          soundPlaying = true;
        }
      }
      if (key === '4') {
        if(!sound4.isPlaying()) {
          sound1.stop();
          sound2.stop();
          sound3.stop();
          sound4.play();
          sound5.stop();
          number = 5;
          soundPlaying = true;
        }
      }
      if (key === '5') {
        if(!sound5.isPlaying()) {
          sound1.stop();
          sound2.stop();
          sound3.stop();
          sound4.stop();
          sound5.play();
          number = 1;
          soundPlaying = true;
        }
      }
    }
    
    // https://github.com/liz-peng/p5.Polar
    // Created by Liz Peng
    // Version 2.1 Aug 13th 2020             
    
    // let each sketches have their center point
    p5.prototype.setCenter = function(x, y) {
      if(this.center === undefined) {
       this.center = { x, y }
      }
      else {
        this.translate(this.center.x = x, this.center.y = y);
      }
    }
    
    // Triangle
    p5.prototype.polarTriangle = function(_angle, _radius, _distance) {
      this.push();
      const _radians = this.radians(_angle);
      this.translate(this.sin(_radians)*_distance, this.cos(_radians)*-_distance);
      this.rotate(this.radians(_angle)); 
      this.triangle(
        this.sin(0), this.cos(0)*-_radius,
        this.sin(this.TWO_PI*1/3)*_radius, this.cos(this.TWO_PI*1/3)*-_radius,
        this.sin(this.TWO_PI*2/3)*_radius, this.cos(this.TWO_PI*2/3)*-_radius
      );
      this.pop();
    }
    
    p5.prototype.polarTriangles = function(_num, _radius, _distance, callback) {
      const _angle = 360/_num;
      for(let i=1; i<=_num; i++) {
        if(callback) {
          const _result = callback(i, _angle, _radius, _distance);
          this.polarTriangle(_result[0]*_result[1], _result[2], _result[3]);
        }
        else this.polarTriangle(i*_angle, _radius, _distance);
      }
    }
    
    // Ellipse
    p5.prototype.polarEllipse = function(_angle, _radiusW, _radiusH, _distance) {
      this.push();
      const _radians = this.radians(_angle);
      this.translate(this.sin(_radians)*_distance, this.cos(_radians)*-_distance);
      this.rotate(this.radians(_angle));
      this.ellipse(0, 0, _radiusW*2, _radiusH*2);
      this.pop();
    }
    
    p5.prototype.polarEllipses = function(_num, _radiusW, _radiusH, _distance, callback) {
      const _angle = 360/_num;
      for(let i=1; i<=_num; i++) {
        if(callback) {
          const _result = callback(i, _angle, _radiusW, _radiusH, _distance);
          this.polarEllipse(_result[0]*_result[1], _result[2], _result[3], _result[4]);
        }
        else this.polarEllipse(i*_angle, _radiusW, _radiusH, _distance);
      }
    }
    
    // Line
    p5.prototype.polarLine = function(_angle, _radius, _distance) {
      this.push();
      const _radians = this.radians(_angle);
      this.translate(this.sin(_radians)*_distance, this.cos(_radians)*-_distance);
      this.rotate(this.radians(_angle));
      this.line(0, _radius, 0, -_radius);
      this.pop();
    }
    
    p5.prototype.polarLines = function(_num, _radius, _distance, callback) {
      const _angle = 360/_num;
      for(let i=1; i<=_num; i++) {
        if(callback) {
          const _result = callback(i, _angle, _radius, _distance);
          this.polarLine(_result[0]*_result[1], _result[2], _result[3]);
        }
        else this.polarLine(i*_angle, _radius, _distance);
      }
    }
    
    // Square
    p5.prototype.polarSquare = function(_angle, _radius, _distance) {
      this.push();
      const _radians = this.radians(_angle);
      this.translate(this.sin(_radians)*_distance, this.cos(_radians)*-_distance);
      this.rotate(this.radians(_angle));
      this.square(-_radius, -_radius, _radius*2);
      this.pop();
    }
    
    p5.prototype.polarSquares = function(_num, _radius, _distance, callback) {
      const _angle = 360/_num;
      for(let i=1; i<=_num; i++) {
        if(callback) {
          const _result = callback(i, _angle, _radius, _distance);
          this.polarSquare(_result[0]*_result[1], _result[2], _result[3]);
        }
        else this.polarSquare(i*_angle, _radius, _distance);
      }
    }
    
    // Pentagon
    p5.prototype.polarPentagon = function(_angle, _radius, _distance) {
      this.push();
      const _radians = this.radians(_angle);
      this.translate(this.sin(_radians)*_distance, this.cos(_radians)*-_distance);
      this.rotate(this.radians(_angle)+60);
      this.beginShape();
      for(let i=1; i<=5; i++) {
        this.vertex(this.cos(this.TWO_PI*i/5)*_radius, this.sin(this.TWO_PI*i/5)*_radius);
      }
      this.endShape(this.CLOSE);
      this.pop();
    }
    
    p5.prototype.polarPentagons = function(_num, _radius, _distance, callback) {
      const _angle = 360/_num;
      for(let i=1; i<=_num; i++) {
        if(callback) {
          const _result = callback(i, _angle, _radius, _distance);
          this.polarPentagon(_result[0]*_result[1], _result[2], _result[3]);
        }
        else this.polarPentagon(i*_angle, _radius, _distance);
      }
    }
    
    // Hexagon
    p5.prototype.polarHexagon = function(_angle, _radius, _distance) {
      this.push();
      const _radians = this.radians(_angle);
      this.translate(this.sin(_radians)*_distance, this.cos(_radians)*-_distance);
      this.rotate(this.radians(_angle));
      this.beginShape();
        for(let i=0; i<6; i++) {
          this.vertex(
            this.cos(this.TWO_PI*i/6)*_radius, this.sin(this.TWO_PI*i/6)*_radius
          );
        }
      this.endShape(this.CLOSE);
      this.pop();
    }
    
    p5.prototype.polarHexagons = function(_num, _radius, _distance, callback) {
      const _angle = 360/_num;
      for(let i=1; i<=_num; i++) {
        if(callback) {
          const _result = callback(i, _angle, _radius, _distance);
          this.polarHexagon(_result[0]*_result[1], _result[2], _result[3]);
        }
        else this.polarHexagon(i*_angle, _radius, _distance);
      }
    }
    
    // Heptagon
    p5.prototype.polarHeptagon = function(_angle, _radius, _distance) {
      this.push();
      const _radians = this.radians(_angle);
      this.translate(this.sin(_radians)*_distance, this.cos(_radians)*-_distance);
      this.rotate(this.radians(_angle)+11);
      this.beginShape();
      for(let i=1; i<=7; i++) {
        this.vertex(this.cos(this.TWO_PI*i/7)*_radius, this.sin(this.TWO_PI*i/7)*_radius);
      }
      this.endShape(this.CLOSE);
      this.pop();
    }
    
    p5.prototype.polarHeptagons = function(_num, _radius, _distance, callback) {
      const _angle = 360/_num;
      for(let i=1; i<=_num; i++) {
        if(callback) {
          const _result = callback(i, _angle, _radius, _distance);
          this.polarHeptagon(_result[0]*_result[1], _result[2], _result[3]);
        }
        else this.polarHeptagon(i*_angle, _radius, _distance);
      }
    }
    
    // Octagon
    p5.prototype.polarOctagon = function(_angle, _radius, _distance) {
      this.push();
      const _radians = this.radians(_angle);
      this.translate(this.sin(_radians)*_distance, this.cos(_radians)*-_distance);
      this.rotate(this.radians(_angle));
      this.beginShape();
      for(let i=1; i<=8; i++) {
        this.vertex(this.cos(this.TWO_PI*i/8)*_radius, this.sin(this.TWO_PI*i/8)*_radius);
      }
      this.endShape(this.CLOSE);
      this.pop();
    }
    
    p5.prototype.polarOctagons = function(_num, _radius, _distance, callback) {
      const _angle = 360/_num;
      for(let i=1; i<=_num; i++) {
        if(callback) {
          const _result = callback(i, _angle, _radius, _distance);
          this.polarOctagon(_result[0]*_result[1], _result[2], _result[3]);
        }
        else this.polarOctagon(i*_angle, _radius, _distance);
      }
    }
    
    // Polygon
    p5.prototype.polarPolygon = function(_edge, _angle, _radius, _distance) {
      this.push();
      const _radians = this.radians(_angle);
      this.translate(this.sin(_radians)*_distance, this.cos(_radians)*-_distance);
      this.rotate(this.radians(_angle));
      this.beginShape();
      for(let i=1; i<=_edge; i++) {
        this.vertex(this.cos(this.TWO_PI*i/_edge)*_radius, this.sin(this.TWO_PI*i/_edge)*_radius);
      }
      this.endShape(this.CLOSE);
      this.pop();
    }
    
    p5.prototype.polarPolygons = function(_num, _edge, _radius, _distance, callback) {
      const _angle = 360/_num;
      for(let i=1; i<=_num; i++) {
        if(callback) {
          const _result = callback(i, _angle, _edge, _radius, _distance);
          this.polarPolygon(_result[2], _result[0]*_result[1], _result[3], _result[4]);
        }
        else this.polarPolygon(_edge, i*_angle, _radius, _distance);
      }
    }
    