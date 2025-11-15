let myLogo;
let angle = 0;
      
function preload() {
    myLogo = loadImage("images/logo.png");
}
      
function setup() {
    let canvas = createCanvas(50, 50);
    canvas.parent('logo'); 
    imageMode(CENTER);
}
      
function draw() {
    background(0);
      
    let x = width / 2.0;
    let y = height / 2.0;
      
    push();
    translate(x, y);
    rotate(radians(angle));

    let imageWidth = myLogo.width * 0.1;
    let imageHeight = myLogo.height * 0.1; 
    image(myLogo, 0, 0, imageWidth, imageHeight);
    pop();
    
    angle += 0.35;
}
function windowResized() {
    let container = document.getElementById('logo');
    let w = container.offsetWidth;
    let h = container.offsetHeight;
    resizeCanvas(w, h);
}