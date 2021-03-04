
function preload() {
 catImg = loadImage("cat1.png");
 catWalking = loadAnimation("cat2.png","cat3.png");
 catSitting = loadImage ("cat4.png");
 gardenImg = loadImage ("garden.png");
 mouseAni = loadAnimation("mouse1.png","mouse2.png","mouse3.png");
 mouseImg = loadImage("mouse4.png");

}

function setup(){
    createCanvas(1000,800);
    tom = createSprite(200,200);
    tom.addImage(catImg);
    jerry = createSprite(200,250);
    jerry.addAnimation("jumping",mouseAni);
    garden=createSprite(200,300);
    garden.addImage(gardenImg);
   tom.scale = 0.2;
   jerry.scale = 0.15;
}

function draw() {

    background(255);
    if (tom.isTouching(jerry)){
      tom.changeImage(catSitting);
      jerry.changeImage(mouseImg);
    }
    drawSprites();
}


function keyPressed(){
   if (keyDown(LEFT_ARROW)){
     tom.velocityX = -5;
     tom.changeAnimation("walking",catWalking);
   }
  //For moving and changing animation write code here


}
