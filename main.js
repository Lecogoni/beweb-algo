// create a chess board fill up with 0 et 1 in a 2D array

// variable declaration zone 

let numOfCase = 8;
let board = []

let element = document.getElementById(id);


// CODE version 1 

for(let i = 0 ; i < numOfCase; i++){

  board[i] = []

  for(let j = 0; j < numOfCase; j++){

    if (i % 2 === 0) {

      if(j % 2 === 0){
        board[i][j] = 1
      } else {
        board[i][j] = 0
      }

    } else if (i % 2 != 0) {
      if(j % 2 === 0){
        board[i][j] = 0
      } else {
        board[i][j] = 1
      }
    }
  }
}

console.log(board);

// CODE version 2 

for(let i = 0 ; i < numOfCase; i++){

  board[i] = []
  let black = true

  for(let j = 0; j < numOfCase; j++){
    
    if (black === true) {
      board[i][j] = 0
    } else {
      board[i][j] = 1
    }
    black = !black
  }
}


console.log('');
console.log('version 2 : ');
console.log(board);
