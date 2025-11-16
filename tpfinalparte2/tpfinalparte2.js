//tpfinalparte2
//Gaspar Slomka 122906/3
//Lucio Lorenzo Montozzi 122803/7
//comisión 1
//https://www.youtube.com/watch?v=EWFD9X-27jU
let img = [];
let click;
let base;

function preload() {
  for (let i = 0; i < 9; i++) {
    img[i] = loadImage('data/' + i + '.png');
  }
  click = loadSound('data/clickbut.mp3')
}

function setup() {
  createCanvas(640, 480);
  base = new Juego();
  textSize(25);
}

function draw() {
  base.diapositiva();
}

function mousePressed() {
  base.botonMouse();
}
