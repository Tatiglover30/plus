var walt=0;

//The setup function only happens once
function setup() {
	createCanvas(500, 500); //create a 500px X 500px canvas
}

//The draw function happens over and over again
function draw() {
  background(27,45,181); //blue background
  stroke(245,39,132); //pink
  fill(255,mouseY,127,150); // an RGB color for the inside of the circle (the last number refers to transparency (min. 0, max. 255))
  ellipse(300,mouseX,30,20); // center of canvas, 20px dia
  strokeWeight(5);
  rect(50,100,walt,walt);
  walt= walt + 7;


  textFont("Impact");
  textSize(35);
  text("let party",150,300);
  

}

function mousePressed(){
if (walt >= 100)
{  walt = 0;
} else {
 walt = walt+7;}

}