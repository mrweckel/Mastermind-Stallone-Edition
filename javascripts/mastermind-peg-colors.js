Mastermind.PegColors = function(){

}

Mastermind.PegColors.prototype = {
  colors: ["aqua","blue","green","orange","purple","yellow"],

  colorObjects: [],

  createObjects: function(){
    for(var i=0; i<this.colors.length; i++){
      var pegObject = new Mastermind.Peg(this.colors[i]);
      this.colorObjects.push(pegObject);
    }
  }
}