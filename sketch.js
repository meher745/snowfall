var bg,snowi,crystali,crys;
const Engine= Matter.Engine;
const World=Matter.World;
const Body=Matter.Body;

function preload(){
  bg=loadImage("snow3.jpg");
}

function setup() {
  createCanvas(displayWidth-20,displayHeight-20);
  engine = Engine.create();
  world = engine.world;
  //createSprite(400, 200, 50, 50);
  snowi=new snow(100,20);
  snowi.scale=0.3;
  snow1=new snow(800,20);
  snow1.scale=0.3;
  snow2=new snow(200,20);
  snow2.scale=0.3;
  snow3=new snow(600,20);
  snow3.scale=0.3;
  snow4=new snow(300,20);
  snow4.scale=0.3;
  snow5=new snow(700,20);
  snow5.scale=0.3;
  snow6=new snow(400,20);
  snow6.scale=0.3;
  snow7=new snow(500,20);
  snow6.scale=0.3;
}

function draw() {
  background(bg);  
  Engine.update(engine);
  snowi.display();
  snow1.display();
  snow2.display();
  snow3.display();
  snow4.display();
  snow5.display();
  snow6.display();
  snow7.display();
  drawSprites();
}