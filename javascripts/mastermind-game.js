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

  checkGuess: function(guess_arr, ans_arr, prop, correctness_arr){
    var destructive_arr = ans_arr.slice();

    this.checkForWin(guess_arr, ans_arr, prop, this.won);
    this.checkForPositionMatch(guess_arr, destructive_arr, prop, correctness_arr);
    this.checkForColorMatch(guess_arr, destructive_arr, prop, correctness_arr);
  },

  checkForPositionMatch: function(guess_arr, ans_arr_holder, prop, correctness_arr){

    for(var i=0; i<guess_arr.length; i++){
      if(guess_arr[i][prop] === ans_arr_holder[i][prop]){
        console.log("Position" + i + ": Correct" );
        ans_arr_holder.splice(i, 1, "place_holder");
        this.addIndicator(correctness_arr, new Mastermind.Peg("red"));
      }
    }
  },

  checkForColorMatch: function(guess_arr, ans_arr_holder, prop, correctness_arr){
    var match = true;
    for(var i=0; i<guess_arr.length; i++){
      for(var j=0; j<ans_arr_holder.length; j++){
        if(guess_arr[i][prop] === ans_arr_holder[j][prop] && i != j){
          console.log((i + 1) + "Color is Correct" );
          this.addIndicator(correctness_arr, new Mastermind.Peg("white"));
          break
        }
      }
    }
    // return ans_arr_holder;
  },

  addIndicator: function(arr, peg){
    arr.push(peg);
  },


  won: function(){
    console.log("You have won")
  },

  lost: function(){
    console.log("You have lost.")
  }
}