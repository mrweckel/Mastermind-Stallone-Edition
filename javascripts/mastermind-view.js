 Mastermind.View = function(){

}

Mastermind.View.prototype = {
  showAnswer: function(answer){
    for(var i=0; i<answer.length; i++){
      this.node = document.createElement("td");
      this.img  = document.createElement("img");

      this.img.src = answer[i].img;
      this.node.appendChild(this.img);
      document.getElementById("answer-tr").appendChild(this.node);
    }
  },

  clearAnswer: function(ele){
    var node = document.getElementById(ele);
    var child = node.firstChild;

    while(child){
      node.removeChild(child);
      child = node.firstChild;
    }
  }
}
