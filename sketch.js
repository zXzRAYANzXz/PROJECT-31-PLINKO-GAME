const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine, world;

var particles = [];
var plinkos = [];
var divisions = [];
var divisionHeight=200;

function setup() {
  createCanvas(800,400);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(width/2,height,width,20);

  for(var k = 0; k <=width; k = k + 80){
    divisions.push(new Division(k, height-divisionHeight/2, 10,divisionHeight));
  }
  for (var j = 75; j <=width; j=j+50){
    plinkos.push(new Plinkos(j,75));
  }
  for (var j = 75; j <=width; j=j+50){
    plinkos.push(new Plinkos(j,175));
  }
  for (var j = 75; j <=width; j=j+50){
    plinkos.push(new Plinkos(j,275));
  }
  for (var j = 75; j <=width; j=j+50){
    plinkos.push(new Plinkos(j,375));
  }
  
}

function draw() {
  background(255,255,255);  
  Engine.update(engine);
  ground.display();
  
  for(var i = 0; i < plinkos.length; i++){
    plinkos[i].display();
  }
  for(var j = 0; j < plinkos.length; j++){
    particles[j].display();
  }
  for(var k = 0; k < plinkos.length; k++){
    divisions[k].display();
  }

  drawSprites();
}