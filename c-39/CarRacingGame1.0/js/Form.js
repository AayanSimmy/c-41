class Form {

  constructor() {
    this.input = createInput("Name");
    this.button = createButton('Play');
    this.button2= createButton('Reset')
    this.greeting = createElement('h2');
  }
  hide(){
    this.greeting.hide();
    this.button.hide();
    this.input.hide();
  }

  display(){
    var title = createElement('h2')
    title.html("Car Racing Game");
    title.position(displayWidth/2-50, 0);

    this.input.position(displayWidth/2-40, displayHeight/2);
    this.button.position(displayWidth/2+30, displayHeight/2);
    this.button2.position(displayWidth/2+40, displayHeight/2-40);

    this.button.mousePressed(()=>{
      this.input.hide();
      this.button.hide();
      player.name = this.input.value();
      playerCount+=1;
      player.index = playerCount;
      player.update();
      player.updateCount(playerCount);
      this.greeting.html("Hello " + player.name)
      this.greeting.position(displayWidth/2-70, displayHeight/4);
    });

    this.button2.mousePressed(()=>{
     game.update(0)
     player.updateCount(0)
    });
  }
}
