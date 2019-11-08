function isUsedRow(board, row, numberToCheck){
    for (let i = 0; i < 9 ; i++) {if (board[row][i] === numberToCheck) return true; }
    return false;
}
function isUsedCol(board, col, numberToCheck){
    for (let i = 0; i < 9 ; i++) {if (board[i][col] === numberToCheck) return true; }
    return false;
}
function isUsedBox(board, row, col, numberToCheck){
    for (let i = 0; i < 3; i++ ){
        for(let j = 0; j < 3 ; j++){
            if (board[row+i][col+j] === numberToCheck) {return true;}
        }
    }
    return false;
}

function isEmptyCell(board,tempObject){
  for (let i = 0; i < 9; i++ ){
    for(let j = 0; j < 9 ; j++){
        if (board[i][j] === 0) { 
            tempObject.row = i;
            tempObject.col = j;
            return true;
        }
    }
  }
  return false;
}

function isSafe(board,row,col,numberToCheck){
    return !isUsedRow(board,row,numberToCheck) 
    && !isUsedCol(board,col,numberToCheck) 
    && !isUsedBox(board, row - (row%3), col - (col%3), numberToCheck)  ;
}

function isValid(board){
    var rowArr = new Array(9).fill().map( () => {return new Set();} );
    var colArr = new Array(9).fill().map( () => {return new Set();} );
    var boxArr = new Array(9).fill().map( () => {return new Set();} );

   for (let i = 0; i < 9 ; i++ ){
       for(let j = 0; j< 9; j++){
           var currCell = board[i][j];

           if (currCell === 0 ){ continue;}

           var boxIndex = Math.floor(i/3)*3 + Math.floor(j/3);
           if (rowArr[i].has(currCell) || colArr[j].has(currCell) || boxArr[boxIndex].has(currCell)){ return false;}

           rowArr[i].add(currCell) ;
           colArr[j].add(currCell) ;
           boxArr[boxIndex].add(currCell) ;
       }
   }
   return true;
}

function isFullGrid(board){
    for (let i = 0; i < 9 ; i++ ){
        for(let j = 0; j< 9; j++){
           if (board[i][j] === 0 ) return false;
        }
    }
    return true;
}
export default function solveSudoku(board){
    if (!isValid(board) || isFullGrid) {return false; }
    var emptyCell = {row: 0, col: 0};
    
    if ( !(isEmptyCell(board, emptyCell) )) { return true;}

    for (let numberToCheck = 1; numberToCheck <= 9 ; numberToCheck++){
        if (isSafe(board,emptyCell.row,emptyCell.col,numberToCheck)){
            board[emptyCell.row][emptyCell.col] = numberToCheck;
            //recursion
            if (solveSudoku(board)){ return true; }
            //fail,make zero
            board[emptyCell.row][emptyCell.col] = 0;
        }
    }
    return false; //backtracking
}

