Mastermind.Guess = function(){
  this.correctness_row = 0;
};

Mastermind.Guess.prototype = {
  guess: [],

  clearGuess: function(arr){
    arr.length = 0;
  },


}