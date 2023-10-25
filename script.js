function getComputerChoice() {
  let a = Math.floor(Math.random() * 3 + 1);
  if (a == 1) {
    return 'scissors';
  } else if (a == 2) {
    return 'rock';
  } else {
    return 'paper';
  }
}
function playerSelection() {
  let a = prompt('Que va a jugar?:\n').toLowerCase();
  let list = ['paper', 'scissors', 'rock'];
  while (list.indexOf(a) < 0) {
    a = prompt('Jugada Invalida \n Que va a jugar?:\n').toLowerCase();
  }
  return a.toLowerCase();
}
function playRound() {
  let a = playerSelection();
  let b = getComputerChoice();
  if (
    (a == 'scissors' && b == 'rock') ||
    (a == 'rock' && b == 'paper') ||
    (a == 'paper' && b == 'scissors')
  ) {
    return `You lose ${b} beats ${a}`;
  } else if (a == b) {
    return 'Its a draw';
  } else {
    return `You win ${a} beats ${b}`;
  }
}
const timer = ms => new Promise(res => setTimeout(res, ms))
async function load() {
  
  while(p<3 && p<3) {
    let b = playRound();
    if (b.indexOf('win') > 0) {
      p += 1;
    }
    if (b.indexOf('lose') > 0) {
      pc += 1;
    }
    console.log(b, `\nMatch goes:\nYou |${p} - ${pc}| Computer`);
    await timer(1000);
  }
  console.log(`Match Ended:\nYou |${p} - ${pc}| Computer`);
}

function game() {
  p = 0;
  pc = 0;
  console.log("Let's play best of five!");
  load();
  
}
