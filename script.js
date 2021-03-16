const cluePauseTime=333;
const nextClueWaitTime=1000;

var pattern=new Array(7);
var progress=0;
var gamePlaying=false;
var tonePlaying=false;
var volume=0.5;
var guessCounter=0;
var clueHoldTime=1000;
var threeStrikes=0;

function startGame(){
    //initialize game variables
  clueHoldTime=1000;
  threeStrikes=0;
  getPattern(1,7);
  progress = 0;
  gamePlaying = true;
  document.getElementById("startBtn").classList.add("hidden");
  document.getElementById("stopBtn").classList.remove("hidden");
  playClueSequence();
}

function stopGame(){
  gamePlaying=false;
  document.getElementById("startBtn").classList.remove("hidden");
  document.getElementById("stopBtn").classList.add("hidden");
}


// Sound Synthesis Functions
const freqMap = {
  1: 200.7,
  2: 261.6,
  3: 330,
  4: 400.2,
  5: 432.5,
  6: 466.6
}
function playTone(btn,len){ 
  o.frequency.value = freqMap[btn]
  g.gain.setTargetAtTime(volume,context.currentTime + 0.05,0.025)
  tonePlaying = true
  setTimeout(function(){
    stopTone()
  },len)
}
function startTone(btn){
  if(!tonePlaying){
    o.frequency.value = freqMap[btn]
    g.gain.setTargetAtTime(volume,context.currentTime + 0.05,0.025)
    tonePlaying = true
  }
}
function stopTone(){
    g.gain.setTargetAtTime(0,context.currentTime + 0.05,0.025)
    tonePlaying = false
}

//Page Initialization
// Init Sound Synthesizer
var context = new AudioContext()
var o = context.createOscillator()
var g = context.createGain()
g.connect(context.destination)
g.gain.setValueAtTime(0,context.currentTime)
o.connect(g)
o.start(0)

function lightButton(btn){
  document.getElementById("button"+btn).classList.add("lit")
}
function clearButton(btn){
  document.getElementById("button"+btn).classList.remove("lit")
}

function playSingleClue(btn){
  if(gamePlaying){
    lightButton(btn);
    playTone(btn,clueHoldTime);
    setTimeout(clearButton, clueHoldTime,btn);
  }
}

function playClueSequence(){
  clueHoldTime-=100;
  guessCounter=0;
  let delay=nextClueWaitTime;//set delay to intial wait time
  for(let i=0; i<=progress; i++){//for each clue that is revealed so far
    console.log("play single clue: "+ pattern[i] + " in "+ delay+ "ms")
    setTimeout(playSingleClue,delay,pattern[i])//set timeout to play that clue
    delay+=clueHoldTime
    delay+=cluePauseTime;
  }
}

function loseGame(){
  stopGame();
  clueHoldTime=1000;
  alert("Game Over. You Lost.");
}

function winGame(){
  stopGame();
  clueHoldTime=1000;
  alert("You Win!!")
}

function guess(btn){
  console.log("user guessed: "+ btn);
  if(!gamePlaying){
    return;
  }
  
  if(pattern[guessCounter]==btn){
    
    if(guessCounter==progress){
      if(progress==pattern.length-1){
        winGame();
      }
      else{
        progress++;
        playClueSequence();
      }
  }
  else{
      guessCounter++;
    }
  }
  else{
    threeStrikes++;
    if(threeStrikes>2){
      loseGame();
    }
  }
  
}
function getPattern(min, max){
  for(let i=0;i<=7;i++){
    pattern[i]=Math.floor(Math.random()*(max-min)+min);
  }
}

function imageVisibleA1(){
  document.getElementById("myface").classList.remove("hidden");
}
function imageVisibleA2(){
  document.getElementById("myface2").classList.remove("hidden");
}
function imageVisibleA3(){
  document.getElementById("myface3").classList.remove("hidden");
}
function imageVisibleA4(){
  document.getElementById("myface4").classList.remove("hidden");
}
function imageVisibleA5(){
  document.getElementById("myface5").classList.remove("hidden");
}
function imageVisibleA6(){
  document.getElementById("myface6").classList.remove("hidden");
}

function imageVisibleB1(){
  document.getElementById("myface").classList.add("hidden");
}
function imageVisibleB2(){
  document.getElementById("myface2").classList.add("hidden");
}
function imageVisibleB3(){
  document.getElementById("myface3").classList.add("hidden");
}
function imageVisibleB4(){
  document.getElementById("myface4").classList.add("hidden");
}
function imageVisibleB5(){
  document.getElementById("myface5").classList.add("hidden");
}
function imageVisibleB6(){
  document.getElementById("myface6").classList.add("hidden");
}