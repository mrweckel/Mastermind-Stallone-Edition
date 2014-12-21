Mastermind.Answer = function(){
  var current_ans = [];
}

Mastermind.Answer.prototype = {
  addPeg: function(arr){
    var peg = arr[Math.floor(Math.random() * arr.length)];
    current_ans.push(peg);
  }

  setAnswer: function(){
    for(var i=0,i<4,i++){
      this.addPeg(arr)
    }
  }
}