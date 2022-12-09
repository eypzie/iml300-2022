let mic;
var words = [
  "it’s",
  "normal",
  "to",
  "grow",
  "&",
  "be",
  "a",
  "human",
  "who",
  "eats",
  "food ",
  "and",
  "gets",
  "strong",
  "which ",
  "is",
  " what",
  "I",
  "did",
  "but",
  "I",
  " felt",
  "like",
  "I",
  "was",
  "like",
  "failing",
];
var index = 0;

//loading image
function preload() {
  WYAA = loadImage("asset/WYAA_background.jpg");
  fontBold = loadFont("fonts/PTSerif-Bold.ttf");
  fontItalic = loadFont("fonts/PTSerif-Italic.ttf");
  font = loadFont("fonts/PTSerif-Regular.ttf");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0);

  //background image
  image(WYAA, 0, 0, 600, 800);

  //mic set up
  mic = new p5.AudioIn();
  mic.start();
}

function draw() {
  let colors1 = ["#CB3302", "#69200D", "#CB3302", "#CB3302", "#CB3302"];
  let colors2 = ["#F9B849A3", "#DD7C48A3", "#5E140AA3"];
  let w = (460, 490);
  let h = (320, 400);
  
//  if (mouseIsPressed) {
//    text("intrusctions: SCREAM! no really scream. SMASH your keyboard!! get ANGRY!!!!", 150, 20);
//    textFont(fontBold);
//  } else {}

  // red = (202, 49, 0, 100);
  // yellow = (250,185,74,100);
  //WHEN YOU ARE ANGRY words appear
  let vol = mic.getLevel();

  if (vol >= 0.2) {
    fill(random(colors1));
    textFont(fontBold);
    textSize(61);
    text("WHEN YOU ARE ANGRY", 3 + vol * 10, 300 + vol * 10);
  }
  if (vol >= 0.4) {
    fill(random(colors2));
    textSize(random(40, 90));
    text("ANGRY", random(0, 600), random(0, 800));
  }

  // else {
  //   fill(0, 0, 0, 0);
  //   text("scream", 0, 0);
  // }
}

function keyPressed() {
  //small words

  let x = random(0, 600);
  let y = random(0, 800);
  let a = random(0, 600);
  let b = random(0, 800);
  let q = random(0, 600);
  let w = random(0, 800);

  fill(220, 220, 220, random(70, 225));
  textSize(14);
  textFont(fontItalic);
  // for (let col = 0; col < y; col = col + x) {
  text(words[index], x, y);
  text(
    words[index],
    mouseX / random(1, 5) + 50,
    mouseY / random(1, 5) + random(-50, 50)
  );
  text(words[index], mouseX + 10, mouseY + 300);
  text(words[index], a, b);
  text(words[index], q, w);
  text(words[index], a + 40, b + 40);
  text(words[index], q * 2, w * 2);
  text(words[index], x + 40, y + 40);

  text(words[index], x * 1.5, y * 1.5);
  text(
    words[index],
    mouseX / random(1, 7) + 70,
    mouseY / random(1, 7) + random(-70, 70)
  );
  text(words[index], mouseX + 10, mouseY + 300);
  text(words[index], a, b);
  text(words[index], q, w);
  text(words[index], a + 40, b + 40);
  text(words[index], q * 2, w * 2);
  text(words[index], x + 40, y + 40);
  // }

  index = floor(random(words.length));
  // console.log(index);
  if (index == words.length) {
    index = 0;
  }

}