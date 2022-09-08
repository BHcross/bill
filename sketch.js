var ball;
var hypnoticBall, database;
var position;
var form,player,game;
var gamestate=0;
var playercount;
var canvas;
var backgroundimage;

function setup() {
    database = firebase.database();
    console.log(database);
    canvas = createCanvas(500, 500);
    game = new Game();
    game.getState();
    game.start();
    hypnoticBall = createSprite(250, 250, 10, 10);
    hypnoticBall.shapeColor = "red";
    var hypnoticBallPosition = database.ref('ball/position');
    hypnoticBallPosition.on("value", readPosition, showError);


}

function draw() {
    background("white");




        if (keyDown(LEFT_ARROW)) {
            writePosition(-2, 0);
        }
        else if (keyDown(RIGHT_ARROW)) {
            writePosition(2, 0);
        }
        else if (keyDown(UP_ARROW)) {
            writePosition(0, -2);
            
        }
        else if (keyDown(DOWN_ARROW)) {
            writePosition(0, +2);
        }
  
    drawSprites();
}
function writePosition(x, y) {
    database.ref('ball/position').set({
        'x': position.x + x,
        'y': position.y + y

    })



}


function changePosition(x, y) {
    ball.x = ball.x + x;
    ball.y = ball.y + y;
}
function readPosition(data) {
    position = data.val();
    console.log(position.x);
    hypnoticBall.x = position.x;
    hypnoticBall.y = position.y;

}
 function showError(){
console.log("cleiton");


 }
 function updateHeight(x,y){
  database.ref('ballon/height').set({
  'x': innerHeight.x + x ,
  'y': innerHeight.y + y

  })
 }
function readHeight(data){
  height = data.val();
  ballon.x = height.x;
  ballon.y = height.y;  
}
function showError(){
console.log("erro data base")
}