import React from 'react';

const cellColor = {
    "0" : "#CC3333" ,
    "1" : "#95E4E4" ,
    "2" : "#A3D175" ,
    "3" : "#E666FF" ,
    "4" : "#FF7A7A" ,
    "5" : "#9966FF" ,
    "6" : "#FF9933" ,
    "7" : "#5CB800" ,
    "8" : "#B771B7" 
};

const getCellColor = (row,col) => {
    let boxIndex = Math.floor(row/3)*3+Math.floor(col/3);
    return cellColor[boxIndex];
}
class Cell extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            val: ''
        };
    }

    handleInputChange = (event) => {
      const val = event.target.validity.valid ? event.target.value : this.state.val;
      this.setState({val});
    };
   

    render(){
        const {row,col} = this.props;
        const number = (
            <input type="text" className="cell" maxLength={1} pattern="[0-9]*" 
            onInput = {this.handleInputChange.bind(this)} 
            style={{backgroundColor: getCellColor(row,col)}}
            value={this.state.val}
             required />
        );
        return (<td >{number}</td>);
    }
}

export default Cell;
