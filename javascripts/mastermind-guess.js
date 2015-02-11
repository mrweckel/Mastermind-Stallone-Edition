Mastermind.Guess = function(){
  this.correctness_row = 0;
};

Mastermind.Guess.prototype = {
  arr: [],

  clearGuess: function(array){
    array.length = 0;
  },


}