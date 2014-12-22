document.addEventListener('DOMContentLoaded', function(){

  window.controller = new Mastermind.Controller();
  window.view = (new Mastermind.View());

  window.colorSet = new Mastermind.PegColors();
  window.colorSetObjects = window.colorSet.createObjects();


  document.getElementById("new-game").onclick = function(){
      window.view.clearAnswer("answer-tr");

      window.answer = new Mastermind.Answer(window.colorSet.colorObjects);

      window.answer.setAnswer();

      window.view.showAnswer(window.answer.current_ans);
  }

});