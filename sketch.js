
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint = Matter.Constraint;
var bobObject1,bobObject2,bobObject3, bobObject4,bobObject5, roofObject
var ropeobj1,ropeobj2,rope3, ropeobj4,ropeobj5;
var world;


function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);


	engine = Engine.create();
	world = engine.world;

	//roofObject=new roof(width/2,height/4,width/2,20);

	bobobjectDiameter=40;

	startbobobjectPositionX=700;
	startbobobjectPositionY=0;
	bobObject1=new bob(200,400,40);
	bobObject2=new bob(300,400,40);
	bobObject3=new bob(400,400,40);
	bobObject4=new bob(500,400,40);
	bobObject5=new bob(800,400,40);
	
	
	//Create a Ground
	

	var render = Render.create({
	  element: document.body,
	  engine: engine,
	  options: {
	    width: 1500,
	    height: 800,
	    wireframes: false
	  }
	});


	ropeobj1= new rope(bobObject1.body,{x:200,y:400})
	ropeobj2= new rope(bobObject2.body,{x:300,y:400});
	ropeobj3= new rope(bobObject3.body,{x:400,y:400});
	ropeobj4= new rope(bobObject4.body,{x:500,y:400});
	ropeobj5= new rope(bobObject5.body,{x:600,y:400});

	Engine.run(engine);
	//Render.run(render);
  
}


function draw() {
  rectMode(CENTER);
  background(230);
 // roofObject.display();

  ropeobj1.display()
  ropeobj2.display()
  ropeobj3.display()
  ropeobj4.display()
  ropeobj5.display()	
  bobObject1.display();
  bobObject2.display();
  bobObject3.display();
  bobObject4.display();
  bobObject5.display();
 
}

function keyPressed() {
  	if (keyCode === UP_ARROW) {

    	Matter.Body.applyForce(bobObject1.body,bobObject1.body.position,{x:-50,y:-45});

  	}
}









