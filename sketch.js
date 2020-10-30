
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ground, paper1, dust1;
var world;

function setup() {
	createCanvas(800, 700);

	rectMode(CENTER);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground = new Ground(width/2,620,width,20);

	//paper1 = new Paper(200,200,20);
	paper1 = new Paper(400,10,50);

	dust1 = new dustbin(700,600,150,20);
	dust2 = new dustbin(625,565,20,100);
	dust3 = new dustbin(775,565,20,100);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

 /* paper1.body.position.x = mouseX;
  paper1.body.position.y = mouseY;*/

 
  paper1.display();
  dust1.display();
  dust2.display();
  dust3.display();
  ground.display();
  //keyPressed();
 
}

function keyPressed(){
	if (keyCode === UP_ARROW){
		Matter.Body.applyForce(paper1.body,paper1.body.position,{x:130,y:-145});
	}
}



