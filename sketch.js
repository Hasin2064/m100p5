var movestuff=250
//The setup function only happens once
function setup() {
	createCanvas(500, 300); //create a 500px X 500px canvas
	}

//The draw function happens over and over again
function draw() {
	
background(mouseX,216,230);// background is sea green
  //circle
  stroke(88, 214, 141); // an RGB color for the circle's border
  strokeWeight(10);
  fill(175, 122, 197,movestuff); // an RGB color for the inside of the circle (the last number refers to transparency (min. 0, max. 255))
  ellipse(mouseX,height/2,100,movestuff); // center of canvas, 20px dia
  fill(255,255,254,movestuff);
  
  rect(50,200,400,100);
}

 function mousePressed(){  // everytime pressed change the background color
 	if (movestuff<0)
 	   {movestuff=250;}
 	else
 		{movestuff=movestuff-10;}
 }