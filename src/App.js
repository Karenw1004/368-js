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
      isButtonValidateClick: false,isButtonSolveClick: false, isValidSudoku: false,
      isEmptyGrid: true, isSolve: false, showAlert: false, isFullGrid: false, showFullAlert: false,
      grid: new Array(9).fill().map( () => {return new Array(9).fill().map(() => {return 0; }); })
    };
    this.handleValidating = this.handleValidating.bind(this);
  }

  handleValidating() {
    var rowArr = new Array(9).fill().map( () => {return new Set()} );
    var colArr = new Array(9).fill().map( () => {return new Set()} );
    var boxArr = new Array(9).fill().map( () => {return new Set()} );
    let isValid = true;
    let emptyCellCount = 0;
    for (let i = 0; i < 9 ; i++ ){
      for(let j = 0; j< 9; j++){
        let currCell = this.state.grid[i][j];
        
        if (currCell === 0 ){ emptyCellCount++;continue; }
        var boxIndex = Math.floor(i/3)*3 + Math.floor(j/3);
        if (rowArr[i].has(currCell) || colArr[j].has(currCell) || boxArr[boxIndex].has(currCell)){ 
          isValid = false            
        }   
        rowArr[i].add(currCell) ;
        colArr[j].add(currCell) ;
        boxArr[boxIndex].add(currCell) ;
      }
    }
    this.setState({isValidSudoku: isValid});
    emptyCellCount === 81 ? this.setState({isEmptyGrid: true}) : this.setState({isEmptyGrid: false});
  }
  
  validator= e => {
    this.handleValidating();
    this.handleShowAlert();
    this.handleValButtonState();
  }
  handleValButtonState() {
    this.setState({isButtonValidateClick: true});
    setTimeout(()=>this.setState({isButtonValidateClick: false}), 4000);
  }
  
  handleShowAlert() {
    this.setState({showAlert: true});
    setTimeout(()=>this.setState({showAlert: false}), 4000);
  }

  checkFullGrid() {
    for (let i = 0; i < 9 ; i++ ){
      for(let j = 0; j< 9; j++){
        let currCell = this.state.grid[i][j];
        if (currCell === 0 ){ return false; }
      }
    }
    return true;
  }

  handleFullAlert() {
    this.setState({showFullAlert: true});
    setTimeout(()=>this.setState({showFullAlert: false}), 4000);
  }
  solve = e => {
    if (!this.checkFullGrid()){
      if (solveSudoku(this.state.grid)){
        this.setState({isSolve: true});
        this.setState({isEmptyGrid: false});
        console.log("SOLVEABLE");
        
      } else {
        this.setState({isSolve: false});
        console.log("UNSOLVEABLE");
      }
      this.handleShowAlert();
        this.handleSolButtonState();
    } else {
      this.handleFullAlert()
    }
    
      
      
  }
  handleSolButtonState() {
    this.setState({isButtonSolveClick: true});
    setTimeout(()=>this.setState({isButtonSolveClick: false}), 4000);
  }
  resetGrid = e => {
    this.setState({grid:  new Array(9).fill().map( () => { return new Array(9).fill().map( () => {return 0;} ); })} );
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
          { this.state.isButtonValidateClick
          ? ( this.state.showAlert ? 
              (this.state.isValidSudoku  
                ? <AlertMessage type={"valid"} valid={true} empty={this.state.isEmptyGrid} show={this.state.showAlert}/> 
                : <AlertMessage type={"valid"} valid={false} empty={this.state.isEmptyGrid} show={this.state.showAlert}/>
              ) 
              : null)
          : null
          }
          {
            this.state.isButtonSolveClick
          ? ( this.state.showAlert ? 
            (this.state.isSolve  
              ? <AlertMessage type={"solve"} solve={true} empty={false} show={this.state.showAlert}/>
              : <AlertMessage type={"solve"} solve={false} empty={false} show={this.state.showAlert}/>
            ) 

              : null)
          : null

          }
          {
            this.state.showFullAlert ? <AlertMessage type={"full"} empty={false} show={this.state.showFullAlert} /> : null
          }
          
          <Row >
            <Col xs lg="3"/>      
            <Col xs lg="auto" >
            <Grid grid={this.state.grid} onChange={this.onChange} />
            <Button type="button" variant="dark" onClick={this.validator} style={{marginRight: "5px"}}>Validate Sudoko</Button>
            <Button type="button" variant="primary" onClick={this.solve}  style={{marginRight: "5px"}}>Solve Sudoko</Button>
            <Button type="button" variant="danger" onClick={ this.resetGrid}  style={{marginRight: "5px"}} >Reset</Button>
            </Col>
            <Col xs lg="3"/>
          </Row>         
          </Container>
        </div>
    );
  }
}
export default App;
