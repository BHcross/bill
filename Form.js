class Form{
    constructor(){}
    display(){
     var title=createElement('h2');
      title.html("GO BILL");
      title.position(130,0);

     var input=createInput("name");
     var button=createButton('play');
     var greeting=createElement('h3');
     input.position(130,160);
     button.position(250,200);
     
     button.mousePressed(function(){
       input.hide();
       button.hide();
       var name=input.value();
       playercount+=1;
       player.update(name);
       player.updateCount(playercount);
       greeting.html("BORA FI DO BILL");
       greeting.position(130,160);


     })
 }
}