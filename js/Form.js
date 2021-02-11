class Form {

  constructor()
   {
    this.input = createInput("");
    this.button = createButton('PLAY');
    this.greeting = createElement('h4');
  }
  hide()
  {
    this.input.hide();
    this.button.hide();
    this.greeting.hide();
    


  }

  display()
  {
    var title = createElement('h2')
    var text1 = createElement('h3')
    text1.html("Enter Your Name Here:-")
    title.html("Car Racing Game");
    text1.position(130,100)
    title.position(130, 0);

    this.input.position(130, 160);
    this.button.position(250, 200);

    this.button.mousePressed(()=>{

      this.input.hide();
      this.button.hide();
      text1.hide();
      
      player.name = this.input.value();
      playerCount+=1;//playerCount = playerCount+1
      player.index = playerCount;

      player.update();
      player.updateCount(playerCount);
     
      this.greeting.html("Hello " + player.name )
      this.greeting.position(130, 100);
    });

  }
}