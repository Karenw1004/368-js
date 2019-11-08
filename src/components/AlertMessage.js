import React , {useState} from 'react';
import {Alert} from 'reactstrap';

//react hooks
function AlertMessage( {valid,empty,show} ) {
  const [visible, setVisible] = useState(true);
  // const onDismiss = () => setVisible(false);
  
  if (show){
    if (empty) {
      return (
        <Alert color="danger" isOpen={visible} >
        You are a EMPTY sudoko grid!
      </Alert>
      );
    } else {
      return (
        <Alert color={valid ? "info" : "danger"} isOpen={visible} >
          You are a {valid ? "solvable" : "INSOLVABLE"} sudoko grid!
        </Alert>
      );
      }
  }
 
}
export default AlertMessage