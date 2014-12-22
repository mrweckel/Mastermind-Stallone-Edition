document.addEventListener('DOMContentLoaded', function(){
  window.colorSet = new Mastermind.PegColors();
  document.getElementById("new-game").onclick = function(){
    window.answer = new Mastermind.Answer(window.colorSet.colors);
    window.answer.setAnswer();
  }

});