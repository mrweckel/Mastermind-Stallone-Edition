 Mastermind.View = function(){

}

Mastermind.View.prototype = {
  showAnswer: function(answer){
    for(var i=0; i<answer.length; i++){
      this.node = document.createElement("td");
      this.node.id = answer[i].color;

      document.getElementById("answer-tr").appendChild(this.node);
    }
  },

  clearAnswer: function(ele){
    var node  = document.getElementById(ele);
    var child = node.firstChild;

    while(child){
      node.removeChild(child);
      child = node.firstChild;
    }
  },

  showObjects: function(options, func){
    for(var i=0;i<options.length;i++){
      this.node = document.createElement("td");

      this.node.id = options[i].color;
      this.node.onclick = func;

      document.getElementById("options-tr").appendChild(this.node);
    };
  },

  appendPegToGuess: function(peg, row_num){
    this.node = document.createElement("td");
    this.node.id = peg.color;
    this.node.className = "peg-guess";

    var current_row = document.getElementById(row_num);

    var space = current_row.getElementsByClassName("empty-space")[0];

    current_row.replaceChild(this.node, space);
  },


  showCorrectnessIndicators: function(arr, row_num){
    for(var i=0;i<arr.length;i++){
      this.node = document.createElement("div");
      this.node.id = arr[i].color;

      var current_row = document.getElementById("indicator-row-" + row_num)
      var space = current_row.getElementsByClassName("indicator-space")[0];
      current_row.replaceChild(this.node, space);
    };
  },

  createRow: function(table, ele, num){
    var new_ele = document.createElement(ele);
    new_ele.id = num;

    document.getElementById(table).appendChild(new_ele);
  },

  createIndicatorRow: function(table, ele, num){
    var new_ele = document.createElement(ele);
    new_ele.id = "indicator-row-" + num;

    document.getElementById(table).appendChild(new_ele);
  }

}
