//guessingC//https://finaleproject.the-duckduck.repl.co
var d = document.getElementById("d");
var cB = document.getElementById("cB");

bool = "";
var cnt=0;

function check(){
  bool = d.checked;
  if (cnt==0){
    if (bool == true){
      cnt=cnt+1;
      cB.insertAdjacentHTML("afterend","<h2>congratulations! You are correct <br> <br><button id='nR1'><a href = https://triviaproject.the-duckduck.repl.co/> Click to play the next game </a></button> </h2>");
    }
    
    else{
      cB.insertAdjacentHTML("afterend","<h2>Nope, that's incorrect  <br><br><button id='nR1'><a href = 'room1.html'> Click to see the rooms again </a></button><br> or guess someone else!</h2>");
      setTimeout('location.reload()',4000)
    }
  }
}

//roomChanging//
var cnt2=0;
function clue(nextPage,id){
  var iRElem = document.getElementById(id);
  if (cnt==0){
    cnt=cnt+1
    iRElem.insertAdjacentHTML("afterend","<button id='nR1'> <a href = '"+ nextPage +"'> Next room </a> </button>");
  }
}