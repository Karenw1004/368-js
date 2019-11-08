import React from "react";
import Header from "./components/Header";
import Grid from "./components/Grid";
import AlertMessage from "./components/AlertMessage";
import {Container , Row, Col, Button} from "react-bootstrap";
import solveSudoku from "./Solver";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isButtonClick: false, isValidSudoku: false,
      isEmptyGrid: true, isSolve: false, showAlert: false,
      grid: new Array(9).fill().map( () => {return new Array(9).fill().map(() => {return 0; }); })
    };
    this.handleValidating = this.handleValidating.bind(this);
  }

  handleValidating() {
    var rowArr = new Array(9).fill().map( () => {return new Set()} );
    var colArr = new Array(9).fill().map( () => {return new Set()} );
    var boxArr = new Array(9).fill().map( () => {return new Set()} );
    let isValid = true;
    let count = 0;
    for (let i = 0; i < 9 ; i++ ){
      for(let j = 0; j< 9; j++){
        var currCell = this.state.grid[i][j];
        
        if (currCell === 0 ){ count++;continue; }
        var boxIndex = Math.floor(i/3)*3 + Math.floor(j/3);
        if (rowArr[i].has(currCell) || colArr[j].has(currCell) || boxArr[boxIndex].has(currCell)){ 
          isValid = false            
        }   
        rowArr[i].add(currCell) ;
        colArr[j].add(currCell) ;
        boxArr[boxIndex].add(currCell) ;
      }
    }
    console.log(isValid, "isvlaid");
    this.setState({isValidSudoku: isValid});
    count === 81 ? this.setState({isEmptyGrid: true}) : this.setState({isEmptyGrid: false});
   
  }

  validator= e => {
    console.log("clicked");
    this.handleValidating();
    this.setState({isButtonClick: true});
    this.handleShowAlert();
    console.log(this.state);
  }
  toggleAlertOff = () => {
    this.setState({showAlert: false});
  }

  handleShowAlert() {
    this.setState({showAlert: true});
    setTimeout(()=>this.setState({showAlert: false}), 4000);
  }
  solve = e => {
    try {
      console.log(solveSudoku(this.state.grid));
      console.log(this.state.grid);
      console.log("no error when solving");
    }
    catch (error){
      console.log("ERROR IS : " ,error);
    }
  }
  onChange = (row, col, value) => {
    let cloneGrid = [...this.state.grid];
    cloneGrid[row][col] = value;
    this.setState({
      grid: cloneGrid
    });
  };

  render() {
    console.log("Grid state: ", this.state.grid);
    console.log("==========================");
    return (
      <div className="App">
        <Container >
          <Header />
          { this.state.isButtonClick
          ? ( this.state.showAlert ? 
              (this.state.isValidSudoku  
                ?  <AlertMessage valid={true} empty={this.state.isEmptyGrid} show={this.state.showAlert}/> 
                : <AlertMessage valid={false} empty={this.state.isEmptyGrid} show={this.state.showAlert}/>) 
              : null)
          : null
          } 

          
          <Row >
            <Col xs lg="3"/>      
            <Col xs lg="auto" >
            <Grid grid={this.state.grid} onChange={this.onChange} />
            <Button type="button" variant="dark" onClick={this.validator} style={{marginRight: "10px"}}>Validate Sudoko</Button>
            <Button type="button" variant="primary" onClick={this.solve}>Solve Sudoko</Button>
            </Col>
            <Col xs lg="3"/>
          </Row>         
          </Container>
        </div>
    );
  }
}
export default App;
