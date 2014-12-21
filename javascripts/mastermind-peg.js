Mastermind.Peg = function(){
  COLORS = ["aqua.png","blue.png","green.png","orange.png","purple.png","yellow.png"]
}

Mastermind.Peg.prototype = {
  setColor: function(color){

  },

  randomPeg: function(){
    var answer = COLORS[Math.floor(Math.random() * COLORS.length)];
    return answer
  }




}