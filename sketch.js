

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;

var man_image;
var ground;
var ground_options;
var maxDrops = 100;
var drops = [];
var thunder1, thunder2, thunder3, thunder4;
var umbrella;
var thunder, thunderCreatedFrame = 0;
var ground;

function preload(){
  man_image = loadImage("walking_1.png")
 // man_image = loadAnimation("walking_1.png","walking_2.png","walking_3.png","walking_4.png","walking_5.png","walking_6.png","walking_7.png","walking_8.png");
  thunder1 = loadImage("1.png");
  thunder2 = loadImage("2.png");
  thunder3 = loadImage("3.png");
  thunder4 = loadImage("4.png");  
}

function setup(){
  var canvas = createCanvas(700,400);

  engine = Engine.create();
  world  = engine.world;
  
  umbrella = new Umbrella();

  ground = createSprite(350,395,700,10)
  
  
  if(frameCount%100===0){
    for(var i=0; i<maxDrops;i++){
      drops.push(new Drop(random(0,700),random(0,500),3,10));
     }
    }

}

function draw(){
  background(0);
  Engine.update(engine);

  var rand = Math.round(random(1,2));
  if(frameCount%80===0){
    thunderCreatedFrame = frameCount;
   thunder = createSprite(random(10,690),random(10,30),10,10);
   switch(rand){
     case 1 : thunder.addImage(thunder1);
     break;
     case 2 : thunder.addImage(thunder2);
     break;
     case 3 : thunder.addImage(thunder3);
     break;
     case 4 : thunder.addImage(thunder4);
     break;
     default : break;
   }

   thunder.scale = random(0.3,0.6)
   
  }


  if(thunderCreatedFrame + 20 === frameCount && thunder){
    thunder.destroy();
 }

  umbrella.display();
  ground.display();
  
  for(var i=0; i<maxDrops;i++){
    drops[i].display();
    drops[i].update();
  }
 
  
  drawSprites();
}