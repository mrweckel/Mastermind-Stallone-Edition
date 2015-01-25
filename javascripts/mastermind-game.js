Mastermind.Game = function(num_of_pegs){
  this.num_of_pegs = num_of_pegs;
}

Mastermind.Game.prototype = {

  endOfGame: function(rows, end_mark){
    rows === end_mark ? this.lost() : false;
  },

  //not working!!!!!!!!!
  checkForWin: function(guess_arr, ans_arr, prop, func){
    var winner = true;
    for(var i=0; i<guess_arr.length; i++){
      if(guess_arr[i][prop] !== ans_arr[i][prop]){
        winner = false;
        break;
      }
    }
    if(winner === true){
      console.log("You have won");
    }
  },

  won: function(){
    console.log("You have won")
  },

  lost: function(){
    console.log("You have lost.")
  }
}