var cat, catImg
var mouse, mouseImg
var bg, bgImg


function preload() {
    //load the images here
    catImg= loadAnimation("images/cat1.png", "images/cat2.png,","images/cat3.png","images/cat4.png")
    mouseImg= loadAnimation("images/mouse1.png","images/mouse2.png","images/mouse3.png","images/mouse4.png")
    bgImg= loadImage("images/garden.png")
}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
    cat=createSprite(800,200)
    cat.addAnimation()

}

function draw() {

    background(255);
    //Write condition here to evalute if tom and jerry collide
    if(cat.x-mouse.x<mouse.width/2+cat.width/2 && mouse.x-cat.x<mouse.width/2+cat.width/2){
        
        
    
      }

    drawSprites();
}


function keyPressed(){

if(keyPressed("left_arrow")){
    mouse.addAnimation("mouseTeasing",mouse3.png)
    mouse.changeAnimation("mouseTeasing")
    mouse.frameDelay=25
}

  //For moving and changing animation write code here


}
