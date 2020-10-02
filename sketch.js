var foodStock , foodS
var database
var dog , doghappy

function preload(){

loadImage("dogImg.png")
loadImage("dogImg1.png")

}

function setup() {
  createCanvas(500, 500);
  

  
  
}
function preload(){
  loadImage(dogImg.png)
  loadImage(dogImg1.png)
}

function setup(){
  database = firebase.database()
  foodStock= database.ref('foodS');
  foodStock.on("value",readstock);  
}


function draw() {  
  background(46,139,87)

if(keywentdown(UP_ARROW)){
  writeStock(foodS);
  dog.addimage = doghappy
} 
  drawSprites();
  Text("foodStock")
  textsize()

}
function readstock(data){
  foodS = data.val();

  function writeStock(x);

  database.ref('/').update({
    Food:x
  })
}



