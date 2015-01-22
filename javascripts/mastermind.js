document.addEventListener('DOMContentLoaded', function(){

  window.controller = new Mastermind.Controller();

  window.view = new Mastermind.View();

  window.colorSet = new Mastermind.PegColors();

  //creates the pegs from color string
  window.colorSetObjects = window.colorSet.createObjects();

//appends the pegs to the DOM

  document.getElementById("new-game").onclick = function(){

    window.guess = new Mastermind.Guess;

    window.options = window.view.showObjects(window.colorSet.colorObjects, function(){
        window.guess.guess.push(this.img)});

    window.view.clearAnswer("answer-tr");

    window.answer = new Mastermind.Answer(window.colorSet.colorObjects);

    window.answer.setAnswer();

    window.view.showAnswer(window.answer.current_ans);


      // window.controller.choosePeg(this, window.guess.guess);
  }


});