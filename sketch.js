var dog,sadDog,happyDog, database;
var foodS,foodStock;
var addFood;
var foodObj;
var feed;
var lastFed;



function preload(){
sadDog=loadImage("Dog.png");
happyDog=loadImage("happy dog.png");
}

function setup() {
  database=firebase.database();
  createCanvas(1000,400);

  foodObj = new Food();

  foodStock=database.ref('Food');
  foodStock.on("value",readStock);
  
  dog=createSprite(800,200,150,150);
  dog.addImage(sadDog);
  dog.scale=0.15;

  
  feedthedog=createButton("Feed the dog");
  feedthedog.position(800,85);
  feedthedog.mousePressed(decreaseFoods);

  addFood=createButton("Add Food");
  addFood.position(800,95);
  addFood.mousePressed(addFoods);

}

function draw() {
  background(46,139,87);
  foodObj.display();

  //write code to read fedtime value from the database 



if(lastFed===0){
  text("last Feed : 12 AM",350,30)
}
 
  drawSprites();
}


function readStock(data){
  foodS=data.val();
  foodObj.updateFoodStock(foodS);
}


function feedDog(){
  dog.addImage(happyDog);
 
 var food_stock_val = foodobj.getFoodStock();
 if(food_stock_val<=0){
   foodobj.updateFoodStock(food_stock_val *0);
  
 }
 else{
   foodobj.updateFoodStock(food_stock_val -1);
 }


}


function addFoods(){
  foodS++;
  database.ref('/').update({
    Food:foodS
  })
}
