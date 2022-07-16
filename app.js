const buttons = document.querySelectorAll("a");
for(let i=0;i<buttons.length;i++){
  buttons[i].addEventListener("click",clickrec);
}
function clickrec(){
 let id = this.id;
  result.innerHTML = game(id);
  if(result.innerHTML === "Computer Wins"){
    computer_score++;
    computerScore.innerHTML = computer_score;
  }
  else if(result.innerHTML === "Player Wins"){
    player_score++;
    playerScore.innerHTML = player_score;
  }
  if(player_score === 5){
    document.querySelector("body").classList.add("success");
    title.innerHTML = "You Won , Computers are dumb";
    document.querySelector("body").classList.add("avoid-clicks");
    reset();
  }
  else if(computer_score === 5){
    document.querySelector("body").classList.add("loss");
    title.innerHTML = "You lost , Get ready to be ruled by them";
    document.querySelector("body").classList.add("avoid-clicks");
    reset();
  }
}
let player_score = 0;
let computer_score = 0;
let playerScore = document.querySelector(".playerScore");
let computerScore = document.querySelector(".computerScore");
let result = document.querySelector(".winner");
let title = document.querySelector(".title");
let reload = document.querySelector(".choose-title");
function computerPlay(){
  let random = Math.floor(Math.random() * 3);
  if(random === 0){
    return 'rock';
  }
  else if(random ===1){
    return 'paper';
  }
  else {
    return 'scissors';
  }
}

function game(player){
    let compuerChoice = computerPlay();
    let playerChoice = player;
    if(playerChoice === 'rock'){
      if(compuerChoice === 'rock'){
        return 'Tie';
      }
      else if(compuerChoice === 'paper'){
        return 'Computer Wins';
      }
      else {
        return 'Player Wins';
      }
    }
    else if(playerChoice === 'paper'){
      if(compuerChoice === 'rock'){
        return 'Player Wins';
      }
      else if(compuerChoice === 'paper'){
        return 'Tie';
      }
      else {
        return 'Computer Wins';
      }
    }
    else if(playerChoice === 'scissors'){
      if(compuerChoice === 'rock'){
        return 'Computer Wins';
      }
      else if(compuerChoice === 'paper'){
        return 'Player Wins';
      }
      else {
        return 'Tie';
      }
    }
}
 function reset(){
  reload.innerHTML = "Press any key to reload!";
  document.querySelector("body").addEventListener("keydown", function(event){
      document.location.reload(true);
  });
 }
