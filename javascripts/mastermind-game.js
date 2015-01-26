Mastermind.Game = function(num_of_pegs){
  this.num_of_pegs = num_of_pegs;
}

Mastermind.Game.prototype = {

  endOfGame: function(rows, end_mark){
    rows === end_mark ? this.lost() : false;
  },

  checkForWin: function(guess_arr, ans_arr, prop, func){
    var winner = true;
    for(var i=0; i<guess_arr.length; i++){
      if(guess_arr[i][prop] !== ans_arr[i][prop]){
        winner = false;
        break;
      }
    }
    if(winner === true && guess_arr.length === 4){
      //temporary
      alert("You have won");
    }
  },

  checkForCorrectness: function(guess_arr, ans_arr, prop){
    var destructive_arr = guess_arr;

    this.checkForPositionMatch(destructive_arr, ans_arr, prop);
    this.checkForColorMatch(destructive_arr, ans_arr, prop);
  },

  checkForPositionMatch: function(guess_arr, ans_arr, prop){
    for(var i=0; i<guess_arr.length; i++){
      if(guess_arr[i][prop] === ans_arr[i][prop]){
        console.log("Position" + i + ": Correct" );
        guess_arr.splice(i, 1, "")
        break;
      }
    }
    return guess_arr;
  },

  checkForColorMatch: function(guess_arr, ans_arr, prop){
    var match = true;
    for(var i=0; i<guess_arr.length; i++){
      for(var j=0; j<ans_arr.length; j++){
        if(guess_arr[i][prop] === ans_arr[j][prop] && i != j){
          console.log((i + 1) + "Color is Correct" );
          break
        }
      }
    }
  },


  won: function(){
    console.log("You have won")
  },

  lost: function(){
    console.log("You have lost.")
  }
}