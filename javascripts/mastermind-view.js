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
  },

  showObjects: function(options, func){
    for(var i=0;i<options.length;i++){
      this.node = document.createElement("td");
      this.img  = document.createElement("img");
      this.node.id = options[i].color;
      this.node.onclick = func;

      this.img.src = options[i].img;
      this.node.appendChild(this.img);
      document.getElementById("options-tr").appendChild(this.node);
    };
  },

  appendPegToGuess: function(peg, row_num){
    this.node = document.createElement("td");
    this.img  = document.createElement("img");

    this.img.src = peg.img;
    this.node.appendChild(this.img);

    var current_row = document.getElementById(row_num)
    current_row.appendChild(this.node);
  },


  showCorrectnessIndicators: function(arr, row_num){
    for(var i=0;i<arr.length;i++){
      this.node = document.createElement("td");
      this.img  = document.createElement("img");
      this.node.id = arr[i].color;

      this.img.src = arr[i].img;
      this.node.appendChild(this.img);


      var current_row = document.getElementById("indicator-row-" + row_num)
      current_row.appendChild(this.node);
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
