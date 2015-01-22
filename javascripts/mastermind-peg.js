Mastermind.Peg = function(color){
  this.color = color;
  this.img   = "imgs/" + color + ".png";
}

Mastermind.Peg.prototype = {
  createNode: function(){
    this.node = document.createElement("span")
  },

  pegClick: function(){

  }

}

