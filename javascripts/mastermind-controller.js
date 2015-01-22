Mastermind.Controller = function(){

}

Mastermind.Controller.prototype = {
  showAnswer: function(){
    this.view.showAnswer(this);
  },

  defineView: function(view){
    this.view = view;
  },

  choosePeg: function(ele,arr){
    document.getElementById(ele).onclick =
      function(){
        arr.push(ele);
    }
  }
}