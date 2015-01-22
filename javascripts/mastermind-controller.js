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
  }
}