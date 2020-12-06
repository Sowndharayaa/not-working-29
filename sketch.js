const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
// const Constraint = Matter.Constraint;
// const Render = Matter.Render;

//var box1,box2;

function preload()
{

}

function setup() {
	createCanvas(1500,700);


	engine = Engine.create();
  world = engine.world;

  //stand = new Ground (600,250,20,10)
  
  

  // var render = Render.create({
  //   element:document.body,
  //   engine:engine,
  //   options:{
  //     width:1500,
  //     height:700
  //   }
  // })
  // Render.run(render)

	//Create the Bodies Here.



	Engine.run(engine);
  
}


function draw() {
  //rectMode(CENTER);
  background("grey");
  //stand.display();

 
}