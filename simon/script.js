var startb = document.getElementById("startb")
var piskush = document.getElementById("piskush")
var redb = document.getElementById("redb")
var yellowb = document.getElementById("yellowb")
var blueb = document.getElementById("blueb")

redb.style.backgroundColor = 'red'
yellowb.style.backgroundColor = 'yellow'
greenb.style.backgroundColor = 'green'
blueb.style.backgroundColor = 'blue'

var seder = ["red"];
var index = 0;

function start() {
  startb.style.display = "none";
  piskush.style.display = "none";
  redb.style.backgroundColor = '#2b0000';
  setTimeout(() => { redb.style.backgroundColor = 'red' }, 750);
}

function colors(buttonColor){
  if(seder.length == 1){
    if (buttonColor == "red"){
      alert("Well done! Her real name is Stefani Joanne Angelina Germanotta. Her stage name comes from Queen's song - Radio Ga Ga.");
      seder.push("yellow")
    } 
  } 
  if(seder.length == 2){
    level2colors(buttonColor);
  }
  if(seder.length==3){
    level3colors(buttonColor);
  }
  if(seder.length==4){
    level4colors(buttonColor);
  }
}

function startRed(){
  redb.style.backgroundColor = '#2b0000';
  setTimeout(() => {redb.style.backgroundColor = 'red'; }, 750);
}

function startYellow(){
  yellowb.style.backgroundColor = '#423f01';
  setTimeout(() => {yellowb.style.backgroundColor = 'yellow'; }, 750);
}

function startBlue(){
  blueb.style.backgroundColor = '#01001f';
  setTimeout(() => {blueb.style.backgroundColor = 'blue'; }, 750);
}

function startGreen(){
  greenb.style.backgroundColor = '#002e02';
  setTimeout(() => {greenb.style.backgroundColor = 'green'; }, 750);
}

function level2colors(buttonColor){
  if(index==0){
    index++;
    for(var i=0; i<2; i++){
      if(i==0){
        redb.style.backgroundColor = '#2b0000';
        setTimeout(() => { redb.style.backgroundColor = 'red' }, 750);
        setTimeout(() => { startYellow() }, 750);
      }
    }
  }
  if (buttonColor == 'red'){
    index++;
  } 
  if((buttonColor == 'yellow')&&(index==3)){
        alert("Good job! Lady Gaga taught herself to play piano by ear when she was just four years old.");
        seder.push("blue");
        index = 0
  } 
}

function level3colors(buttonColor){
  if(index==0){
    index++;
    for(var i=0; i<3; i++){
      if(i==0){
        redb.style.backgroundColor = '#2b0000';
        setTimeout(() => { redb.style.backgroundColor = 'red' }, 750);
        setTimeout(() => { startYellow() }, 750);
        setTimeout(() => { startBlue() }, 1500);
      }
    }
  }
  if(buttonColor == 'red'){
    index++;
  } 
  if((buttonColor == 'yellow')&&(index==2)){
    index++;
  } 
  if((buttonColor == 'blue')&&(index==3)){
    alert("Excellent! Lady Gaga is attracted to both men and women.");
    seder.push("blue");
    index = 0
  }
}

function level4colors(buttonColor){
  if(index==0){
    index++;
    for(var i=0; i<4; i++){
      if(i==0){
        redb.style.backgroundColor = '#2b0000';
        setTimeout(() => { redb.style.backgroundColor = 'red' }, 750);
        setTimeout(() => { startYellow() }, 750);
        setTimeout(() => { startBlue() }, 1500);
        setTimeout(() => { startGreen() }, 2250);
      }
    }
  }
  if (buttonColor == 'red'){
    index++;
  }
  if((buttonColor == 'yellow')&&(index==2)){
    index++;
  } 
  if((buttonColor == 'blue')&&(index==3)){
    index++;
  } 
  if((buttonColor == 'green')&&(index==4)){
    alert("Amazing! Lady Gaga was the first woman to win at all five major award shows in the same season.");
    seder.push("green");
    index = 0
    end()
  } 
}

function end(){
  var newButton = document.createElement('button');
  newButton.innerText = 'click here to the next page';
  newButton.onclick = redirectToSite;
  document.getElementById('buttonContainer').appendChild(newButton);
}
    
function redirectToSite() {
  window.location.href = 'https://ending-page.the-duckduck.repl.co/';
}

/*endscreen*/
const instagramButton = document.getElementById('instagramButton');
const tiktokButton = document.getElementById('tiktokButton');

instagramButton.addEventListener('click', () => {
  window.location.href = 'https://instagram.com/space._.hedgehogs?igshid=MzRlODBiNWFlZA==';
});

tiktokButton.addEventListener('click', () => {
  window.location.href = 'https://www.tiktok.com/@space_hedgehogs?_t=8cOgrXXjTaE&_r=1';
});