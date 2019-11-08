import React , {useState} from 'react';
import {Alert} from 'reactstrap';

//react hooks
function AlertMessage( {valid,empty,show,solve,type} ) {
  const [visible] = useState(true);
  
  if (show){
    if (type === "valid"){
      if (empty) {
        return ( <Alert color="danger" isOpen={visible} >You are a EMPTY sudoko grid!</Alert>);
      } else {
        return (
        <Alert color={valid ? "info" : "danger"} isOpen={visible} >
           You are a {valid ? "VALID" : "INVALID"} sudoku grid!
          </Alert>
        );}
    }
    if (type === "solve") {
        return  (
          <Alert color={solve ? "primary" : "dark"} isOpen={visible} >
           {solve ? "SOLVABLE" : "INSOLVABLE"} sudoku grid!
        </Alert>
        );
      }
  }   
 
}
export default AlertMessage