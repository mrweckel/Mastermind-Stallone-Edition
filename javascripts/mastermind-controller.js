Mastermind.Controller = function(){
}

Mastermind.Controller.prototype = {

  defineView: function(view){
    this.view = view;
    return this.view;
  },

  defineGuess: function(guess){
    this.guess = guess;
    return this.guess;
  },

  defineGame: function(game){
    this.game = game;
    return this.game;
  },

  defineIndicators: function(indicators){
    this.indicators = indicators;
    return this.indicators;
  },

  addPegToGuess: function(peg,guess_arr){
        guess_arr.push(peg);
  },

  makeGuess: function(){
      var new_peg = new Mastermind.Peg(this.id);
      var board_body = document.getElementById("board-body");

      var row = document.getElementsByClassName("empty-space")[0].parentNode;

      // debugger;
      //find current row
      var curr_row_num = parseInt(row.id);

      if (guess.arr.length < 4) {
        guess.arr.push(new_peg);
        view.appendPegToGuess(new_peg, curr_row_num);
        if(guess.arr.length === 4){

          window.game.endOfGame(curr_row_num + 1 == 12);

          window.game.checkGuess(window.guess.arr, window.answer.current_ans, "color", window.indicators.correctness);

           view.showCorrectnessIndicators(window.indicators.correctness, curr_row_num);

           guess.clearGuess(window.guess.arr);

        window.indicators.clearEm();
        }
      } else if (guess.arr.length == 4){


        window.guess.arr.push(new_peg);

        var new_row_num = curr_row_num + 1

      };
  },

  playAgain: function(){
    document.getElementById("play-again").onclick = function(){
        location.reload();
    }
  }
}