document.addEventListener('DOMContentLoaded', function(){
  window.controller = new Mastermind.Controller();
  window.view = (new Mastermind.View());
  window.colorSet = new Mastermind.PegColors();
  document.getElementById("new-game").onclick = function(){
    window.answer = new Mastermind.Answer(window.colorSet.colors);
    window.answer.setAnswer();

    window.view.showAnswer(window.answer.current_ans);
  }

});