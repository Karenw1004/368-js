import React from 'react';
import Header from './Header';
import Grid from './Grid';
import './App.css';
import {Button,Container,Alert} from "react-bootstrap";
import {validateSudoko} from "./validateSudoko";

export default class App extends React.Component {

  constructor() {
    super();
    
    this.state = {
      grid: new Array(9).fill().map( () => {return new Array(9).map( () => {return 0}) })
    };
  }
  check(){
    //need params (board)
    /* param: board (character[][])
    * return: bool 
    */
    // let result = validateSudoko();
    
    // let result = true;
    // if (result) {
    //   return (
    //   <Alert variant="success"> 
    //     This is a valid sudoko grid!
    //   </Alert>
    //     )}
    // else {
    //   return (
    //     <Alert variant="danger"> 
    //       This is a INVALID sudoko grid!
    //     </Alert>
    //   )}
    }
  
  render(){
    return (
      <div className="App">
        <Header />
        <Container>    
          <Grid />
          <form>
            <Button type="submit" variant="dark" 
            onSubmit={validateSudoko}>Validate Sudoko</Button>
          </form>
    
        </Container>
      </div>
    );
  }
 
  
}


