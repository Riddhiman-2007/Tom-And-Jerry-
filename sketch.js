var tom , tomImage , tomImage2 , tomImage3 ;
var jerry ,  jerryImage , jerryImage2 , jerryImage3 ;
var ground , groundImage


function preload() {

    //load the images here

    tomImage = loadAnimation("cat1.png");
    tomImage2 = loadAnimation("cat2.png","cat3.png");
    tomImage3 = loadAnimation("cat4.png");

    jerryImage = loadAnimation("mouse1.png");
    jerryImage2 = loadAnimation("mouse2.png" , "mouse3.png");
    jerryImage3 = loadAnimation("mouse4.png");

    groundImage = loadImage("garden.png");

}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
    ground = createSprite(500,400);
    ground.addImage("ground",groundImage);
    ground.scale = 1;
  
    tom = createSprite(900,700);
    tom.addAnimation("tom",tomImage);
    tom.addAnimation("tom2",tomImage2);
    tom.addAnimation("tom3",tomImage3);
    tom.scale = 0.1;
  
    jerry = createSprite(70,700);
    jerry.addAnimation("jerry",jerryImage);
    jerry.addAnimation("jerry2",jerryImage2);
    jerry.addAnimation("jerry3",jerryImage3);
    jerry.scale = 0.1;
    
}

function draw() {

    background(255);
    //Write condition here to evalute if tom and jerry collide
  if(tom.x - jerry.x < (tom.width - jerry.width)/2 +40){
  jerry.changeAnimation("jerry3",jerryImage3);
  tom.changeAnimation("tom3",tomImage3);
  tom.velocityX = 0;
    }
    drawSprites();
}


function keyPressed(){
  //For moving and changing animation write code here
  if(keyCode === LEFT_ARROW){
  tom.velocityX = -5;
  tom.changeAnimation("tom2",tomImage2);
  jerry.changeAnimation("jerry2",jerryImage2);   
}
}
