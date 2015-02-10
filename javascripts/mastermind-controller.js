Mastermind.Controller = function(){
}

Mastermind.Controller.prototype = {
  showAnswer: function(){
    this.view.showAnswer(this);
  },

  defineView: function(view){
    this.view = view;
  },

  defineGuess: function(guess){
    this.guess = guess;
  },

  addPegToGuess: function(peg,guess_arr){
        guess_arr.push(peg);
  },

  makeGuess: function(){
      var new_peg = new Mastermind.Peg(this.id);
      var board_body = document.getElementById("board-body");

      var row = document.getElementsByClassName("empty-space")[0].parentNode;
      // var correctness_body = document.getElementById("correct-body");

      //find current row
      var curr_row_num = parseInt(row.id);

      if (window.guess.guess.length < 4) {
        window.guess.guess.push(new_peg);
        view.appendPegToGuess(new_peg, curr_row_num);
        if(window.guess.guess.length === 4){

          window.game.endOfGame(curr_row_num + 1 == 12);

          window.game.checkGuess(window.guess.guess, window.answer.current_ans, "color", window.indicators.correctness);

          // view.createIndicatorRow("correct-body", "tr", curr_row_num);

           view.showCorrectnessIndicators(window.indicators.correctness, curr_row_num);

           window.guess.clearGuess(window.guess.guess);

        window.indicators.clearEm();
        }
      } else if (window.guess.guess.length == 4){


        window.guess.guess.push(new_peg);

        var new_row_num = curr_row_num + 1

      };
  }
}