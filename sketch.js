var mouse,mouseImage;
var cat,catImage;
var bgImg;
function preload() {
    //load the images here
    bgImg = loadAnimation("images/garden.png");
    catImage1 = loadAnimation("images/cat1.png");
    mouseImage1 =loadAnimation("images/mouse1.png");
    catImage2 = loadAnimation("images/cat2.png","images/cat3.png");
    catImage4 = loadAnimation("images/cat4.png")
    mouseImage2 = loadAnimation("images/mouse2.png","images/mouse3.png");
    mouseImage4 = loadAnimation("images/mouse4.png") 
}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
    
    tom = createSprite(870, 600);
    tom.addAnimation("tomSleeping", catImage1);
    tom.scale = 0.2;

    jerry = createSprite(200, 600);
   jerry.addAnimation("jerryStanding", mouseImage1);
   jerry.scale = 0.15;
    

}

function draw() {

    background(bgImg);
    //Write condition here to evalute if tom and jerry collide

    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here


}
