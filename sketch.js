//  Global variables
//  Global variables
var Balls = [];
var paddle;
var score = 0;
var Squares = [];
var start = false;
var numBalls;

function setup(){
  var cnv = createCanvas(800, 800);
  cnv.position((windowWidth-width)/2, 30);
  background(20, 20, 20);
  //# of boids loaded
  numBalls = 1;
  loadBalls(numBalls);

  //numSquares = 20;
  //loadSquares(numSquares);

  var loc = createVector(400, 550)
  var vel = createVector(0, 0);
  var width = 100;
  var length = 20;
  var col = color(255, 255, 255);
  paddle = new Paddle(loc, vel, width, length, col);
}
//
//load balls
//
function loadBalls(numBalls){
  for(var i = 0; i < numBalls; i++){
    //where the balls are spawned in
    var loc = createVector(random(100, 600), 20);
    var vel = createVector(random(-15, 10), random(15, 10));
    var rad = 25
    var col = color(random(0, 255), random(0, 255), random(0, 255));
    var sp = 3
    var b = new Ball(loc, vel, rad, col, sp);
    //add balls to the array
    Balls.push(b);
  }
}
function mouseClicked() {
start=true
}
function keyPressed(){
  if(keyCode === 32) {
    start=false
  }
}


function draw(){
  stroke(255,255,255);
  if(start===false){
  fill(0,120,220);
  rect(200, 200, 400, 400);
  fill(0,255,255);
  rect(212, 212, 375, 375);
  fill(0,120,255);
  textSize(40);
  text("Ballz to the Wall", 250, 400);
  fill(255,random(0,255),random(0,255));
  textSize(15);
  text("Click to Begin", 360, 470);
  text("Spacebar to Pause", 340, 510);
  text("F5 to Restart", 345, 550);

}
if(start===true){
  background(2*score,5*score,20*score);
  if(score>=10){
    background(8*score, 0*score, 8*score);
  }
  if(score>=15){
    background(2*score, 2*score, 2*score);
  }  if(score>=20){
      background(10*score, 2*score, 2*score);
    }
    if(score>=25){
      background(2*score, 5*score, 8*score);
    }
    if(score>=30){
      background(8*score, 5*score, 20*score);
    }
    if(score>=35){
      background(2*score, 3*score, 2*score);
    }
    if(score>=40){
      background(1*score, 0*score, 2*score);
    }
    if(score>=60){
      background(2*score, 5*score, 20*score);
    }
  //control the score
  textSize(32);
  fill(0, 255, 0);
  text(score, 50, 50)
  //get rid of outlines
  noStroke();
  paddle.run();
  for(var i = 0; i < Balls.length; i++){
    Balls[i].run();
    var aBalls = Balls[i];
    var distY = abs(aBalls.loc.y - 560)
    if((distY < 20) && (aBalls.loc.x > mouseX - 100)
    && (aBalls.loc.x < mouseX + 130) && (aBalls.vel.y > 0)){
    aBalls.vel.y = -aBalls.vel.y
    aBalls.vel.y = aBalls.vel.y + random(-5,0)
    aBalls.vel.x = aBalls.vel.x - random(-3, 3);
    aBalls.col = aBalls.col + random(-30, -15)
      score = score + 1;
    }
  }
    fill(255,0,0);
    triangle(-50, 800, 20, 800, -15, 750);
    triangle(0, 800, 70, 800, 35, 750);
    triangle(50, 800, 120, 800, 85, 750);
    triangle(100, 800, 170, 800, 135, 750);
    triangle(150, 800, 220, 800, 185, 750);
    triangle(200, 800, 270, 800, 235, 750);
    triangle(250, 800, 320, 800, 285, 750);
    triangle(300, 800, 370, 800, 335, 750);
    triangle(350, 800, 420, 800, 385, 750);
    triangle(400, 800, 470, 800, 435, 750);
    triangle(450, 800, 520, 800, 485, 750);
    triangle(500, 800, 570, 800, 535, 750);
    triangle(550, 800, 620, 800, 585, 750);
    triangle(600, 800, 670, 800, 635, 750);
    triangle(650, 800, 720, 800, 685, 750);
    triangle(700, 800, 770, 800, 735, 750);
    triangle(750, 800, 820, 800, 785, 750);


  }

}
//draw boids + mouse controlled ball
