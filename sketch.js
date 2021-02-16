// HOW TO PLAY: Press the up key and guide the paper ball, at the same time, to the the dustbin. 
// Release the up key once the paper ball is inside the dustbin
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
var dustbinObj,groundObject, paper;	
var world;


function setup() {
	createCanvas(1600, 700);
	rectMode(CENTER);


	engine = Engine.create();
	world = engine.world;
	
	groundObject=new ground(width/2,670,width,20);
	dustbinObj=new dustbin(1200,650);
	paper = new Paper(100, 200, 30, 30);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(230);
 

  groundObject.display();
  dustbinObj.display();
  /* if (keyDown("up")){
	  paper.Bodies.setVelocity(0.1);
	  paper.Bodies

  } */
  paper.display();

}

