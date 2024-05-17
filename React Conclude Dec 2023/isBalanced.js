/* 
  create a function called isBalanced
  the function will ALWAYS take in a string (no need to check for other values)
  the string will always be {}
  so check if the string is "balanced"
  {} = true
  }{ = false
  {{{{}}}} = true
  {}{}{} = true
  {}}{{} = false
  { = false
  } = false

  {}}}{

  If the string is length of 1 - always return false
  If the string is an odd number always return false
  
  {}
  { === +1
  } === -1
  if the count is ever -1 
  If it starts with a } always return false
*/

let winner = 0;
let loser = 0;
const winnerAmount = [];
const perGame = (numOfGames) => {
  let startingBalanace = 200;
  let rounds = 1;

  const mines = (bombs, picks) => {
    const arr = [];
    for(let i = 1; i <= bombs; i++) {
      let num;
      do {
        num = Math.floor(Math.random() * (25 - 1 + 1) + 1);
        if (!arr.includes(num)) {
          arr.push(num)
        }
      } while (!arr.includes(num));
    }

    for(let i = 1; i <= picks; i++) {
      const picks = Math.floor(Math.random() * (25 - 1 + 1) + 1);
      if(arr.includes(picks)) {
        rounds += 1
        return startingBalanace -= 20
      }
    }
    rounds += 1
    return startingBalanace += 18.8
  }

  for(let i = 0; i < numOfGames; i++) {
    if(startingBalanace > 0) {
      mines(7, 2)
    } else {
      loser += 1
      return `GAME OVER! Round ${rounds}`
    }
  }
  winner += 1
  const finalNum = Math.round(startingBalanace * 100) / 100;
  winnerAmount.push(finalNum)
  return `YOU ARE WINNER! Round: ${rounds} - Balance ${finalNum}`
}


for(let i = 1; i <= 100; i++) {
  console.log(perGame(1000));
}

const sum = winnerAmount.reduce((a, b) => a + b, 0);
const avg = (sum / winnerAmount.length) || 0;

console.log(`Winner: ${winner}, Losers: ${loser}. Average: ${avg}`);

