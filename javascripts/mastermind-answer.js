Mastermind.Answer = function(arr){
  this.arr = arr;
}

Mastermind.Answer.prototype = {
  current_ans: [],

  addPeg: function(){
    var peg = arr[Math.floor(Math.random() * arr.length)];
    return current_ans.push(peg);
  },

  setAnswer: function(){
    for(var i=0;i<4;i++){
      this.addPeg();
    }
  }
}