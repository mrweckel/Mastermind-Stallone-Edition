Mastermind.Peg = function(img){
  this.img = img;
  colors: ["aqua.png","blue.png","green.png","orange.png","purple.png","yellow.png"]
}

Mastermind.Peg.prototype = {
  img: this.img,

  color: function(){
    var color = this.img.replace(".png","");
    return color;
  }
}