var x=10;
var y=50;
var speed =3;
function setup() {
  createCanvas (600, 400);
}

function draw() {
background (255);
text ("Franchesca:");
stroke (0, 255, 255); //outline of the shapes
fill (255,0,0);
ellipse(x, y, 50, 50 );

x=x +speed; // make the shape move, the higher the number the faster it moves. 

if (x>=width){
  speed = -3;
}
if (x<=0){
  speed = 3;
}
}