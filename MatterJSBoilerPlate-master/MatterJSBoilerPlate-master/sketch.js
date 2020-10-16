
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var paperObject;
var ground;
var box1,box2,box3;
var engine;
var world;
var ball;
var can1,can2,can3;
function preload()
{
	
}

function setup() {
	createCanvas(1200, 500);

	engine = Engine.create();
	world = engine.world;
	 
	paperObject = new Paper(100,380,25);
	World.add(world,paperObject);

	ground = new Ground(600,480,1200,50);
	World.add(world, ground);

	can1 = new Can(950,450,180,15)
	World.add(world, can1);

	can2 = new Can(870,400,15,100)
	World.add(world, can2);

	can3 = new Can(1030,400,15,100)
	World.add(world, can3);

	// engine = Engine.create();
	// world = engine.world; 

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  Engine.update(engine);

  fill("white");
  textSize(40);
  text("Please make sure to throw all your trash in the trashcan",100,50)
  
  paperObject.display();
  ground.display();
  can1.display();
  can2.display();
  can3.display();
 // drawSprites();
}

function keyPressed() {
	if (keyCode === UP_ARROW) {		 
		Body.applyForce(paperObject.body, paperObject.body.position, {x:25,y:-40});
		//Body.applyForce( paperObject.body, {x:paperObject.x, y:paperObject.y}, {x:0, y:-0.1});
	}

}

