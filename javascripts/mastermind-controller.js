Mastermind.Controller = function(){

}

Mastermind.Controller.prototype = {
  showAnswer: function(){
    this.view.showAnswer(this);
  },

  defineView: function(view){
    this.view = view;
  },

  addPegToGuess: function(peg,guess_arr){
        guess_arr.push(peg);
  },

  makeGuess: function(){
      var new_peg = new Mastermind.Peg(this.id);
      var board_body = document.getElementById("board-body");
      // var correctness_body = document.getElementById("correct-body");

      //find current row
      //this needs to change when I get internet
      var curr_row = parseInt(board_body.lastChild.id);

      //check for end of game


      if (window.guess.guess.length < 4) {
        window.guess.guess.push(new_peg);
        view.appendPegToGuess(new_peg, curr_row);
        if(window.guess.guess.length == 4){

          window.game.endOfGame(curr_row, 12)

          window.game.checkGuess(window.guess.guess, window.answer.current_ans, "color", window.indicators.correctness);

          view.createIndicatorRow("correct-body", "tr", curr_row);

           view.showCorrectnessIndicators(window.indicators.correctness, curr_row);
        }
      } else if (window.guess.guess.length == 4){

        window.indicators.clearEm();

        window.guess.clearGuess(window.guess.guess);
        window.guess.guess.push(new_peg);

        var new_row_num = curr_row + 1
        view.createRow("board-body", "tr", new_row_num);
        view.createRow("correct-body", "tr", new_row_num);

        view.appendPegToGuess(new_peg, new_row_num);

      };
  }
}