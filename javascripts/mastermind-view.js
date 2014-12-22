Mastermind.View = function(){

}

Mastermind.View.prototype = {
  showAnswer: function(answer){
    for(var i=0; i<answer.length; i++){
      this.node = document.createElement("td");
      this.img  = document.createElement("img");

      this.img.src = "imgs/"+ answer[i];
      this.node.appendChild(this.img);
      document.getElementById ("answer-tr").appendChild(this.node);
    }
  }
}