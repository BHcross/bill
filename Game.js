class Game{
 constructor(){}

 getState(){

   var gameStateRef = database.ref('gamestate');
   gameStateRef.on("value", function(data)  {
    gameState = data.val();
 })
 }

 update(state){
    database.ref('/').update({
     gameState: state

    });

 }
 start(){
  if (gamestate === 0){
   player = new Player();
   player.getCount();
   form = new Form();
   form.display();
  }

 }
}
