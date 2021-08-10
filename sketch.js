const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;

var issImg, spaceBg, spacecraft1Img, spacecraft2Img, spacecraft3Img, spacecraft4Img;

var iss, spacecraft;
var hasDocked = false;

function preload() {
  issImg = loadImage("iss.png");
  spaceBg = loadImage("spacebg.jpg");
  spacecraft1Img = loadImage("spacecraft1.png");
  spacecraft2Img = loadImage("spacecraft2.png");
  spacecraft3Img = loadImage("spacecraft3.png");
  spacecraft4Img = loadImage("spacecraft4.png");
}

function setup() {
  createCanvas(800,400);

  engine = Engine.create();
  world = engine.world;

  iss = createSprite(330, 150);
  iss.addImage(issImg);
  iss.scale = 0.6;

  spacecraft = createSprite(285, 240);
  spacecraft.addImage(spacecraft1Img);
  spacecraft.scale = 0.15;
}

function draw() {
  background(spaceBg); 

  Engine.update(engine);

  if(!hasDocked) {
    spacecraft.x = spacecraft.x + random(-1,1);

    if(keyDown("UP_ARROW")) {
      spacecraft.y = spacecraft.y - 2;
    }

    if(keyDown("DOWN_ARROW")) {
      spacecraft.addImage(spacecraft2Img);
    }

    if(keyDown("LEFT_ARROW")) {
      spacecraft.addImage(spacecraft3Img);
      spacecraft.x = spacecraft.x - 2;
    }

    if(keyDown("RIGHT_ARROW")) {
      spacecraft.addImage(spacecraft4Img);
      spacecraft.x = spacecraft.x + 2;
    }
  }

  if(spacecraft.x <= (iss.x - 10) && spacecraft.y <= (iss.y + 70)) {
    hasDocked = true;
    textSize(30);
    fill("white");
    text("Docking Successful!", 200,350);
  }

  drawSprites();
}