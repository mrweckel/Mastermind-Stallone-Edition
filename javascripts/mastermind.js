document.addEventListener('DOMContentLoaded', function(){

  window.controller = new Mastermind.Controller();

  window.view = new Mastermind.View();

  window.colorSet = new Mastermind.PegColors();

  //creates the pegs from color string
  window.colorSetObjects = window.colorSet.createObjects();

  document.getElementById("new-game").onclick = function(){
//GUESS functionality
    window.guess = new Mastermind.Guess;

    //need to find a new place for this eventually
    window.makeGuess = function(){
      var new_peg = new Mastermind.Peg(this.id);
      if (window.guess.guess.length < 4) {
        window.guess.guess.push(new_peg);
        window.view.appendPegToGuess(new_peg);
      } else {
        window.guess.clearGuess(window.guess.guess);
        window.guess.guess.push(new_peg);
        window.view.appendPegToGuess(new_peg);
      };
    }

    //second argument is the function that will run onclick of the td node
    window.options = window.view.showObjects(window.colorSet.colorObjects, window.makeGuess);

//ANSWER functionality
    window.view.clearAnswer("answer-tr");

    window.answer = new Mastermind.Answer(window.colorSet.colorObjects);

    window.answer.setAnswer();

    window.view.showAnswer(window.answer.current_ans);


      // window.controller.choosePeg(this, window.guess.guess);
  }


});