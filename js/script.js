var cowImg = document.getElementById('cow');
cowImg.onclick = sound

var chickImg = document.getElementById('chicken')
chickImg.onclick = chickClick

var pigImg = document.getElementById('pig')
pigImg.onclick = pigClick

function sound(){
  document.getElementById('cowSound').play();
  move(cowImg);
  return cowImg;
}

function chickClick(){
  document.getElementById('chickSound').play();
  move(chickImg);
  return chickImg;
}

function pigClick(){
  document.getElementById('pigSound').play();
  move(pigImg);
  return pigImg;
}

// function that moves to random position
function move(what){
  var x = Math.floor(Math.random()*700);
  var y = Math.floor(Math.random()*600);
  what.style.top = x + 'px';
  what.style.left = y + 'px';
}
