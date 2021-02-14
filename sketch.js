const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
var partical1
var engine,world
function setup() {
  createCanvas(800,400);
  engine = Engine.create();
    world = engine.world;
}

function draw() {
  background(0,0,0);  
  drawSprites();
  Engine.update(engine);

  //walls
  wallSprite=createSprite(800,300,10,200,isStatic=true)
  wallSprite=createSprite(700,300,10,200,isStatic=true)
  wallSprite=createSprite(600,300,10,200,isStatic=true)
  wallSprite=createSprite(500,300,10,200,isStatic=true)
  wallSprite=createSprite(400,300,10,200,isStatic=true)
  wallSprite=createSprite(300,300,10,200,isStatic=true)
  wallSprite=createSprite(200,300,10,200,isStatic=true)
  wallSprite=createSprite(100,300,10,200,isStatic=true)
  wallSprite=createSprite(0,300,10,200,isStatic=true)
  

  //top line of balls
  ballSprite1=createSprite(0,50,10,10,isStatic=true)
  ballSprite2=createSprite(80,50,10,10,isStatic=true)
  ballSprite3=createSprite(160,50,10,10,isStatic=true)
  ballSprite4=createSprite(240,50,10,10,isStatic=true)
  ballSprite5=createSprite(320,50,10,10,isStatic=true)
  ballSprite6=createSprite(400,50,10,10,isStatic=true)
  ballSprite7=createSprite(480,50,10,10,isStatic=true)
  ballSprite8=createSprite(560,50,10,10,isStatic=true)
  ballSprite9=createSprite(640,50,10,10,isStatic=true)
  ballSprite10=createSprite(720,50,10,10,isStatic=true)
  ballSprite11=createSprite(800,50,10,10,isStatic=true)

  //middle Line of balls
  ballSprite12=createSprite(40,100,10,10,isStatic=true)
  ballSprite13=createSprite(120,100,10,10,isStatic=true)
  ballSprite14=createSprite(200,100,10,10,isStatic=true)
  ballSprite15=createSprite(280,100,10,10,isStatic=true)
  ballSprite16=createSprite(360,100,10,10,isStatic=true)
  ballSprite17=createSprite(440,100,10,10,isStatic=true)
  ballSprite18=createSprite(520,100,10,10,isStatic=true)
  ballSprite19=createSprite(600,100,10,10,isStatic=true)
  ballSprite20=createSprite(680,100,10,10,isStatic=true)
  ballSprite21=createSprite(760,100,10,10,isStatic=true)

  //bottem line of balls
  ballSprite1=createSprite(0,150,10,10,isStatic=true)
  ballSprite1=createSprite(80,150,10,10,isStatic=true)
  ballSprite1=createSprite(160,150,10,10,isStatic=true)
  ballSprite1=createSprite(240,150,10,10,isStatic=true)
  ballSprite1=createSprite(320,150,10,10,isStatic=true)
  ballSprite1=createSprite(400,150,10,10,isStatic=true)
  ballSprite1=createSprite(480,150,10,10,isStatic=true)
  ballSprite1=createSprite(560,150,10,10,isStatic=true)
  ballSprite1=createSprite(640,150,10,10,isStatic=true)
  ballSprite1=createSprite(720,150,10,10,isStatic=true)
  ballSprite1=createSprite(800,150,10,10,isStatic=true)

  partical1 = new partical(400,20,10)

}