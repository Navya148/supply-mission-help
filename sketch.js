function setup() {
  createCanvas(1200,800); 
  fixedRect = createSprite(200, 200, 50, 80);
  fixedRect.shapeColor = 'green';
  fixedRect.velocityX = 5
  movingRect = createSprite(400, 200, 80, 30);
  movingRect.shapeColor = 'green'
  movingRect.velocityX = -5
  gameObject1 = createSprite(800,200,100,60); 
  gameObject1.shapeColor = 'purple'; 
  gameObject1.velocityX = -5
  gameObject2 = createSprite(600,500,100,60);
  gameObject2.shapeColor = 'red';
  gameObject3 = createSprite(1000,100,100,60);
  gameObject3.shapeColor = 'pink';
  gameObject4 = createSprite(200,400,100,60);
  gameObject4.shapeColor = 'yellow';
}

function draw() {
  background(255,255,255);
  //movingRect.x = World.mouseX;
  //movingRect.y = World.mouseY; 
  text(movingRect.x - fixedRect.x,100,100)
  if (isTouching(movingRect, gameObject3)){ 
    movingRect.shapeColor = 'blue'; gameObject3.shapeColor = 'blue'; 
  }

  bounceOff(movingRect, fixedRect)
  bounceOff(fixedRect, gameObject1)



drawSprites();
}

