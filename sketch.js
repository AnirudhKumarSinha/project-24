
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(1500, 700);


	engine = Engine.create();
	world = engine.world;

  ball=new Ball(200,660)

	ground = Bodies.rectangle(width/2, 670, width, 10 , {isStatic:true} );
 	World.add(world, ground);

	 
	//creating the ball
  


	//Create the Bodies Here.
    box1=new Wall(1207,580,20,100);
	box2=new Wall(1295,630,200,20);
	box3=new Wall(1385,580,20,100);
	
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  Engine.update(engine);


 



  box1.display();
  box2.display();
  box3.display();
  ball.display();



  
 
}

function keyPressed()
 { 
   if (keyCode === UP_ARROW) 
  { 
    Matter.Body.applyForce(ball.body,ball.body.position,{x:370,y:-350});
  } 
 }

