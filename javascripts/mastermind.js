document.addEventListener('DOMContentLoaded', function(){

  window.controller = new Mastermind.Controller();

window.controller.defineView(new Mastermind.View());

  //needs to go
  window.view = new Mastermind.View();

  window.colorSet = new Mastermind.PegColors();

  //creates the pegs from color string
  window.colorSetObjects = window.colorSet.createObjects();

  //creates the first row
  window.view.createRow("board-body","tr", 0);

  document.getElementById("new-game").onclick = function(){

    window.game  = new Mastermind.Game;

    window.indicators = new Mastermind.Indicator;

    //this is just shitty--must fix ASAP


//GUESS functionality
    window.guess = new Mastermind.Guess;

    //need to find a new place for this eventually
    //end of makeGuess

    //second argument is the function that will run onclick of the td node
    window.options = window.view.showObjects(window.colorSet.colorObjects, window.controller.makeGuess);

//ANSWER functionality
    window.view.clearAnswer("answer-tr");

    window.answer = new Mastermind.Answer(window.colorSet.colorObjects);

    window.answer.setAnswer();

    window.view.showAnswer(window.answer.current_ans);


      // window.controller.choosePeg(this, window.guess.guess);
  }


});