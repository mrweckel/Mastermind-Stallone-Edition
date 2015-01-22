Mastermind.Peg = function(color){
  this.color = color;
  this.img   = "imgs/" + color + ".png";
  // adding an element to be able to set onclick.needed?
  this.node = document.createElement("span");
}

Mastermind.Peg.prototype = {

}

