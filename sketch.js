var path1








function preload()
{
  //pre-load images
  path1 = loadImage("path.png")
  runner = loadAnimation("Runner-1.png","Runner-2.png");
}

function setup()
{
  createCanvas(400,400);

  //create sprites here
  path = createSprite(200,200);
  path.addImage(path1);
  path.scale=1.2;

  surfer = createSprite(200,300);
  surfer.addAnimation("running", runner);
  surfer.scale = 0.10;

  invisibleBoundary1 = createSprite(1,10,100,900);
  invisibleBoundary1.visible = false;

  invisibleBoundary2 = createSprite(400,10,100,900);
  invisibleBoundary2.visible = false;
}

function draw() 
{
  background(0);

  path.velocityY = 4;

  if(path.y > 400 )
  {
    path.y = height/2;
  }

  surfer.x = World.mouseX;

  surfer.collide(invisibleBoundary1);
  surfer.collide(invisibleBoundary2);
  



  drawSprites();

}
