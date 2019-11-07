import React from 'react';
import Header from './components/Header';
import Grid from './components/Grid';
import './stylesheets/App.css';
import AlertMessage from './components/AlertMessage';
import {Button,Container} from "react-bootstrap";
// import {validateSudoko} from "./validateSudoko";


class App extends React.Component{

  constructor(props){
    super(props);
    this.state = {
      validSudoko: true,
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
    // if (result === true) {
    //   alert("true");
    // }
    try
   { this.setState({validSudoko: true});
    console.log("clicked");
    throw "error" ;
  } catch (e) {
    console.log("error", e);
  }
    }
  
  render(){
    return (
      <div className="App">
        <Header />
        {this.state.validSudoko ? <AlertMessage /> : null}
        <Container>    
          <Grid />
          <form>
            <Button type="submit" variant="dark" 
            onSubmit={this.check}
            >Validate Sudoko</Button>
          </form>
        </Container>
      </div>
    );
  }
 
  
}

export default App;
