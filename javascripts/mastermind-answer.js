Mastermind.Answer = function(arr){
  this.arr = arr;
}

Mastermind.Answer.prototype = {
  current_ans: [],

  addPeg: function(){
    var peg = this.arr[Math.floor(Math.random() * this.arr.length)];
    return this.current_ans.push(peg);
  },

  setAnswer: function(){
    for(var i=0;i<4;i++){
      this.addPeg(this.arr);
    }
    return this.current_ans
  }
}