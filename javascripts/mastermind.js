document.addEventListener('DOMContentLoaded', function(){

  window.controller = new Mastermind.Controller();

  window.view = window.controller.defineView(new Mastermind.View());

  window.guess = window.controller.defineGuess(new Mastermind.Guess());

  window.game = window.controller.defineGame(new Mastermind.Game());

//Peg Option Creation and Display
  window.colorSet = new Mastermind.PegColors();

//creates the pegs from color string
  window.colorSetObjects = window.colorSet.createObjects();

  window.options = window.view.showObjects(window.colorSet.colorObjects, window.controller.makeGuess);

  window.indicators = window.controller.defineIndicators(new Mastermind.Indicator());

//ANSWER functionality
    window.view.clearAnswer("answer-tr");

    window.answer = new Mastermind.Answer(window.colorSet.colorObjects);

    window.answer.setAnswer();

    window.view.showAnswer(window.answer.current_ans);


//After game is over
    window.controller.playAgain();
});