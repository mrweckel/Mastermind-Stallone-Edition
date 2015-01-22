Mastermind.Peg = function(color){
  this.color = color;
  this.img = "imgs/" + color + ".png"
}

Mastermind.Peg.prototype = {
  addPeg: function(arr){
    arr.push(this);
  },

  makeGuess: function(){

  }
}

