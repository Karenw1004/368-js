/* param: board (character[][])
* return: bool 
*/
// export function validateSudoko(board){
//     var rowArr = new Array(9).fill().map( () => {return new Set()} );
//     var colArr = new Array(9).fill().map( () => {return new Set()} );
//     var boxArr = new Array(9).fill().map( () => {return new Set()} );

//     for (let i = 0; i < 9 ; i++ ){
//         for(let j = 0; j< 9; j++){
//             var currCell = board[i][j];

//             if (currCell === "." ){ continue;}

//             var boxIndex = Math.floor(i/3)*3 + Math.floor(j/3);
//             if (rowArr[i].has(currCell) || colArr[j].has(currCell) || boxArr[boxIndex].has(currCell)){ return false;}

//             rowArr[i].add(currCell) ;
//             colArr[j].add(currCell) ;
//             boxArr[boxIndex].add(currCell) ;
//         }
//     }
//     return true;
// }

