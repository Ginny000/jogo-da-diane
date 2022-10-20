var fundo, fundoImg 
var ground
var Diane, DianeImg

function preload(){
fundoImg = loadImage("fundo_c19.jpg")
DianeImg = loadImage("Diane.png")
}

function setup() {
  createCanvas(600, 400)
  
   //imagem de plano de fundo
 fundo = createSprite(0, 100, 1, 1);
 fundo.addImage(fundoImg);
 fundo.scale = 1
  
  ground= createSprite(50, 390, 1200, 50)
  Diane= createSprite(50, 160, 20, 50)
  Diane.addImage(DianeImg)
  Diane.scale= 0.2
}

function draw() {

//gravidade
Diane.velocityY = Diane.velocityY + 0.5

//fazer balão voar
if(keyDown("space")) {
  Diane.velocityY = -6
 }
  ground.velocityX = -2

 if (ground.x < 0){
  ground.x = ground.width / 2;  // Faz a repetição do chão 
}
   
   drawSprites();
}