document.addEventListener('DOMContentLoaded', function(){

  window.controller = new Mastermind.Controller();
  window.view = (new Mastermind.View());

  window.colorSet = new Mastermind.PegColors();
  window.colorSetObjects = window.colorSet.createObjects();

  window.options = window.view.showObjects(window.colorSet.colorObjects);


  document.getElementById("new-game").onclick = function(){
      window.view.clearAnswer("answer-tr");


      window.answer = new Mastermind.Answer(window.colorSet.colorObjects);

      window.answer.setAnswer();

      window.view.showAnswer(window.answer.current_ans);

      window.guess = new Mastermind.Guess;
  }

});