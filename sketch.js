
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
var dustbinObj,groundObject	
var world;


function setup() {
	createCanvas(1600, 700);
	rectMode(CENTER);


	engine = Engine.create();
	world = engine.world;
	
	groundObject=new ground(width/2,670,width,10);
	dustbinObj=new dustbin(1200,650);
	paper = new Paper(200,665);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(230);
 Engine.update(engine)

	if (keyDown("UP_ARROW")) {
		Matter.Body.applyForce(paper.body,paper.body.position,{x:150,y:-100});

	}

  groundObject.display();
  dustbinObj.display();
  paper.display();	

}

