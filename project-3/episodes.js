function setup() {
  createCanvas(windowWidth, windowHeight);
  angleMode(DEGREES);
  rectMode(CENTER)
}

function preload() {
  fontBold = loadFont("fonts/PTSerif-Bold.ttf");
  fontItalic = loadFont("fonts/PTSerif-Italic.ttf");
  font = loadFont("fonts/PTSerif-Regular.ttf");
}

function draw() {
  background(187,38,31);
  textFont(fontBold);
  textSize(windowHeight/4.8);
  fill(300,300,300);


  rotate(-90);
  translate(-windowHeight, 0);

  let x = map(mouseX, 0, width, 0,5);
  let x2 = map(mouseX, 0, width, 5,15);
  let x3 = map(mouseX, 0, width, 10,30);
  let x4 = map(mouseX, 0, width, 15,50);
  let x5 = map(mouseX, 0, width, 15,70);
  let x6 = map(mouseX, 0, width, 15,100);
  let x7 = map(mouseX, 0, width, 15,120);
  let x8 = map(mouseX, 0, width, 15,150);
  let x9 = map(mouseX, 0, width, 15,170);


  text("EPISODES", 0, windowWidth/8+x);
  text("EPISODES", 0, windowWidth/7+x2);
  text("EPISODES", 0, windowWidth/5.5+x3);
  text("EPISODES", 0, windowWidth/4.5+x4);
  text("EPISODES", 0, windowWidth/3+x5);
  text("EPISODES", 0, windowWidth/2.1+x6);
  text("EPISODES", 0, windowWidth/1.6+x7);
  text("EPISODES", 0, windowWidth/1.25+x8);
  text("EPISODES", 0, windowWidth+x9);



}