document.addEventListener('DOMContentLoaded', function(){

  window.controller = new Mastermind.Controller();

  window.controller.defineView(new Mastermind.View());

  window.view = window.controller.view;

  window.controller.defineGuess(new Mastermind.Guess());

  window.guess =  window.controller.guess;

//Peg Option Creation and Display
  window.colorSet = new Mastermind.PegColors();

  //creates the pegs from color string
  window.colorSetObjects = window.colorSet.createObjects();

  window.options = window.view.showObjects(window.colorSet.colorObjects, window.controller.makeGuess);


  window.game  = new Mastermind.Game;

  window.indicators = new Mastermind.Indicator;




//ANSWER functionality
    window.controller.view.clearAnswer("answer-tr");

    window.answer = new Mastermind.Answer(window.colorSet.colorObjects);

    window.answer.setAnswer();

    window.controller.view.showAnswer(window.answer.current_ans);


//After game is over
    window.controller.playAgain();
});